import React from "react";

import './ButtonIcon.css'

const ButtonIcon = (props: { url: string, children: any}) => {
    const openPage = () => window.open(props.url, "_blank")

    return (
        <div className="button-icon__container" onClick={openPage}>
            {props.children}
        </div>
    )
}

export default ButtonIcon