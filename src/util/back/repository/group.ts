import { BaseConfig } from '../../config';
import { GroupRequest } from '../../entity/request/group';
import { GroupResponse } from '../../entity/response/group';

export interface GroupRepository {
    getGroupForPublic(request: GroupRequest): Promise<GroupResponse>;
    getGroupForInternal(request: GroupRequest): Promise<GroupResponse>;
    getGroupForPrivate(request: GroupRequest): Promise<GroupResponse>;
    createGroupForPublic(request: GroupRequest): Promise<GroupResponse>;
    createGroupForInternal(request: GroupRequest): Promise<GroupResponse>;
    createGroupForPrivate(request: GroupRequest): Promise<GroupResponse>;
    updateGroupForPublic(request: GroupRequest): Promise<GroupResponse>;
    updateGroupForInternal(request: GroupRequest): Promise<GroupResponse>;
    updateGroupForPrivate(request: GroupRequest): Promise<GroupResponse>;
    deleteGroupForPublic(request: GroupRequest): Promise<GroupResponse>;
    deleteGroupForInternal(request: GroupRequest): Promise<GroupResponse>;
    deleteGroupForPrivate(request: GroupRequest): Promise<GroupResponse>;
}

export class GroupRepositoryImpl implements GroupRepository {
    private baseConfig: BaseConfig;

    constructor(baseConfig: BaseConfig) {
        this.baseConfig = baseConfig;
    }

    async getGroupForPublic(request: GroupRequest): Promise<GroupResponse> {
        console.log('GetGroupForPublic');
        return {} as GroupResponse;
    }

    async getGroupForInternal(request: GroupRequest): Promise<GroupResponse> {
        console.log('GetGroupForInternal');
        return {} as GroupResponse;
    }

    async getGroupForPrivate(request: GroupRequest): Promise<GroupResponse> {
        console.log('GetGroupForPrivate');
        return {} as GroupResponse;
    }

    async createGroupForPublic(request: GroupRequest): Promise<GroupResponse> {
        console.log('CreateGroupForPublic');
        return {} as GroupResponse;
    }

    async createGroupForInternal(request: GroupRequest): Promise<GroupResponse> {
        console.log('CreateGroupForInternal');
        return {} as GroupResponse;
    }

    async createGroupForPrivate(request: GroupRequest): Promise<GroupResponse> {
        console.log('CreateGroupForPrivate');
        return {} as GroupResponse;
    }

    async updateGroupForPublic(request: GroupRequest): Promise<GroupResponse> {
        console.log('UpdateGroupForPublic');
        return {} as GroupResponse;
    }

    async updateGroupForInternal(request: GroupRequest): Promise<GroupResponse> {
        console.log('UpdateGroupForInternal');
        return {} as GroupResponse;
    }

    async updateGroupForPrivate(request: GroupRequest): Promise<GroupResponse> {
        console.log('UpdateGroupForPrivate');
        return {} as GroupResponse;
    }

    async deleteGroupForPublic(request: GroupRequest): Promise<GroupResponse> {
        console.log('DeleteGroupForPublic');
        return {} as GroupResponse;
    }

    async deleteGroupForInternal(request: GroupRequest): Promise<GroupResponse> {
        console.log('DeleteGroupForInternal');
        return {} as GroupResponse;
    }

    async deleteGroupForPrivate(request: GroupRequest): Promise<GroupResponse> {
        console.log('DeleteGroupForPrivate');
        return {} as GroupResponse;
    }
}

export function createGroupRepository(baseConfig: BaseConfig): GroupRepository {
    return new GroupRepositoryImpl(baseConfig);
}