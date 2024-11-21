import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function Cards() {
    const [Baza, setBaza] = useState([])
    // https://dummyjson.com/products
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(data => {
            setBaza(data.data)
        })
    })
    // function Add() {
    //     setBaza(Baza.concat(
    //         {
    //             id: Math.random(),
    //             img: "https://turbo.azstatic.com/uploads/full/2023%2F09%2F27%2F18%2F29%2F25%2F1f5e2340-c2cb-4b91-8268-258d2be4f540%2F91789_bMWyP-f3J5QXF9dcdWbs0w.jpg",
    //             marka: "Mercedes"
    //         },))
    // }
    function Delete(id) {
        setBaza(Baza => Baza.filter(d =>
            d.id !== id))
    }
    return (
        <>
            <div className="col-10 row">
                <button className='w-100 bg-white'>ADD</button>
                {
                    Baza.map(x => {
                        return <Card user={x} key={x.id} Delete={Delete} />
                    })
                }
            </div>
        </>
    )
}


export default Cards