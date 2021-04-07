import React, { useState, useEffect } from 'react'
import Header from "../../../shared/components/header/Header";
import { fetchPost } from "./services/feed-service";
import { Feed as IFeed } from "./interface/feed";
import PostCard from "../../../shared/components/post-card/PostCard";

import './Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState<IFeed | undefined>(undefined)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchPost(1)
            .then(res => {
                setPosts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const cards = posts?.result.data.map( item => {
        return (
            <PostCard
                key={item.id}
                title={item.attributes.title}
                content={item.attributes.content}
                email={item.attributes.email}
                created_at={item.attributes.created_at}
                total_comments={item.attributes.total_comments}
                total_dislikes={item.attributes.total_dislikes}
                total_likes={item.attributes.total_likes}
            />
        )
    });

    return (
        <>
            <Header/>
            {
                loaded &&
                <div className="feed__container">{cards}</div>
            }

        </>
    )
}

export default Feed