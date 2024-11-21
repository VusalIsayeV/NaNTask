import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../Style/AddPost.css';

export default function AddPost() {
    const [Markalar, setMarkalar] = useState([]);
    const [Kuzov, setKuzov] = useState([]);
    const [ChangeMarka, setChangeMarka] = useState("Hamısı");
    const [ChangeModel, setChangeModel] = useState("Hamısı");
    const [ChangeKuzov, setChangeKuzov] = useState("Hamısı");
    const [Haqqinda, setHaqqinda] = useState();
    const [Elaqe, setElaqe] = useState();
    const [Yurus, setYurus] = useState();
    const [Qiymet, setQiymet] = useState();
    const [il, setil] = useState();
    const [Sekil1, setSekil1] = useState();
    const [Sekil2, setSekil2] = useState();
    const [Sekil3, setSekil3] = useState();
    const [isButtonActive, setIsButtonActive] = useState(false);
    var Password;

    useEffect(() => {
        axios.get("http://localhost:3002/Markalar")
            .then(res => {
                setMarkalar(res.data);
            })
            .catch(error => {
                console.error("Error fetching Markalar:", error);
            });

        axios.get("http://localhost:3002/Kuza")
            .then(res => {
                setKuzov(res.data);
            })
            .catch(error => {
                console.error("Error fetching Kuzov:", error);
            });
    }, []);

    useEffect(() => {
        // Tüm inputlar ve selectler doluysa butonu aktifleştir
        if (ChangeMarka !== "Hamısı" && ChangeModel !== "Hamısı" && ChangeKuzov !== "Hamısı" && Haqqinda && Elaqe && Yurus && Qiymet && il && Sekil1 && Sekil2 && Sekil3) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [ChangeMarka, ChangeModel, ChangeKuzov, Haqqinda, Elaqe, Yurus, Qiymet, il, Sekil1, Sekil2, Sekil3]);

    function addTr() {
        Password = Math.floor(Math.random() * 999) + 1;
        axios.post("http://localhost:3000/Data", {
            "id": Math.random(),
            "Marka": ChangeMarka,
            "Model": ChangeModel,
            "Tipi": ChangeKuzov,
            "Qiymeti": Qiymet + " AZN",
            "Ili": il,
            "Haqqinda": Haqqinda,
            "Elaqe": Elaqe,
            "Yurus": Yurus,
            "IMG": [
                { "image": Sekil1 },
                { "image": Sekil2 },
                { "image": Sekil3 }
            ],
            "Password": Password
        })
            .then(res => {
                console.log(res);
                alert("Elan uğurla yerləşdirildi. Password:" + Password);
            })
            .catch(error => {
                alert("Elan yerləşdirilərkən bir xəta yarandı. Xahiş edirəm yenidən cəhd edin.");
            });
    }

    const Modeller = Markalar.find(marka => marka.Marka === ChangeMarka)?.Model.map(model => model.Model) || [];
    const handleMarkaChange = (x) => {
        setChangeMarka(x.target.value);
        setChangeModel("Hamısı"); // Marka değiştiğinde modelleri sıfırlıyoruz
    };

    return (
        <section>
            <div className="mt-4">
                <div id="step-1">
                    <div className="row w-75 items-center m-auto">
                        <h5 className='w-25'>Marka:</h5>
                        <select value={ChangeMarka} onChange={handleMarkaChange} className="form-select col-md-5 w-75">
                            <option value={"Hamısı"}>Hamısı</option>
                            {Markalar.map(x => <option value={x.Marka} key={x.id}>{x.Marka}</option>)}
                        </select>
                        <h5 className='w-25'>Model:</h5>
                        <select value={ChangeModel} onChange={(x) => setChangeModel(x.target.value)} className="form-select col-md-5 w-75">
                            <option value={"Hamısı"}>Hamısı</option>
                            {Modeller.map(x => <option value={x} key={Math.random()}>{x}</option>)}
                        </select>
                        <h5 className='w-25'>Kuzov:</h5>
                        <select value={ChangeKuzov} onChange={(x) => setChangeKuzov(x.target.value)} className="form-select col-md-5 w-75">
                            <option value={"Hamısı"}>Hamısı</option>
                            {Kuzov.map(x => <option value={x.Kuza} key={Math.random()}>{x.Kuza}</option>)}
                        </select>
                        <form>
                            <h5 className='w-25'>Qiymet:(AZN)</h5>
                            <input type="text" onChange={(x) => setQiymet(x.target.value)} className="form-control" id="Qiymet" placeholder="Qiymet" name="Qiymet" required />
                            <h5 className='w-25'>il:</h5>
                            <input type="text" onChange={(x) => setil(x.target.value)} className="form-control" id="il" placeholder="il" name="il" required />
                            <h5 className='w-25'>Haqqinda:</h5>
                            <input type="text" onChange={(x) => setHaqqinda(x.target.value)} className="form-control" id="Haqqinda" placeholder="Haqqinda" name="Haqqinda" required />
                            <h5 className='w-25'>Elaqe:</h5>
                            <input type="text" onChange={(x) => setElaqe(x.target.value)} className="form-control" id="Sekil" placeholder="Sekil" name="Sekil" required />
                            <h5 className='w-25'>Yurus:</h5>
                            <input type="text" onChange={(x) => setYurus(x.target.value)} className="form-control" id="Sekil" placeholder="Sekil" name="Sekil" required />
                            <h5 className='w-25'>Sekil1:(URL)</h5>
                            <input type="text" onChange={(x) => setSekil1(x.target.value)} className="form-control" id="Sekil1" placeholder="Sekil1" name="Sekil1" required />
                            <h5 className='w-25'>Sekil2:(URL)</h5>
                            <input type="text" onChange={(x) => setSekil2(x.target.value)} className="form-control" id="Sekil2" placeholder="Sekil2" name="Sekil2" required />
                            <h5 className='w-25'>Sekil3:(URL)</h5>
                            <input type="text" onChange={(x) => setSekil3(x.target.value)} className="form-control" id="Sekil3" placeholder="Sekil3" name="Sekil3" required />
                            <div className="d-flex justify-content-center">
                                <button type="submit" className={`btn btn-dark hov btn-block btn-lg gradient-custom-4 text-body my-5 ${isButtonActive ? '' : 'disabled'}`} onClick={addTr}>Elan Yerləşdir</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
