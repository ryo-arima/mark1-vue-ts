<template>
  <v-container class="email-confirmation">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="display-2">メール確認</h1>
        <p class="subtitle-1">メールを確認してください。</p>
        <v-btn color="primary" @click="resendEmail">メールを再送する</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <router-link to="/email-confirmation">メール確認画面に戻る</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EmailConfirmation',
  methods: {
    resendEmail() {
      // メール再送のロジックをここに追加
      console.log('メールを再送しました');
    }
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