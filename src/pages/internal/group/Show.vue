<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>グループ詳細</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-card>
                    <v-card-title class="justify-center">
                        {{ group.name }}
                    </v-card-title>
                    <v-card-subtitle class="text-center">
                        UUID: {{ group.uuid }}
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>作成日</v-list-item-title>
                                    <v-list-item-subtitle>{{ group.created_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>更新日</v-list-item-title>
                                    <v-list-item-subtitle>{{ group.updated_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item v-if="group.deleted_at">
                                <v-list-item-content>
                                    <v-list-item-title>削除日</v-list-item-title>
                                    <v-list-item-subtitle>{{ group.deleted_at }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" @click="editGroup">編集</v-btn>
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
    name: 'InternalShowGroup',
    data() {
        return {
            group: {
                id: 1,
                uuid: '123e4567-e89b-12d3-a456-426614174000',
                name: 'サンプルグループ',
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
        editGroup() {
            this.$router.push({ name: 'EditGroup', params: { id: this.group.id } });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>