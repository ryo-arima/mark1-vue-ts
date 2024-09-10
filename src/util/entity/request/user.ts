export interface User {
    id: string;
    uuid: string;
    email: string;
    name: string;
    password: string;
}
  
export interface UserRequest {
    user: User;
}