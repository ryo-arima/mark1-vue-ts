<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Mark1</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-list>
                    <v-list-item v-for="friend in friends" :key="friend.id">
                        <v-list-item-avatar>
                            <v-img :src="friend.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ friend.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ friend.message }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-main>

        <v-bottom-navigation app>
            <v-btn>
                <v-icon>mdi-chat</v-icon>
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
    Name: 'InternalShowHome',
    data() {
        return {
            friends: [
                { id: 1, name: '友達1', message: 'こんにちは', avatar: 'https://via.placeholder.com/50' },
                { id: 2, name: '友達2', message: '元気ですか？', avatar: 'https://via.placeholder.com/50' },
                // 他の友達データ
            ],
        };
    },
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>