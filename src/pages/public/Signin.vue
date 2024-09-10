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
              <v-card-title class="headline">サインイン</v-card-title>
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
                  <v-btn type="submit" color="primary" block>サインイン</v-btn>
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
  name: 'Signin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // サインインのロジックをここに追加
      console.log('サインインしました', this.email, this.password);
    }
  }
}
</script>

<style scoped>
.signin {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signin h1 {
    text-align: center;
    margin-bottom: 20px;
}

.signin form {
    display: flex;
    flex-direction: column;
}

.signin label {
    margin-bottom: 5px;
}

.signin input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signin button {
    padding: 10px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.signin button:hover {
    background-color: #0056b3;
}
</style>