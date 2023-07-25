import React, { useState, useEffect } from "react";
import { getCoffees } from "../database/database";

export default function Coffees(){
    const [coffees, setCoffees] = useState([])

    useEffect(()=>{
        async function loadCoffees() {
            try {
                const data = await getCoffees()
                setCoffees(data)
            } catch (err) {
                console.log(err)
            }
        }
        loadCoffees()
    },[])

    const coffeeList = coffees.map(coffee => {
        return (
            <div key={coffee.id} className="coffee">
                <h3 className="coffee-title">{coffee.name}</h3>
                <img className="coffee-img" src={coffee.image} alt={`${coffee.name} Coffee`} />
                <p className="coffee-price">${coffee.price} USD</p>
                <button className="coffee-btn">Order Now!</button>
            </div>
        )
    })
    return(
        <div className="products-page">
            <h1>Our Coffees:</h1>
            <div className="products">
                {coffeeList}
            </div>
        </div>
    )
}