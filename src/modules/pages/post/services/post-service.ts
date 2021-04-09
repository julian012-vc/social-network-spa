import axios from "axios";

import { PostRequest } from "../interface/post-request";
import { Reaction } from "../interface/reaction";
import { PostForm } from "../interface/post-form";
import { DataPost } from "../../feed/interface/data-post";

export async function fetchPostById(id: number): Promise<{ data: PostRequest }> {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/posts/${id}`
    return axios.get(url)
}

export async function addReaction(postId: number, type_reaction: string): Promise<{ data: { data :Reaction }}> {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/reactions`
    return axios.post(url, {post_id: postId, type_reaction})
}

export async function deleteReaction(reactionId: number): Promise<any> {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/reactions/${reactionId}`
    return axios.delete(url)
}

export async function createPost(form: PostForm): Promise<{ data: { data: DataPost} }> {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/posts`
    return axios.post(url, form)
}