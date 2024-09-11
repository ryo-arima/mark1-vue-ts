<template>
    <v-app>
        <v-app-bar app>
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>プロフィール</v-toolbar-title>
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
                            <v-card-subtitle class="text-center">
                                ユーザー名
                            </v-card-subtitle>
                            <v-card-text class="text-center">
                                これはユーザーの自己紹介です。ここにユーザーの情報を表示します。
                            </v-card-text>
                            <v-card-actions class="justify-center">
                                <v-btn color="primary">フォロー</v-btn>
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
    name: 'PrivateShowProfile',
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>