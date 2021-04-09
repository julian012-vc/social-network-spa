import React, { useEffect, useState } from "react";

import PostCard from "../feed/components/post-card/PostCard";
import Comment from "./components/comment/Comment";

import { PostProps } from "./interface/post-props";
import { DataPost } from "../feed/interface/data-post";
import { fetchPostById } from "./services/post-service";

import './Post.css'

const Post = (props: PostProps) => {

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

    const renderComments = comments.map( item => {
        return (
            <Comment
                id={item.id}
                attributes={item.attributes}
                type={item.type}
            />
        )
    });


    const comments_list =  (
        <>
            {
                !isEmpty &&
                <div className="post__comment__container">
                    { renderComments }
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
        <>
            {
                loaded &&
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
                />
            }
            { loaded && comments_list }
        </>
    )
}

export default Post