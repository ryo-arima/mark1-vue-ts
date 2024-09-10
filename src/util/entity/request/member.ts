export interface Member {
    id: string;
    uuid: string;
    group_uuid: string;
    user_uuid: string;
    role: string;
}
  
export interface MemberRequest {
    member: Member;
}