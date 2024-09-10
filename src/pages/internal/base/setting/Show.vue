<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>設定</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
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
                            <v-btn @click="openPrivacySettings">編集</v-btn>
                        </v-list-item-action>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>アカウント設定</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn @click="openAccountSettings">編集</v-btn>
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
    name: 'InternalSettingShow',
    data() {
        return {
            settings: {
                notifications: true,
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        openPrivacySettings() {
            // プライバシー設定ページへのナビゲーションロジック
            this.$router.push({ name: 'PrivacySettings' });
        },
        openAccountSettings() {
            // アカウント設定ページへのナビゲーションロジック
            this.$router.push({ name: 'AccountSettings' });
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>