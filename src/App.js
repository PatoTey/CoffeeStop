import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Coffees from "./Pages/Coffees";
import Contact from "./Pages/Contact";
import Coffee from "./Pages/Coffee";
import CoffeeDescription from "./Pages/CoffeeDescription";
import CoffeeRecipe from "./Pages/CoffeeRecipe";

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout/>}>
					<Route index element={<Home/>} />
					<Route path="about" element={<About/>} />
					<Route path="products" element={<Coffees/>}/>
					<Route path="products/:id" element={<Coffee/>} >
						<Route index element={<CoffeeDescription/>} />
						<Route path="recipe" element={<CoffeeRecipe/>} />
					</Route>
					<Route path="contact" element={<Contact/>}/>
						
				</Route>
			</Routes>
		</BrowserRouter>
 	);
}

export default App;
