<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>設定編集</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>通知設定</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-switch v-model="settings.notifications"></v-switch>
                            </v-list-item-action>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>プライバシー設定</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-select
                                    v-model="settings.privacy"
                                    :items="privacyOptions"
                                    label="プライバシー設定"
                                    required
                                ></v-select>
                            </v-list-item-action>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>アカウント設定</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-text-field
                                    v-model="settings.account"
                                    label="アカウント設定"
                                    required
                                ></v-text-field>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    <v-btn color="primary" @click="saveSettings">保存</v-btn>
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
    name: 'PrivateSettingUpdate',
    data() {
        return {
            valid: false,
            settings: {
                notifications: true,
                privacy: '',
                account: '',
            },
            privacyOptions: ['公開', '非公開', '友達のみ'],
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        saveSettings() {
            if (this.$refs.form.validate()) {
                // 設定保存のロジックをここに追加
                console.log('設定が保存されました:', this.settings);
                this.goBack();
            }
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>