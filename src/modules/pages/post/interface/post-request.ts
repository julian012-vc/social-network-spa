import { DataPost } from "../../feed/interface/data-post";

export interface PostRequest {
    data: DataPost;
    included?: Array<DataPost>;
}