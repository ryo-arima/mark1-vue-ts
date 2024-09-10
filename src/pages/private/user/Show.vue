<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>ユーザー詳細</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-card>
                    <v-card-title class="justify-center">
                        ユーザー詳細
                    </v-card-title>
                    <v-card-subtitle class="text-center">
                        UUID: {{ user.uuid }}
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>ID</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.id }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>メールアドレス</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>名前</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>ステータス</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.status }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>作成日</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.created_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>更新日</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.updated_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item v-if="user.deleted_at">
                                <v-list-item-content>
                                    <v-list-item-title>削除日</v-list-item-title>
                                    <v-list-item-subtitle>{{ user.deleted_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" @click="editUser">編集</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-main>

        <v-bottom-navigation app>
            <v-btn>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>mdi-settings</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
export default {
    name: 'PrivateShowUser',
    data() {
        return {
            user: {
                id: '1',
                uuid: '123e4567-e89b-12d3-a456-426614174000',
                email: 'sample@example.com',
                name: 'サンプルユーザー',
                status: 'active',
                created_at: '2023-01-01',
                updated_at: '2023-01-02',
                deleted_at: null,
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        editUser() {
            this.$router.push({ name: 'EditUser', params: { id: this.user.id } });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>