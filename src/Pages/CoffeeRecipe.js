import React from "react"
import { useOutletContext } from "react-router-dom"

export default function CoffeeRecipe(){
    const [coffee] = useOutletContext()
    const ingredientList = coffee.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li> )
    return (
        <div className="coffee-recipe">
            <h3>What is it made of?</h3>
            <ul>
                {ingredientList}
            </ul>
        </div>
    )
}