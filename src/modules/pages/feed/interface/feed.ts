import { DataPost } from "./data-post";

export interface Feed {
    has_next: boolean;
    page: number;
    total_records: number;
    total_pages: number;
    result: {
        data: Array<DataPost>
    }
}