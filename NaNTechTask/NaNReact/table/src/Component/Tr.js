import React from 'react'

export default function Tr({Users,Say,Remove}) {
    // Remove(Users.id)
    return (
        <tr>
            <th scope="row">{Say}</th>
            <td>{Users.name}</td>
            <td>{Users.description}</td>
            <td>{Users.name}@gmail.com</td>
            {/* <td><button>Delete</button></td> */}
            <td><button onClick={()=>Remove()}>Delete</button></td>
        </tr>
    )
}