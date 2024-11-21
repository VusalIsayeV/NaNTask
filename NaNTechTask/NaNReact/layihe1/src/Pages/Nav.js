import React, { useState, useEffect } from 'react';
import "../Style/Nav.css"
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark  Sticky w-100">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand text-white" href="#!"><Link  className="nav-link active text-white" to="/">HorsePower.az</Link ></a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon bg"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><Link  className="nav-link active text-white" to="/">Elanlar</Link ></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Əlaqə</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item  active text-white">Əlaqə Vasitələri</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Mail:vvusalisayevv@gmail.com</a></li>
                                    <li><a className="dropdown-item" href="#!">Tel:051-398-16-26</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link  className="nav-link text-white" to="/About">Haqqımızda</Link ></li>
                            <li className="nav-item Add"><Link  className="nav-link text-dark" to="/AddPost">Elan Yerəşdir</Link ></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>


        // <div>
        //     <nav className="navbar navbar-expand-sm bg-dark navbar-light">
        //         <div className="container-fluid">
        //             <ul className="navbar-nav m-auto">
        //                 <li className="nav-item px-5">
        //                     <Link className="nav-link active text-white" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item px-5">
        //                     <Link className="nav-link text-white" to="/About">About</Link>
        //                 </li>
        //                 <li className="nav-item px-5">
        //                     <Link className="nav-link text-white" to="/Contact">Contact</Link>
        //                 </li>
        //                 <li className="nav-item px-5">
        //                     <Link className="nav-link text-white" to="/More">More</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        //     <Outlet />
        // </div>
    )
}




