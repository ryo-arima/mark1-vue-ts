import { BaseConfig } from '../../config';
import { MemberRequest } from '../../entity/request/member';
import { MemberResponse } from '../../entity/response/member';

export interface MemberRepository {
    getMemberForPublic(request: MemberRequest): Promise<MemberResponse>;
    getMemberForInternal(request: MemberRequest): Promise<MemberResponse>;
    getMemberForPrivate(request: MemberRequest): Promise<MemberResponse>;
    createMemberForInternal(request: MemberRequest): Promise<MemberResponse>;
    createMemberForPrivate(request: MemberRequest): Promise<MemberResponse>;
    updateMemberForInternal(request: MemberRequest): Promise<MemberResponse>;
    updateMemberForPrivate(request: MemberRequest): Promise<MemberResponse>;
    deleteMemberForInternal(request: MemberRequest): Promise<MemberResponse>;
    deleteMemberForPrivate(request: MemberRequest): Promise<MemberResponse>;
}

export class MemberRepositoryImpl implements MemberRepository {
    private baseConfig: BaseConfig;

    constructor(baseConfig: BaseConfig) {
        this.baseConfig = baseConfig;
    }

    async getMemberForPublic(request: MemberRequest): Promise<MemberResponse> {
        console.log('GetMemberForPublic');
        
        return {} as MemberResponse;
    }

    async getMemberForInternal(request: MemberRequest): Promise<MemberResponse> {
        console.log('GetMemberForInternal');
        return {} as MemberResponse;
    }

    async getMemberForPrivate(request: MemberRequest): Promise<MemberResponse> {
        console.log('GetMemberForPrivate');
        return {} as MemberResponse;
    }

    async createMemberForInternal(request: MemberRequest): Promise<MemberResponse> {
        console.log('CreateMemberForInternal');
        return {} as MemberResponse;
    }

    async createMemberForPrivate(request: MemberRequest): Promise<MemberResponse> {
        console.log('CreateMemberForPrivate');
        return {} as MemberResponse;
    }

    async updateMemberForInternal(request: MemberRequest): Promise<MemberResponse> {
        console.log('UpdateMemberForInternal');
        return {} as MemberResponse;
    }

    async updateMemberForPrivate(request: MemberRequest): Promise<MemberResponse> {
        console.log('UpdateMemberForPrivate');
        return {} as MemberResponse;
    }

    async deleteMemberForInternal(request: MemberRequest): Promise<MemberResponse> {
        console.log('DeleteMemberForInternal');
        return {} as MemberResponse;
    }

    async deleteMemberForPrivate(request: MemberRequest): Promise<MemberResponse> {
        console.log('DeleteMemberForPrivate');
        return {} as MemberResponse;
    }
}

export function createMemberRepository(baseConfig: BaseConfig): MemberRepository {
    return new MemberRepositoryImpl(baseConfig);
}