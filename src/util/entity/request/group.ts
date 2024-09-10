// Groupのインターフェース
export interface Group {
    id: string;
    uuid: string;
    name: string;
}
  
export interface GroupRequest {
    group: Group;
}