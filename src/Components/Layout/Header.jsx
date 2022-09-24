import {Container, Nav, Navbar} from 'react-bootstrap';

import { Link } from "react-router-dom";

import "./Header.css";

function Header() {

	return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Link to="/"> React Crud User </Link>
					<Nav className="me-auto">
						<Link to="/" className="mx-3"> Home </Link>
						<Link to="/about" className="mx-3"> About </Link>
						<Link to="/contact" className="mx-3"> Contact </Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
