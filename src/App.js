import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Coffees from "./Pages/Coffees";
import Contact from "./Pages/Contact";

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout/>}>
					<Route index element={<Home/>} />
					<Route path="about" element={<About/>} />
					<Route path="products" element={<Coffees/>}/>
					<Route path="contact" element={<Contact/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
 	);
}

export default App;
