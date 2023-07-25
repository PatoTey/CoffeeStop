import React from "react"
import { useOutletContext } from "react-router-dom"

export default function CoffeeDescription(){
    const [coffee] = useOutletContext()
    return (
        <div className="coffee-description">
            <h3>Dont know what a {coffee.name} is?</h3>
            <p>{coffee.description}</p>
            <h4>You can get one for just <span>${coffee.price}</span> USD</h4>
        </div>
    )
}