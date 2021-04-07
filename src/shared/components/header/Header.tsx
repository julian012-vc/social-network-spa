import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

import logo from '../../../assets/nav-logo.svg'

import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" sticky="top" expand="lg">

            <Navbar.Brand href="/">
                <img src={logo} className="Navbar--logo" alt="logo"/>
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link>Publicar post</Nav.Link>
            </Nav>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Mi perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#">Mensajes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Grupos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;