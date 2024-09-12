import { BaseConfig } from '../../config';
import { UserRequest } from '../../entity/request/user';
import { EmailResponse, TokenResponse } from '../../entity/response/common';

export interface CommonRepository {
    createEmailForPublic(request: UserRequest): Promise<EmailResponse>;
    verifyEmailForPublic(request: UserRequest): Promise<EmailResponse>;
    createTokenForPublic(request: UserRequest): Promise<TokenResponse>;
    saveTokenAtHomeDir(token: string): void;
}

export class CommonRepositoryImpl implements CommonRepository {
    private baseConfig: BaseConfig;

    constructor(baseConfig: BaseConfig) {
        this.baseConfig = baseConfig;
    }

    async createEmailForPublic(request: UserRequest): Promise<EmailResponse> {
        const url = `${this.baseConfig.serverEndpoint}/api/public/email`;

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

            return data as EmailResponse;
        } catch (error) {
            console.error('Error:', error);
            return {} as EmailResponse;
        }
    }

    async verifyEmailForPublic(request: UserRequest): Promise<EmailResponse> {
        const url = `${this.baseConfig.serverEndpoint}/api/public/email`;

        try {
            const response = await fetch(url, {
                method: 'GET',
            });

            const data = await response.json();
            console.log('Status Code:', response.status);
            console.log('Response Body:', data);

            return data as EmailResponse;
        } catch (error) {
            console.error('Error:', error);
            return {} as EmailResponse;
        }
    }

    async createTokenForPublic(request: UserRequest): Promise<TokenResponse> {
        const url = `${this.baseConfig.serverEndpoint}/api/public/email`;

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

            return data as TokenResponse;
        } catch (error) {
            console.error('Error:', error);
            return {} as TokenResponse;
        }
    }

    saveTokenAtHomeDir(token: string): void {
        const fs = require('fs');
    }
}

export function createCommonRepository(baseConfig: BaseConfig): CommonRepository {
    return new CommonRepositoryImpl(baseConfig);
}