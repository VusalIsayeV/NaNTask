import React, { useEffect, useState } from 'react'
import Car from './Car'
import axios from "axios"
import "../Style/Cars.css"


export default function Cars() {
    const [Data, setData] = useState([])
    const [Markalar, setMarkalar] = useState([])
    const [Kuzov, setKuzov] = useState([])
    const [ChangeMarka, setChangeMarka] = useState("Hamısı")
    const [ChangeModel, setChangeModel] = useState("Hamısı")
    const [ChangeKuzov, setChangeKuzov] = useState("Hamısı")
    useEffect(() => {
        axios.get("http://localhost:3000/Data/").then(res => {
            setData(res.data)
        }).catch(error => {
            console.error("Error fetching Data:", error);
        });

        axios.get("http://localhost:3002/Markalar").then(res => {
            setMarkalar(res.data)
        }).catch(error => {
            console.error("Error fetching Markalar:", error);
        });

        axios.get("http://localhost:3002/Kuza").then(res => {
            setKuzov(res.data)
            // console.log(res.data);
        }).catch(error => {
            console.error("Error fetching Kuzov:", error);
        });
    },[])

    const Modeller = Markalar.find(marka => marka.Marka === ChangeMarka)?.Model.map(model => model.Model) || [];
    const handleMarkaChange = (x) => {
        setChangeMarka(x.target.value);
        setChangeModel("Hamısı"); //Marka deyisende modelleri sifirliyirig...
    };
    return (
        <div>
            <section>
                <div className="mt-4">
                    <div id="step-1">
                        <div className="row w-75 items-center m-auto">
                            <select value={ChangeMarka} onChange={handleMarkaChange} className="form-select col-md-5 w-50">
                                <option value={"Hamısı"}>Hamısı</option>
                                {
                                    Markalar.map(x => {
                                        return <option value={x.Marka} key={x.id}>{x.Marka}</option>
                                        // console.log(x.Marka);
                                    })
                                }
                            </select>
                            <select value={ChangeModel} onChange={(x) => setChangeModel(x.target.value)} className="form-select col-md-5 w-50">
                                <option value={"Hamısı"}>Hamısı</option>
                                {
                                    Modeller.map(x => {
                                        return <option value={x} key={Math.random()}>{x}</option>
                                        // console.log(x.Marka);
                                    })
                                }
                            </select>
                            <select value={ChangeKuzov} onChange={(x) => setChangeKuzov(x.target.value)} className="form-select col-md-5 ">
                                <option value={"Hamısı"}>Hamısı</option>
                                {
                                    Kuzov.map(x => {
                                        return <option value={x.Kuza} key={Math.random()}>{x.Kuza}</option>
                                        // console.log(x.Marka);
                                    })
                                }
                            </select>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <h1 className="text-center my-3">Axdardığın Maşın Elanları</h1>
            </section>
            <section className="py-0">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            Data.filter(x => {
                                return ChangeMarka === x.Marka || ChangeMarka === "Hamısı"
                            }).filter(y => {
                                return ChangeModel === y.Model || ChangeModel === "Hamısı"
                            }).filter(z => {
                                return ChangeKuzov === z.Tipi || ChangeKuzov === "Hamısı"
                            }).map(x => {
                                return <Car Auto={x} key={x.id}></Car>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
