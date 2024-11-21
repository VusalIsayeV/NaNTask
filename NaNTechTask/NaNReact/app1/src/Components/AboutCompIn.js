import React from 'react'

function AboutCompIn({cont}) {
    console.log(cont);
    return (
        <div className="toast show col-4 m-2">
            <div className="toast-header">
                {cont.header}
            </div>
            <div className="toast-body">
                {cont.content}
            </div>
        </div>
    )
}


export default AboutCompIn