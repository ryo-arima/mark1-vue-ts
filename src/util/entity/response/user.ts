export interface User {
    id: string;
    uuid: string;
    email: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
  
export interface UserResponse {
    code: string;
    message: string;
    users: User[];
}