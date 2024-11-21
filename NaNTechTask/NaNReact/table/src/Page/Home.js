import React, { useEffect, useState } from 'react'
import Tr from '../Component/Tr'
import data from "../data.json";
import axios from "axios"
import "../Style/Home.css"

export default function Home() {
    // URL='https://reqres.in/api/users'
    URL = 'https://northwind.vercel.app/api/categories'
    const [Baza, setBaza] = useState([])
    const [SearchValue, setSearchValue] = useState("")
    const [Name, setName] = useState(null)
    const [Surname, setSurname] = useState(null)
    const [Email, setEmail] = useState(null)
    useEffect(() => {
        axios.get(URL).then(res => {
            setBaza(res.data)
            // console.log(res.data.data);
        })
    })
    console.log(data);
    function addTr() {
        // event.preventDefault()
        axios.post(URL, {
            "id": Math.random(),
            "description":Name,
            "name":Surname
        }).then(res => {
            console.log(res);
        })
    }
    function Remove(id) {
        axios.delete('https://northwind.vercel.app/api/categories/' + id).then(res => {
            console.log(res);
        })
    }
    {
        // console.log(SearchValue);
        // console.log();
        // console.log(Name);
        console.log(Surname);
        // console.log(Email);
    }
    return (
        <div className='row m-0 p-0 bg-dark h-100'>
            <div className='col-4 p-0 position-sticky sticky-top Black'>
                <div>
                    <div className="card">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-5">Məlumatları daxil edin</h2>

                            <form>

                                <div className="form-outline mb-4">
                                    <input onChange={(x)=>setName(x.target.value)} type="text" id="form3Example1cg" className="form-control form-control-lg"/>
                                    <label className="form-label" htmlFor="form3Example1cg">Adınız</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input onChange={(e)=>setSurname(e.target.value)} type="text" id="form3Example3cg" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form3Example3cg">Soyadınız</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input onChange={(e)=>setEmail(e.target.value)} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form3Example4cg">Emailiniz</label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button onClick={addTr} type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Daxil Et</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-8 p-0'>
                <div className='position-sticky sticky-top'>
                    <div>
                        <div className="form-outline" data-mdb-input-init>
                            <input onChange={(e)=>setSearchValue(e.target.value)} type="search" id="form1" className="form-control bg-dark text-white " placeholder="Axdaris" aria-label="Search" />
                        </div>
                    </div>
                </div>
                <div >
                    <div>
                        <table className="table table-dark table-hover">
                            {/* position-sticky sticky-top */}
                            <thead className="">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ad</th>
                                    <th scope="col">Soyad</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Baza.filter(y=>{
                                        // return console.log((y.name).toUpperCase());
                                        // return console.log(Surname);
                                        // return SearchValue===""
                                        return ((y.name).toUpperCase()).includes(SearchValue.toUpperCase()) || ((y.description).toUpperCase()).includes(SearchValue.toUpperCase())|| SearchValue===""
                                    }).map((x, i) => {
                                        // return <Tr Users={x} key={x.id} Say={i + 1} />
                                        return <Tr Users={x} key={x.id} Say={i + 1} Remove={() => Remove(x.id)} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
