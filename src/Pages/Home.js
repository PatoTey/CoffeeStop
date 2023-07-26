import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCoffee } from "../database/database";
import dataAux from "../data"

export default function Home(){
    const [coffee, setCoffee] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(()=>{
        setLoading(true)
        async function loadCoffees() {
            try {
                const random = Math.ceil(Math.random()*12)
                const data = await getCoffee(random.toString())
                setCoffee(data)
            } catch (err) {
                console.log(err)
                setError(err)
                const id = Math.ceil(Math.random()*dataAux.length)
                setCoffee(dataAux[id.toString()])
                console.log("error setting aux")
            }finally {
                setLoading(false)
            }
        }
        loadCoffees()
    },[])

    if(loading){
        return (
            <h2 className="loadingMSG">Loading resources...</h2>
        )
    }

    if(error){
        return (
            <h2 className="errorMSG">Something went wrong...come back later</h2>
        )
    }

    return (
        <div className="home-main">
            <div className="welcome">
                <h1>Welcome to Coffee Stop!</h1>
                <p>Here you can order your prefered type of coffee</p>
                <p>Want to know more about Coffee? Check out the history in <span className="main-show"><Link to="/about">About</Link></span></p>
            </div>
            <div className="section-store">
                <h2 className="store-title">Check our Coffees right in here!</h2>
                <p className="store-subtitle">From Capuccino to Lattes, Frappé to Doppio and more!</p>
                { coffee ? <> <h3 className="suggestion-title">Maybe you would like this one:</h3>
                    <Link to={`/products/${coffee.id}`} className="unLink">
                        <div className="coffee-suggestion">
                            <h1 className="coffee-suggestion-title">{ coffee.name }</h1>
                            <div className="coffee-suggestion-data">
                                <img className="suggestion-img" src={coffee.image} alt="a coffee suggestion"/>
                                <div className="data-detail">
                                    <p className="detail-description"> {coffee.description} </p>
                                    <p className="detail-price"><strong> For just ${coffee.price}!</strong> </p>
                                </div>
                            </div>
                        </div>
                        </Link>
                     </>
                : null
                }
                <h3 className="suggestion-allp">See <Link className="unLink" to="/products">all of out products</Link></h3>
            </div>
        </div>
    )
}