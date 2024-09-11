import { UserRequest } from '../../entity/request/user.ts';
import { UserResponse } from '../../entity/response/user.ts';
import { BaseConfig } from '../../config.ts';

export interface UserRepository {
    bootstrapUserForDB(request: UserRequest): Promise<UserResponse>;
    getUserForPublic(request: UserRequest): Promise<UserResponse>;
    getUserForInternal(request: UserRequest): Promise<UserResponse>;
    getUserForPrivate(request: UserRequest): Promise<UserResponse>;
    createUserForPublic(request: UserRequest): Promise<UserResponse>;
    createUserForInternal(request: UserRequest): Promise<UserResponse>;
    createUserForPrivate(request: UserRequest): Promise<UserResponse>;
    updateUserForInternal(request: UserRequest): Promise<UserResponse>;
    updateUserForPrivate(request: UserRequest): Promise<UserResponse>;
    deleteUserForInternal(request: UserRequest): Promise<UserResponse>;
    deleteUserForPrivate(request: UserRequest): Promise<UserResponse>;
}

export class UserRepositoryImpl implements UserRepository {
    private baseConfig: BaseConfig;

    constructor(baseConfig: BaseConfig) {
        this.baseConfig = baseConfig;
    }

    async bootstrapUserForDB(request: UserRequest): Promise<UserResponse> {
        // DBの初期化ロジックをここに追加
        console.log('BootstrapUserForDB');
        return {} as UserResponse;
    }

    async getUserForPublic(request: UserRequest): Promise<UserResponse> {
        console.log('GetUserForPublic');
        return {} as UserResponse;
    }

    async getUserForInternal(request: UserRequest): Promise<UserResponse> {
        console.log('GetUserForInternal');
        return {} as UserResponse;
    }

    async getUserForPrivate(request: UserRequest): Promise<UserResponse> {
        console.log('GetUserForPrivate');
        return {} as UserResponse;
    }

    async createUserForPublic(request: UserRequest): Promise<UserResponse> {
        const url = `${this.baseConfig.serverEndpoint}/api/public/user`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            });

            const data = await response.json();
            console.log('Status Code:', response.status);
            console.log('Response Body:', data);

            return data as UserResponse;
        } catch (error) {
            console.error('Error:', error);
            return {} as UserResponse;
        }
    }

    async createUserForInternal(request: UserRequest): Promise<UserResponse> {
        console.log('CreateUserForInternal');
        return {} as UserResponse;
    }

    async createUserForPrivate(request: UserRequest): Promise<UserResponse> {
        console.log('CreateUserForPrivate');
        return {} as UserResponse;
    }

    async updateUserForInternal(request: UserRequest): Promise<UserResponse> {
        console.log('UpdateUserForInternal');
        return {} as UserResponse;
    }

    async updateUserForPrivate(request: UserRequest): Promise<UserResponse> {
        console.log('UpdateUserForPrivate');
        return {} as UserResponse;
    }

    async deleteUserForInternal(request: UserRequest): Promise<UserResponse> {
        console.log('DeleteUserForInternal');
        return {} as UserResponse;
    }

    async deleteUserForPrivate(request: UserRequest): Promise<UserResponse> {
        console.log('DeleteUserForPrivate');
        return {} as UserResponse;
    }
}

export function createUserRepository(baseConfig: BaseConfig): UserRepository {
    return new UserRepositoryImpl(baseConfig);
}