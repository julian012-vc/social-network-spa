import React, { useState, useEffect } from 'react'
import { fetchPost } from "./services/feed-service";
import PostCard from "./components/post-card/PostCard";

import './Feed.css'
import { DataPost } from "./interface/data-post";
import Spinner from "../../../shared/components/spinner/Spinner";

const Feed = () => {
    const [posts, setPosts] = useState<Array<DataPost>>([])
    const [nextPage, setNextPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    let canMakeRequest = true

    useEffect(() => {
        if (hasNextPage && canMakeRequest) {
            fetchPost(nextPage)
                .then(res => {
                    setPosts([...posts, ...res.data.result.data])
                    setHasNextPage(res.data.has_next)
                    if (hasNextPage) window.addEventListener("scroll", onScroll, { passive: true });
                    canMakeRequest = false
                })
                .catch(err => console.log(err))
        }

        const onScroll = (e: any) => {
            if (hasNextPage && !canMakeRequest) {
                const actualPosition = e.target.documentElement.scrollTop
                const offsetHeight = e.target.documentElement.scrollHeight - e.target.documentElement.clientHeight
                const minRange = Math.round(offsetHeight * 0.95)
                const maxRange = Math.round(offsetHeight * 0.98)
                if (actualPosition >= minRange && actualPosition <= maxRange && !canMakeRequest) {
                    window.removeEventListener("scroll", onScroll)
                    canMakeRequest = true
                    setNextPage(nextPage + 1)
                }
            }
        };

    }, [nextPage])



    const cards = posts.map( item => {
        return (
            <PostCard
                key={item.id}
                id={item.id}
                title={item.attributes.title}
                content={item.attributes.content}
                email={item.attributes.email}
                created_at={item.attributes.created_at}
                total_comments={item.attributes.total_comments}
                total_dislikes={item.attributes.total_dislikes}
                total_likes={item.attributes.total_likes}
                alone={false}
            />
        )
    })

    return (
        <div className="feed__container">
            <div className="feed__container--cards">{cards}</div>
            { hasNextPage && <Spinner/> }
        </div>
    )
}

export default Feed