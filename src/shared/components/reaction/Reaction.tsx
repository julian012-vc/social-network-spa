import { Reaction as IReaction } from "../../interface/reaction";

import './Reaction.css'

const Reaction = (props: IReaction) => {
    return (
        <div className="reaction__container">
            <div className="reaction__container--logo" style={{borderColor: props.color}}>
                <img className="container__logo--image" src={props.src} alt={props.alt}/>
            </div>
            <div className="reaction__container--value" style={{color: props.color}}>{props.total}</div>
        </div>
    )
};

export default Reaction