<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>ユーザー作成</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        v-model="user.id"
                        :rules="[rules.required]"
                        label="ID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.uuid"
                        :rules="[rules.required]"
                        label="UUID"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.email"
                        :rules="[rules.required, rules.email]"
                        label="メールアドレス"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.name"
                        :rules="[rules.required]"
                        label="名前"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.status"
                        :rules="[rules.required]"
                        label="ステータス"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.created_at"
                        :rules="[rules.required]"
                        label="作成日"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.updated_at"
                        :rules="[rules.required]"
                        label="更新日"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.deleted_at"
                        label="削除日"
                    ></v-text-field>
                    <v-btn color="primary" @click="saveUser">保存</v-btn>
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
    name: 'InternalCreateUser',
    data() {
        return {
            valid: false,
            user: {
                id: '',
                uuid: '',
                email: '',
                name: '',
                status: '',
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            rules: {
                required: value => !!value || '必須項目です',
                email: value => /.+@.+\..+/.test(value) || '有効なメールアドレスを入力してください',
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        saveUser() {
            if (this.$refs.form.validate()) {
                // ユーザー保存のロジックをここに追加
                console.log('ユーザーが保存されました:', this.user);
                this.goBack();
            }
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>