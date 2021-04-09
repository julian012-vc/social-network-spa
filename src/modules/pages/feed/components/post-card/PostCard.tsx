import React, { useState } from "react";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

import Reaction from "../reaction/Reaction";
import Modal from "../../../../../shared/components/modal/Modal";
import PostForm from "../../../post/components/post-form/PostForm";

import { Post } from "../../interface/post";
import { DataPost } from "../../interface/data-post";

import { fromNow, fullDate } from "../../../../../shared/utils/date.utils";
import { substringText } from "../../../../../shared/utils/transform.util";
import { ReactionsEnum } from "../../enums/reactions.enum";

import iconProfile from '../../../../../assets/user.svg'
import iconComment from '../../../../../assets/comments.svg'
import iconLike from '../../../../../assets/like.svg'
import iconDislike from '../../../../../assets/thumb-down.svg'
import './PostCard.css'


const PostCard = (props: Post) => {

    const { addToast } = useToasts()

    const [totalLikes, setTotalLikes] = useState(props.total_likes as number)
    const [totalComments, setTotalComments] = useState(props.total_comments as number)
    const [totalDislikes, setTotalDislikes] = useState(props.total_dislikes as number)
    const [modalShow, setModalShow] = useState(false)

    const handleUpdateReaction = (type: string, state: boolean) => {
        if (!state) {
            if (type === ReactionsEnum.LIKE) setTotalLikes(totalLikes + 1)
            else setTotalDislikes(totalDislikes + 1)
        } else {
            if (type === ReactionsEnum.LIKE) setTotalLikes(totalLikes - 1)
            else setTotalDislikes(totalDislikes - 1)
        }
    }

    const handleSaveComment = (values: DataPost) => {
        setModalShow(false)
        setTotalComments(totalComments + 1)
        addToast('Creado correctamente', {appearance: 'success', autoDismiss: true})
        if (props.alone) props.updateList(values)
    }

    return (
        <ToastProvider>
            <div className="card__container">

                <div className="card__container--head">
                    <div className="container__head--icon">
                        <img className="icon-profile" src={iconProfile} alt={props.email}/>
                    </div>
                    <div className="container__head--user-info">
                        {!props.alone ?
                            <Link to={`post/${props.id}`}>
                                <div className="user-info--email">{props.email}</div>
                            </Link> :
                            <div className="user-info--email">{props.email}</div>
                        }
                        {
                            !props.alone ?
                                <div className="user-info--date">
                                    {fromNow(props.created_at)}
                                </div> :
                                <div className="user-info--date">{fullDate(props.created_at)}</div>
                        }
                    </div>
                </div>

                <div className="card__container--body">
                    <div className="container__body--title">
                        {
                            !props.alone ? substringText(50, props.title): props.title
                        }
                    </div>
                    <div className="container__body--content">{props.content}</div>
                </div>

                <div className="card__container--footer">
                    <div className="container__footer--reactions">
                        <Reaction
                            post_id={props.id as number}
                            src={iconLike}
                            total={totalLikes}
                            color="#5890ff"
                            alt="Me gusta"
                            type={ReactionsEnum.LIKE}
                            changeScore={handleUpdateReaction}
                        />
                        <Reaction
                            post_id={props.id as number}
                            src={iconDislike}
                            total={totalDislikes}
                            color="#ff0000"
                            alt="No me gusta"
                            type={ReactionsEnum.DISLIKE}
                            changeScore={handleUpdateReaction}
                        />
                        <Reaction
                            post_id={props.id as number}
                            src={iconComment}
                            total={totalComments}
                            color="#00b8a9"
                            alt="Comentarios"
                            type={undefined}
                            changeScore={undefined}
                        />
                    </div>

                    <div className="container__footer--comments">
                        <Button
                            variant="link"
                            onClick={() => setModalShow(true)}
                        >
                            Agregar comentario
                        </Button>
                        <Modal
                            key={props.id}
                            show={modalShow}
                            title="Agregar comentario"
                            children={<PostForm
                                onHide={() => setModalShow(false)}
                                parent={props.id}
                                onSave={handleSaveComment}
                            />}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
        </ToastProvider>
    )
}

export default PostCard