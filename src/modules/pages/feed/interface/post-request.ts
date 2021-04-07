import {DataPost} from "./data-post";

export interface PostRequest {
    data: DataPost;
    included?: Array<DataPost>;
}