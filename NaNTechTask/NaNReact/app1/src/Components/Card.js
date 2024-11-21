import React from 'react'

function Card({user,Delete}) {
    return (
        
        <div className="card col-3">
            <img className="card-img-top  h-50" src={user.image} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{user.category}</h4>
                <p className="card-title">{user.title}</p>
                <button href="#" className="btn btn-primary w-100" onClick={()=>Delete(user.id)}>Sil</button>
            </div>
        </div>
    )
}



export default Card