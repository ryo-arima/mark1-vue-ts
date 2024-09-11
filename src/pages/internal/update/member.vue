<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>メンバー編集</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        v-model="member.id"
                        :rules="[rules.required]"
                        label="ID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.uuid"
                        :rules="[rules.required]"
                        label="UUID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.group_uuid"
                        :rules="[rules.required]"
                        label="グループUUID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.user_uuid"
                        :rules="[rules.required]"
                        label="ユーザーUUID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.role"
                        :rules="[rules.required]"
                        label="役割"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.created_at"
                        :rules="[rules.required]"
                        label="作成日"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.updated_at"
                        :rules="[rules.required]"
                        label="更新日"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="member.deleted_at"
                        label="削除日"
                    ></v-text-field>
                    <v-btn color="primary" @click="saveMember">保存</v-btn>
                </v-form>
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
    name: 'InternalUpdateMember',
    data() {
        return {
            valid: false,
            member: {
                id: '',
                uuid: '',
                group_uuid: '',
                user_uuid: '',
                role: '',
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            rules: {
                required: value => !!value || '必須項目です',
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        saveMember() {
            if (this.$refs.form.validate()) {
                // メンバー保存のロジックをここに追加
                console.log('メンバーが保存されました:', this.member);
                this.goBack();
            }
        },
    },
    created() {
        // ルートパラメータからメンバーIDを取得し、データをロードするロジックを追加
        const memberId = this.$route.params.id;
        // 例: APIからメンバー情報を取得してmemberデータにセット
        // this.member = fetchMemberById(memberId);
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>