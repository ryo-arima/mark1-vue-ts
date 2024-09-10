<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>ユーザーリスト</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-list>
                    <v-list-item
                        v-for="user in users"
                        :key="user.id"
                        @click="viewUser(user.id)"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ user.name }}</v-list-item-title>
                            <v-list-item-subtitle>UUID: {{ user.uuid }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon @click.stop="editUser(user.id)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
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
    name: 'PrivateUserList',
    data() {
        return {
            users: [
                {
                    id: '1',
                    uuid: '123e4567-e89b-12d3-a456-426614174000',
                    email: 'sample1@example.com',
                    name: 'サンプルユーザー1',
                    status: 'active',
                    created_at: '2023-01-01',
                    updated_at: '2023-01-02',
                    deleted_at: null,
                },
                {
                    id: '2',
                    uuid: '123e4567-e89b-12d3-a456-426614174001',
                    email: 'sample2@example.com',
                    name: 'サンプルユーザー2',
                    status: 'inactive',
                    created_at: '2023-01-03',
                    updated_at: '2023-01-04',
                    deleted_at: null,
                },
                // 他のユーザーデータ
            ],
        };
    },
    methods: {
        viewUser(id) {
            this.$router.push({ name: 'ShowUser', params: { id } });
        },
        editUser(id) {
            this.$router.push({ name: 'EditUser', params: { id } });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>