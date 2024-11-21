import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
import './Cards.css'
export default function Cards() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [Cat, setCat] = useState("All")
    const [page, setPage] = useState(0)
    const [menu, setMenu] = useState(true)


    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products').then(data => {
    //         setProducts(data.data);
    //         console.log(data);


    //     });
    // });
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then(res => {
            setProducts(res.data)
        })
        axios.get('https://api.escuelajs.co/api/v1/categories').then(res => {
            setCategories(res.data)
        })
    })
    return (
        <>
            <div className='col-2'>
                <button type="button" class="btn btn-success" onClick={()=>setMenu(!menu)}>Daha Cox</button>
                <ul className={"list-group "+(menu ? "" : "d-none")}>
                    <a onClick={() => {
                        setCat("All")
                        setPage(0)
                    }} href="#" className={"list-group-item" + " " + (Cat === "All" ? "active" : "")}>All</a>
                    {
                        categories.map(y => {
                            return <a onClick={() => {
                                setCat(y.name)
                                setPage(0)
                            }} href="#" key={y.id} className={"list-group-item" + " " + (Cat === y.name ? "active" : "")}>{y.name}</a>
                        })
                    }
                </ul>
            </div>
            <div className="col-10">
                <div className="row">
                    {
                        products.filter(z => {
                            return z.category.name === Cat || Cat === "All"
                        }).slice(page * 4, page * 4 + 4).map(x => {
                            return <Card Product={x} key={x.id}></Card>
                            // console.log(page);
                        })
                    }
                </div>
                <ul className="pagination">
                    {
                        [...Array(Math.ceil(products.filter(z => {
                            return z.category.name === Cat || Cat === "All"
                        }).length / 4))].map((a, i) => {
                            return <li className="page-item" onClick={() => setPage(i)}><a class="page-link" href="#">{i + 1}</a></li>
                        })

                    }
                </ul>
            </div>

        </>
    )
}