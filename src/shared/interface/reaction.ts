export interface Reaction {
    src: string,
    total: number;
    color: string;
    alt: string;
    type?: string;
    changeScore?: any
    post_id: number;
}