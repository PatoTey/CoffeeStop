import React from "react";
import uwu from "../images/uwu.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

export default function Contact(){
    return (
        <div className="contact-page">
            <div className="contacts-intro">
                <h1>Want to talk to Us?</h1>
            </div>
            <div className="contacts">
                <div className="contacts-email">
                    Email us at coffee@stop.com
                </div>
                <div className="contacts-phone">
                    Call (+9999) 2345 6789
                </div>
            </div>
            <div className="devCard">
                <img className="devAvatar" src={uwu} alt="El avatar del dev" />
                <div className="devData">
                    <h2>Patricio (Teyo) Tudela</h2>
                    <p>FullStack Developer</p>
                    <small>Arica, Chile</small>
                    <div className="socials">
                        <a target="_blank" rel="noreferrer" href="https://github.com/PatoTey"><img className="github" src={github} alt="el gato de github"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patricio-tudela-chavera-4bab47268/"><img className="linkedin" src={linkedin} alt="iniciales de linkedin"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}