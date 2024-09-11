export interface BaseConfig {
    serverEndpoint: string;
}

export const config: BaseConfig = {
    serverEndpoint: process.env.SERVER_ENDPOINT || 'デフォルトのエンドポイント',
};