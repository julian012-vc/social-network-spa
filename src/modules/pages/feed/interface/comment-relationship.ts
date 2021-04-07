import { RelationshipData } from "../../../../shared/interface/relationship-data";

export interface CommentRelationship {
    comments: {
        data: Array<RelationshipData>
    }
}