import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-light m-auto">
        <div className="container-fluid m-auto ">
          <h1 className="text-white">Sayt.az</h1>
          <ul className="navbar-nav px-3">
            <li className="nav-item px-2">
              <Link to="/" className="nav-link text-white" href="#">Home</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/About" className="nav-link text-white" href="#">About</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/More" className="nav-link  text-white" href="#">More</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
}
