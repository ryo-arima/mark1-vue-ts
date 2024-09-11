<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>メンバー詳細</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-card>
                    <v-card-title class="justify-center">
                        メンバー詳細
                    </v-card-title>
                    <v-card-subtitle class="text-center">
                        UUID: {{ member.uuid }}
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>ID</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.id }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>グループUUID</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.group_uuid }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>ユーザーUUID</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.user_uuid }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>役割</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.role }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>作成日</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.created_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>更新日</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.updated_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item v-if="member.deleted_at">
                                <v-list-item-content>
                                    <v-list-item-title>削除日</v-list-item-title>
                                    <v-list-item-subtitle>{{ member.deleted_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" @click="editMember">編集</v-btn>
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
    name: 'InternalShowMember',
    data() {
        return {
            member: {
                id: '1',
                uuid: '123e4567-e89b-12d3-a456-426614174000',
                group_uuid: 'group-uuid-1',
                user_uuid: 'user-uuid-1',
                role: 'admin',
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
        editMember() {
            this.$router.push({ name: 'EditMember', params: { id: this.member.id } });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>