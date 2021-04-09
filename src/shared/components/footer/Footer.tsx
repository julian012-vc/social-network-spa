import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import ButtonIcon from "../button-icon/ButtonIcon";

import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer__container--blank-space"/>
            <div className="footer__container">
                <div className="footer__container--social-networks">
                    <ButtonIcon url={`${process.env.REACT_APP_FACEBOOK_URL}`} children={<FaFacebook size={30}/>}/>
                    <ButtonIcon url={`${process.env.REACT_APP_INSTAGRAM_URL}`} children={<FaInstagram size={30}/>}/>
                    <ButtonIcon url={`${process.env.REACT_APP_GITHUB_URL}`} children={<AiFillGithub size={30}/>}/>
                    <ButtonIcon url={`${process.env.REACT_APP_LINKEDIN_URL}`} children={<AiFillLinkedin size={30}/>}/>
                </div>

                <div className="footer__container--links">
                    <div className="container__links--text">Información</div>
                    <div className="container__links--text">Soporte</div>
                    <div className="container__links--text">Marketing</div>
                    <div className="container__links--text">Terminos de uso</div>
                    <div className="container__links--text">Politica de privacidad</div>
                </div>
                <div className="footer__container--year">
                    Julián Serna
                    <br/>
                    Año 2021
                </div>
            </div>
        </>
    )
}

export default Footer