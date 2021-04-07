import axios from "axios";

import { Feed } from "../interface/feed";
import { PostEnum } from "../enums/post.enum";

export async function fetchPost(page: number): Promise<{ data: Feed}> {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/posts`
    const params = {
        page,
        per_page: PostEnum.POST_PER_PAGE
    }
    return axios.get(url, { params })
}