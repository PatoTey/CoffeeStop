import React from "react";
import { Link } from "react-router-dom";


export default function Header(){
    return (
        <header>
            <Link className="unLink" to="/"><h1>Coffee Stop ☕</h1></Link>
            <nav>
                <Link className="unLink" to="/products"><p className="nav-item">Products</p></Link>
                <Link className="unLink" to="/about"><p className="nav-item">About History</p></Link>
                <Link className="unLink" to="/contact"><p className="nav-item">Contact</p></Link>
            </nav>
        </header>
    )
}