<template>
  <div class="email-confirmation">
    <h1>メール確認</h1>
    <p v-if="isEmailConfirmed">メールが認証されました。</p>
    <p v-else>メールを確認してください。</p>
    <router-link to="/email-confirmation">メール確認画面に戻る</router-link>
    <button @click="resendEmail">メールを再送する</button>
  </div>
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