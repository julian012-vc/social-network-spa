import React, { useEffect, useState } from "react";
import { ToastProvider } from 'react-toast-notifications';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import PostCard from "../feed/components/post-card/PostCard";
import Comment from "./components/comment/Comment";
import Footer from "../../../shared/components/footer/Footer";

import { PostProps } from "./interface/post-props";
import { DataPost } from "../feed/interface/data-post";

import {fetchPostById} from "./services/post-service";

import './Post.css'

const Post = (props: PostProps) => {

    let history = useHistory();

    const [post, setPost] = useState<DataPost | undefined>(undefined)
    const [comments, setComments] = useState<Array<DataPost>>([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchPostById(props.match.params.post_id)
            .then(res => {
                setPost(res.data.data)
                setComments(res.data.included as Array<DataPost>)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [comments.length, props.match.params.post_id])

    const isEmpty = comments.length === 0

    const renderComments = comments.map(item => {
        return (
            <Comment
                id={item.id}
                attributes={item.attributes}
                type={item.type}
            />
        )
    });

    const handleUpdateComments = (comment: DataPost) => setComments([comment, ...comments])


    const comments_list = (
        <>
            {
                !isEmpty &&
                <div className="post__comment__container">
                    {renderComments}
                </div>
            }
            {
                isEmpty &&
                <div className="post__comment__no-found">
                    No tiene ningún comentario registrado
                </div>
            }
        </>
    )

    return (
        <div className="post__container">
            <div className="post__container--body">
                {
                    loaded &&
                    <>
                        <div className="post__container--goback">
                            <Button variant="link" onClick={() => history.goBack()}>
                                Volver
                            </Button>
                        </div>
                        <ToastProvider>
                            <PostCard
                                key={post?.id}
                                id={post?.id}
                                title={post?.attributes.title as string}
                                content={post?.attributes.content as string}
                                email={post?.attributes.email as string}
                                created_at={post?.attributes.created_at as string}
                                total_comments={post?.attributes.total_comments}
                                total_dislikes={post?.attributes.total_dislikes}
                                total_likes={post?.attributes.total_likes}
                                alone={true}
                                updateList={handleUpdateComments}
                            />
                        </ToastProvider>
                    </>
                }
                {loaded && comments_list}
            </div>
            <div className="post__container--footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Post