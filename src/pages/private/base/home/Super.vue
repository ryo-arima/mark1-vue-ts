<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>全ページリンク</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-card>
                    <v-card-title class="justify-center">
                        全ページリンク
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="route in routes" :key="route.path">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <router-link :to="route.path">{{ route.path }}</router-link>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
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
import { routes } from '@/router'; // ルート定義をインポート

export default {
    name: 'SuperPage',
    data() {
        return {
            routes,
        };
    },
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