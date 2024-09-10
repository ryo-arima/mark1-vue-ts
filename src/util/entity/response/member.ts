export interface Member {
    id: string;
    uuid: string;
    group_uuid: string;
    user_uuid: string;
    role: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

export interface MemberResponse {
    code: string;
    message: string;
    members: Member[];
}