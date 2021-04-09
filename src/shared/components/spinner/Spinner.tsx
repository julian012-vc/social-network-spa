import React from "react";
import { Spinner as SpinnerBootstrap } from "react-bootstrap"

import './Spinner.css'

const Spinner = () => {
    return (
        <div className="spinner__container">
            <SpinnerBootstrap animation="grow" variant="secondary" />
            <SpinnerBootstrap animation="grow" variant="secondary" />
            <SpinnerBootstrap animation="grow" variant="secondary" />
        </div>
    )
};

export default Spinner