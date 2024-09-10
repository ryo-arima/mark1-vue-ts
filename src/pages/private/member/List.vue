<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>メンバーリスト</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-list>
                    <v-list-item
                        v-for="member in members"
                        :key="member.id"
                        @click="viewMember(member.id)"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ member.id }}</v-list-item-title>
                            <v-list-item-subtitle>UUID: {{ member.uuid }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon @click.stop="editMember(member.id)">
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
    name: 'MemberList',
    data() {
        return {
            members: [
                {
                    id: '1',
                    uuid: '123e4567-e89b-12d3-a456-426614174000',
                    group_uuid: 'group-uuid-1',
                    user_uuid: 'user-uuid-1',
                    role: 'admin',
                    created_at: '2023-01-01',
                    updated_at: '2023-01-02',
                    deleted_at: null,
                },
                {
                    id: '2',
                    uuid: '123e4567-e89b-12d3-a456-426614174001',
                    group_uuid: 'group-uuid-2',
                    user_uuid: 'user-uuid-2',
                    role: 'member',
                    created_at: '2023-01-03',
                    updated_at: '2023-01-04',
                    deleted_at: null,
                },
                // 他のメンバーデータ
            ],
        };
    },
    methods: {
        viewMember(id) {
            this.$router.push({ name: 'ShowMember', params: { id } });
        },
        editMember(id) {
            this.$router.push({ name: 'EditMember', params: { id } });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>