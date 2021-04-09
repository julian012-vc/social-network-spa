export interface Reaction {
    id: number,
    type: number,
    attributes: {
        post_id: number,
        type_reaction: string
    }
}