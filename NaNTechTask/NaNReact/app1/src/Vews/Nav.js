import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav m-auto">
            <li className="nav-item px-5">
              <Link className="nav-link active text-white" to="/">Home</Link>
            </li>
            <li className="nav-item px-5">
              <Link className="nav-link text-white" to="/About">About</Link>
            </li>
            <li className="nav-item px-5">
              <Link className="nav-link text-white" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item px-5">
              <Link className="nav-link text-white" to="/More">More</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav
