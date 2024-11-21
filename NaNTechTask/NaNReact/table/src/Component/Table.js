// import React, { useEffect, useState } from 'react'
// import Tr from './Tr'
// import axios from "axios"

// export default function Table() {
//     const [Baza, setBaza] = useState([])
//     useEffect(() => {
//         axios.get('https://northwind.vercel.app/api/categories').then(res => {
//             setBaza(res.data)
//             console.log(res.data);
//         })
//     })
//     function addTr(event) {
//         event.preventDefault()
//         console.log("Salam");
//         axios.post('https://northwind.vercel.app/api/categories', {
//             "id": Math.random(),
//             "description": "Seaweed and fish",
//             "name": "Seafood"
//         }).then(res => {
//             console.log(res);
//         })
//     }
//     return (
//         <div>
//             <table className="table table-dark table-hover">
//                 {/* position-sticky sticky-top */}
//                 <thead className="">
//                     <tr>
//                         <th scope="col" onClick={addTr}>#</th>
//                         <th scope="col">Ad</th>
//                         <th scope="col">Soyad</th>
//                         <th scope="col">Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         Baza.map((x, i) => {
//                             return <Tr Users={x} key={x.id} Say={i + 1} />
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
