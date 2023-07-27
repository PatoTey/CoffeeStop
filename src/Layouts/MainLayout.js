import React from "react";
import {Outlet, Link} from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(){
    return (
        <div className="main-Layout">
            <Header/>
            <Outlet/>
            <Footer/>
            <div className="popup">
                <Link to="/contact" className="unLink"><h4 className="popup-title">Any Questions?</h4></Link>
            </div>
        </div>
    )
}