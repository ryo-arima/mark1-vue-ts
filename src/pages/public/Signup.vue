<template>
    <v-app>
        <v-app-bar app color="primary">
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
                                    <v-btn type="submit" color="primary" block>サインアップ</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    <v-footer app color="primary" dark>
      <v-col class="text-center white--text">
        &copy; 2024 mark1
      </v-col>
    </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'Signup',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
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
}
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>