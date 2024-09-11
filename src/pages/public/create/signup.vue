<template>
    <v-app>
        <v-app-bar app color="primary">
            <v-btn icon @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Mark1</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" md="6">
                        <v-card>
                            <v-card-title class="headline">サインアップ</v-card-title>
                            <v-card-text>
                                <v-form @submit.prevent="handleSubmit">
                                    <v-text-field
                                        v-model="email"
                                        label="メールアドレス"
                                        type="email"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        label="パスワード"
                                        type="password"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="confirmPassword"
                                        label="パスワード確認"
                                        type="password"
                                        required
                                    ></v-text-field>
                                    <v-btn color="primary" type="submit">サインアップ</v-btn>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="secondary" @click="goToTop">トップへ戻る</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Signup',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    setup() {
        const router = useRouter();

        const goBack = () => {
            router.push('/');
        };

        const goToTop = () => {
            router.push('/');
        };

        return {
            goBack,
            goToTop,
        };
    },
    methods: {
        handleSubmit() {
            if (this.password !== this.confirmPassword) {
                alert('パスワードが一致しません');
                return;
            }
            // サインアップのロジックをここに追加
            console.log('サインアップしました', this.email, this.password);
        }
    }
});
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>