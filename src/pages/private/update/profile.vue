<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>プロフィール編集</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" md="6">
                        <v-card>
                            <v-card-title class="justify-center">
                                <v-avatar size="100">
                                    <v-img src="https://via.placeholder.com/100"></v-img>
                                </v-avatar>
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field
                                        v-model="name"
                                        :rules="[rules.required]"
                                        label="ユーザー名"
                                        required
                                    ></v-text-field>
                                    <v-textarea
                                        v-model="bio"
                                        :rules="[rules.required]"
                                        label="自己紹介"
                                        required
                                    ></v-textarea>
                                </v-form>
                            </v-card-text>
                            <v-card-actions class="justify-center">
                                <v-btn color="primary" @click="saveProfile">保存</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
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
    name: 'PrivateProfileUpdate',
    data() {
        return {
            valid: false,
            name: '',
            bio: '',
            rules: {
                required: value => !!value || '必須項目です',
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        saveProfile() {
            if (this.$refs.form.validate()) {
                // プロフィール保存のロジックをここに追加
                console.log('プロフィールが保存されました:', { name: this.name, bio: this.bio });
                this.goBack();
            }
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>