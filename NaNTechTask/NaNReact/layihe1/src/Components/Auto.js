import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Outlet, useParams } from "react-router-dom";
import "../Style/Auto.css"
import Cars from './Cars'

export default function Auto() {
    const [Data, setData] = useState(null);
    const [deleteInput, setDeleteInput] = useState("");
    const { id } = useParams();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/Data/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error("Error fetching Data:", error);
            });
    }, [id]);

    if (!Data) {
        return <div className='Loading'>Axdardiginiz melumat silinmisdir ve ya yoxdur</div>;
    }

    {
        console.log(Data.IMG);
    }

    function DeletePost() {
        axios.delete('http://localhost:3000/Data/' + id)
            .then(response => {
            })
            .catch(error => {
                console.error('Melumat silinmedi', error);
            });
    }
    function OpenDeleteModal() {
        const userInput = prompt("Enter the password:");
        setDeleteInput(userInput);
        if (userInput === null) {
            return;
        }
        if (userInput == Data.Password) {
            DeletePost();
        } else {
            alert("Sifrə Yalnışdır.");
        }
    }
    var ModalDiv = () => {
        setIsActive(!isActive);

    }
    return (
        <div className='MainMax'>
            {isActive && <div className='ActiveModal'>
                <div className={`PhotosDiv col-sm-12`}>
                    <p className='On-Off ModalZindax' onClick={ModalDiv}>XXX</p>
                    <div className='carousel-container WidthModalImg m-auto'>
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">

                            <div className="carousel-indicators">
                                {Data.IMG.map((image, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? 'active' : ''}>
                                    </button>
                                ))}
                            </div>



                            <div className="carousel-inner">
                                {Data.IMG.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={image.image} alt={`Image ${index}`} className="d-block w-100" />
                                    </div>
                                ))}
                            </div>

                            <button className="carousel-control-prev Button-Color" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon  Button-BgColor"></span>
                            </button>
                            <button className="carousel-control-next Button-Color" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon Button-BgColor"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
            <div className='Main row'>
                <div className={`PhotosDiv col-sm-6`}>
                    <div className='carousel-container w-100 m-auto'>
                        <p className='On-Off' onClick={ModalDiv}>XXX</p>
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">

                            <div className="carousel-indicators">
                                {Data.IMG.map((image, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? 'active' : ''}>
                                    </button>
                                ))}
                            </div>



                            <div className="carousel-inner">
                                {Data.IMG.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={image.image} alt={`Image ${index}`} className="d-block w-100" />
                                    </div>
                                ))}
                            </div>

                            <button className="carousel-control-prev Button-Color" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon  Button-BgColor"></span>
                            </button>
                            <button className="carousel-control-next Button-Color" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon Button-BgColor"></span>
                            </button>
                        </div>
                    </div>
                    <Outlet />
                </div>
                <div className='About col-sm-4'>
                    <h1>{Data.Marka} {Data.Model}</h1>
                    <h3>{Data.Tipi}; {Data.Ili}; {Data.Yurus};</h3>
                    <p className='Price'>{Data.Qiymeti}</p>
                    <button className='Elaqe'>Əlaqə:{Data.Elaqe}</button>
                    <button className='DeletePost' onClick={OpenDeleteModal}>Elanı sil</button>
                    <p className='Haqqinda'>{Data.Haqqinda}</p>
                    {/* Eklenen input */}
                </div>
                <Cars></Cars>
            </div>
        </div>
    );
}
