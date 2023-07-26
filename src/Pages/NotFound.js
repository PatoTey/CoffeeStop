import React from "react";
import notfoundimg from "../images/notfoundimg.jpg"

export default function NotFound(){
    return (
        <div className="notfound-page">
            <h1 className="notfound-title">Oops O,0 seems that there is nothing around here...</h1>
            <img className="notfound-img" src={notfoundimg} alt="and surprised emoji face"/>
        </div>
    )
}