import React from "react";

import { Post } from "../../../modules/pages/feed/interface/post";

import './PostCard.css'
import iconProfile from '../../../assets/user.svg'
import iconComment from '../../../assets/comments.svg'
import iconLike from '../../../assets/like.svg'
import iconDislike from '../../../assets/thumb-down.svg'

import { fromNow } from "../../utils/date.utils";
import { substringText } from "../../utils/transform.util";
import Reaction from "../reaction/Reaction";

const PostCard = (props: Post) => {
    return (
        <div className="card__container">

            <div className="card__container--head">
                <div className="container__head--icon">
                    <img className="icon-profile" src={iconProfile} alt={props.email}/>
                </div>
                <div className="container__head--user-info">
                    <div className="user-info--email">{props.email}</div>
                    <div className="user-info--date">{fromNow(props.created_at)}</div>
                </div>
            </div>

            <div className="card__container--body">
                <div className="container__body--title">{substringText(50, props.title)}</div>
                <div className="container__body--content">{props.content}</div>
            </div>

            <div className="card__container--footer">
                <Reaction
                    src={iconLike}
                    total={props.total_likes as number}
                    color="#5890ff"
                    alt="Me gusta"
                />
                <Reaction
                    src={iconDislike}
                    total={props.total_dislikes as number}
                    color="#ff0000"
                    alt="No me gusta"
                />
                <Reaction
                    src={iconComment}
                    total={props.total_comments as number}
                    color="#00b8a9"
                    alt="Comentarios"
                />
            </div>
        </div>
    )
}

export default PostCard