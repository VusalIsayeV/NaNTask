import React from 'react'
import Carousel1 from '../img/Carousel1.png'
import Carousel2 from '../img/Carousel2.png'

export default function Carousel() {
    return (
        <div className='w-75 m-auto'>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Carousel1} alt="Los Angeles" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel2} alt="Chicago" className="d-block w-100" />
                    </div>
                </div>

                <button className="carousel-control-prev " type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark text-dark"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark text-dark"></span>
                </button>
            </div>
        </div>
    )
}
