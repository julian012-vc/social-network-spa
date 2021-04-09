import React, { useState } from "react";

import { Reaction as IReaction } from "../../../../../shared/interface/reaction";

import { addReaction, deleteReaction } from "../../../post/services/post-service";
import './Reaction.css'

const Reaction = (props: IReaction) => {

    const [reactionState, setReactionState] = useState(false)
    const [reactionId, setReactionId] = useState(0)

    const changeScore = () => {
        if (props.type) {
            setReactionState(!reactionState)
            props.changeScore(props.type, reactionState)
            if (!reactionState) {
                addReaction(props.post_id, props.type)
                    .then(res => {
                        setReactionId(res.data.data.id)
                    })
                    .catch(err => console.log(err))
            } else {
                deleteReaction(reactionId)
                    .then(() => setReactionId(0))
            }
        }
    }

    return (
        <div className="reaction__container">
            <div className="reaction__container--logo"
                 style={{
                     borderColor: props.color,
                     background: reactionState ? props.color : 'transparent'
                 }}
                 onClick={changeScore}>
                <img className="container__logo--image" src={props.src} alt={props.alt}/>
            </div>
            <div className="reaction__container--value" style={{color: props.color}}>{props.total}</div>
        </div>
    )
};

export default Reaction