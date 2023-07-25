import React from "react";
import coffeaPlant from "../images/coffeaplant.jpg"
import legend from "../images/legends.jpg"
import coffeeShop from "../images/coffeeshop.jpg"

export default function About(){
    return (
        <div className="history">
            <h1>Coffee history is unknown to the world</h1>
            <div className="history-1">
                <p>
                    Coffe in most of places can be considered a central part of diary diet culture but 
                    it has been consumed even before any recorded history. There are some legends and 
                    histories that tell its origin.
                </p>

                <img src={coffeaPlant} alt="Coffea plant"/>
            </div>

            <div className="history-2">
                <img src={legend} alt="Coffea plant"/>
                <p>
                    One of these histories says there were berries on small trees known as Coffea plants where Ethiopia is today.
                    The history goes that a goat herder named Kaldi saw his goats became so energetic that they didn't sleep at nights. And after
                    tasting them himself, he became exited and alert through some long hours. 
                </p>
            </div>
            <p>Then he shared this discovery with monks who 
                    made a drink with these berries, and so the knowledge of energizing berries began to expand through the Arabian peninsula and
                    the rest of the world.</p>
            
            <div className="history-3">
                <p>
                    By the 17th century, coffee had made its way to Europe as an unusual dark beverage wich became popular across the continent
                    Some people were afraid of this new beverage, being called "bitter invention of <span className="satan">Satan</span>😱". The controversy was
                    so inmense that Pope Clement VIII decided to taste it for himself before making a decision: The drink was so satisfying he
                    gave it the Papal approval!
                </p>
                <img src={coffeeShop} alt="Coffea plant"/>
            </div>
            

            <p>
                Coffee houses were quickly becoming centers of social activity and communication in the major cities of England, Austria, 
                France, Germany and Holland. Coffee began to replace wine and beer as breakfast beverages. Those who drank Coffee saw 
                their quality of work greatly encreased.
            </p>

            <p>
                As the coffee demand continue to rise, there was a fierce competition to cultivate coffe outside of Arabia.
                In 1714 a coffee plant was gifted to  King Louis XIV of France. One of his naval officers, Gabriel de Clieu got a seedling of the plant
                then he traveled to Martinique were this plant became the parent of all coffee through the Americas. Missionaries and travelers, traders 
                and colonists continued to carry coffee seeds to new lands, and coffee trees were planted worldwide. New nations were established on coffee 
                economies. Fortunes were made and lost. By the end of the 18th century, coffee had become one of the world's most profitable export crops. After crude oil, coffee is the most sought commodity in the world.
            </p>
        </div>
    )
}