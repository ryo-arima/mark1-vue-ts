<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mark1</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToSignin">ログイン</v-btn>
      <v-btn text @click="goToSignup">サインアップ</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-1">ようこそ、私たちのウェブサイトへ！</h1>
            <p class="headline">ここでは最新の情報とサービスを提供しています。</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center white--text">
        &copy; 2023 私たちのウェブサイト
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'TopPage',
  setup() {
    const router = useRouter();

    const goToSignin = () => {
      router.push('/signin');
    };

    const goToSignup = () => {
      router.push('/signup');
    };

    return {
      goToSignin,
      goToSignup,
    };
  },
});
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}

.display-1 {
  margin-bottom: 20px;
}

.headline {
  margin-bottom: 40px;
}
</style>