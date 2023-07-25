import React, { useState, useEffect } from "react";
import { getCoffees } from "../database/database";
import { Link } from "react-router-dom";

export default function Coffees(){
    const [coffees, setCoffees] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        setLoading(true)
        async function loadCoffees() {
            try {
                const data = await getCoffees()
                setCoffees(data)
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        loadCoffees()
    },[])

    const coffeeList = coffees.map(coffee => {
        return (
            <div key={coffee.id} className="coffee">
                <h3 className="coffee-title">{coffee.name}</h3>
                <Link className="unLink linkImg" to={`/products/${coffee.id}`}>
                    <div>
                        <img className="coffee-img" src={coffee.image} alt={`${coffee.name} Coffee`} />
                    </div>
                </Link>
                <p className="coffee-price">${coffee.price} USD</p>
                <button className="coffee-btn">Order Now!</button>
            </div>
        )
    })

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
    return(
        <div className="products-page">
            <h1>Our Coffees:</h1>
            <div className="products">
                {coffeeList}
            </div>
        </div>
    )
}