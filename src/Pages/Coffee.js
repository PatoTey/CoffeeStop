import React, {useEffect, useState} from "react";
import { getCoffee } from "../database/database";
import { Link, useParams, Outlet } from "react-router-dom";
import dataAux from "../data"

export default function Coffee(){
    const [coffee, setCoffee] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        async function loadCoffees(){
            try {
                const data = await getCoffee(id)
                setCoffee(data)
            } catch(err) {
                console.log(err)
                setError(err)
                setCoffee(dataAux[id-1])
                console.log("error setting aux")
            } 
            finally {
                setLoading(false)
            }
        }
        loadCoffees()
    },[id])


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
        <div className="coffee-detail">
            <h2>Found it interesting? Learn more below!</h2>
            {coffee ? <div className="coffee-detail-data">
                <h2 className="coffee-detail-title">{coffee.name}</h2>
                <img className="coffee-detail-img" src={coffee.image} alt={`a ${coffee.name} coffe`}/> 
                <nav className="coffee-detail-nav">
                    <Link to="." className="unLink dettail-nav-item">Description</Link>
                    <Link to="recipe" className="unLink dettail-nav-item">Recipe</Link>
                </nav>
                <Outlet context={[coffee]}/>
            </div>: null}
        </div>
    )
}