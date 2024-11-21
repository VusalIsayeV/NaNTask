import React from 'react'
import './Card.css'
export default function Card({Product}) {
    return (
        <div className="card col-3">
            <img className="card-img-top" src={Product.images[0]} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{Product.title}</h4>
            </div>
        </div>
    )
}
