import React, { useState } from "react"
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Modal from "../modal/Modal"
import PostForm from "../../../modules/pages/post/components/post-form/PostForm"

import { DataPost } from "../../../modules/pages/feed/interface/data-post"

import logo from '../../../assets/nav-logo.svg'
import './Header.css';

const Header = () => {

    let history = useHistory();
    const [modalShow, setModalShow] = useState(false)

    const handleCreatePost = (values: DataPost) => {
        setModalShow(false)
        history.push('/')
    }

    return (
        <Navbar collapseOnSelect sticky="top" bg="light" expand="lg" variant="light">
            <Navbar.Brand href="/">
                <img src={logo} className="Navbar--logo" alt="logo"/>
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link onClick={() => setModalShow(true)}>Publicar post</Nav.Link>
                <Modal
                    show={modalShow}
                    title="Publicar post"
                    children={<PostForm
                        onHide={() => setModalShow(false)}
                        parent={null}
                        onSave={handleCreatePost}
                    />}
                    onHide={() => setModalShow(false)}
                />
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