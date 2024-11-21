import React from 'react'
import "../Style/Home.css"
import Cars from '../Components/Cars'
function Home() {
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Horse Power </h1>
                        <p className="lead fw-normal text-white-50 mb-0">Avtomobil almağ və ya Avtomobilini satmağ istəyirsən ? 
                        <b> Doğru ünvandasan</b></p>
                    </div>
                </div>
            </header>
            <Cars></Cars>
        </>
    )
}

export default Home