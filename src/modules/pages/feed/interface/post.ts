export interface Post {
    title: string;
    content: string;
    email: string;
    total_likes?: number;
    total_dislikes?: number;
    total_comments?: number;
    created_at: string;
    post_id?: number;
}