import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import NotFound from './Components/Pages/NotFound';
import Header from "./Components/Layout/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
			   <Header />
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/about" element={ <About /> } />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={ <NotFound /> } />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
