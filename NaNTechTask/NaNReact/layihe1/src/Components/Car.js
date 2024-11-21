import React from 'react'
import "../Style/Car.css"
import {NavLink} from 'react-router-dom';
// import BigCar from './Auto';
// import axios from 'axios';

export default function Car({ Auto }) {

    return (
        <div className="px-2">
            <div className="col mb-5 ">
                <div className="card">
                    <img className="card-img-top" src={Auto.IMG[0].image} alt="..." />
                    <div className="card-body">
                        <div className="text-center">
                            <h5 className="fw-bolder"><b>{Auto.Marka}</b>/{Auto.Model}</h5>
                            <p className="small my-1"><b>Kuza Tipi:</b>{Auto.Tipi}. <b>Ili:</b>{Auto.Ili}.</p>
                            <h5 className="text-danger py-0">{Auto.Qiymeti}</h5>
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <NavLink to={`/Auto/${Auto.id}`}>read more</NavLink>
                            {/* <NavLink to={`/Auto`}>read more</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
