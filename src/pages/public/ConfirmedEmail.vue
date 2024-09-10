<template>
  <v-container class="email-confirmation">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="display-2">メール確認</h1>
        <v-card class="mt-5" v-if="isEmailConfirmed">
          <v-card-text class="text-center">メールが認証されました。</v-card-text>
        </v-card>
        <v-card class="mt-5" v-else>
          <v-card-text class="text-center">メールを確認してください。</v-card-text>
        </v-card>
        <v-btn class="mt-5" color="primary" to="/email-confirmation">メール確認画面に戻る</v-btn>
        <v-btn class="mt-3" color="primary" @click="resendEmail">メールを再送する</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EmailConfirmation',
  data() {
    return {
      isEmailConfirmed: false // メール認証の状態を管理
    };
  },
  methods: {
    resendEmail() {
      // メール再送のロジックをここに追加
      console.log('メールを再送しました');
    },
    confirmEmail() {
      // メール認証のロジックをここに追加
      this.isEmailConfirmed = true;
      console.log('メールが認証されました');
    }
  },
  mounted() {
    // コンポーネントがマウントされたときにメール認証を確認
    this.confirmEmail();
  }
}
</script>

<style scoped>
.email-confirmation {
  text-align: center;
  margin-top: 50px;
}

.email-confirmation h1 {
  font-size: 2em;
  color: #333;
}

.email-confirmation p {
  font-size: 1.2em;
}

.email-confirmation a {
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

.email-confirmation a:hover {
  text-decoration: underline;
}

.email-confirmation button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.email-confirmation button:hover {
  background-color: #0056b3;
}
</style>