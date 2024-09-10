<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>グループリスト</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-list>
                    <v-list-item
                        v-for="group in groups"
                        :key="group.id"
                        @click="viewGroup(group.id)"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ group.name }}</v-list-item-title>
                            <v-list-item-subtitle>UUID: {{ group.uuid }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon @click.stop="editGroup(group.id)">
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
    name: 'PrivateGroupList',
    data() {
        return {
            groups: [
                {
                    id: 1,
                    uuid: '123e4567-e89b-12d3-a456-426614174000',
                    name: 'サンプルグループ1',
                    created_at: '2023-01-01',
                    updated_at: '2023-01-02',
                    deleted_at: null,
                },
                {
                    id: 2,
                    uuid: '123e4567-e89b-12d3-a456-426614174001',
                    name: 'サンプルグループ2',
                    created_at: '2023-01-03',
                    updated_at: '2023-01-04',
                    deleted_at: null,
                },
                // 他のグループデータ
            ],
        };
    },
    methods: {
        viewGroup(id) {
            this.$router.push({ name: 'ShowGroup', params: { id } });
        },
        editGroup(id) {
            this.$router.push({ name: 'EditGroup', params: { id } });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>