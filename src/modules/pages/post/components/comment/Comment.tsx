import React from "react";
import { DataPost } from "../../../feed/interface/data-post";

import { fromNow } from "../../../../../shared/utils/date.utils";
import iconProfile from '../../../../../assets/user-comment.svg';
import './Comment.css'

const Comment = (props: DataPost) => {
    return (
        <div className="comment__container">
            <div className="comment__container--photo">
                <img src={iconProfile} alt={props.attributes.email}/>
            </div>
            <div className="comment__container--body">
                <div className="container__body--header">
                    <div className="body__header--email">{props.attributes.email}</div>
                    <div className="body__header--title">{props.attributes.title}</div>
                    <div className="body__header--content">{props.attributes.content}</div>
                </div>
                <div className="container__body--footer">
                    <div className="body__footer--content">{fromNow(props.attributes.created_at)}</div>
                </div>
            </div>
        </div>
    )
}

export default Comment