export interface Group {
    id: number;
    uuid: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
  
export interface GroupResponse {
    code: string;
    message: string;
    groups: Group[];
}