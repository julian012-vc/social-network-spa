import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

import logo from '../../../assets/nav-logo.svg'

import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect sticky="top" bg="light" expand="lg" variant="light">
            <Navbar.Brand href="/">
                <img src={logo} className="Navbar--logo" alt="logo"/>
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link>Publicar post</Nav.Link>
            </Nav>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                        <NavDropdown.Item>Mi perfil</NavDropdown.Item>
                        <NavDropdown.Item>Mensajes</NavDropdown.Item>
                        <NavDropdown.Item>Grupos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;