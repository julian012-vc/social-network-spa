import { Post } from "./post";
import { CommentRelationship } from "./comment-relationship";

export interface DataPost {
    id: number;
    type: string;
    attributes: Post;
    relationships?: CommentRelationship;
}