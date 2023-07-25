import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomCoffee } from "../database/database";

export default function Home(){
    const [coffee, setCoffee] = useState(null)

    
    useEffect(()=>{
        async function loadCoffees() {
            try {
                const random = Math.ceil(Math.random()*10)
                const data = await getRandomCoffee(random.toString())
                setCoffee(data)
            } catch (err) {
                console.log(err)
            }
        }
        loadCoffees()
    },[])

    return (
        <div className="home-main">
            <div className="welcome">
                <h1>Welcome to Coffee Stop!</h1>
                <p>Here you can order your prefered type of coffee</p>
                <p>Want to know more about Coffee? Check out the history in <span className="main-show"><Link to="/about">About</Link></span></p>
            </div>
            <div className="section-store">
                <h2>Check our Coffees right in here!</h2>
                <p>From Capuccino to Lattes, Frappé to Doppio and more!</p>
                { coffee ? <> <h3>Maybe you would like this one:</h3>
                    
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
                     </>
                : null
                }
                <h3>See <Link className="unLink" to="/products">all of out products</Link></h3>
            </div>
        </div>
    )
}