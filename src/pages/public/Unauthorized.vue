<template>
  <v-container fluid class="unauthorized">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card class="elevation-12">
          <v-card-title class="headline red--text">401 - Unauthorized</v-card-title>
          <v-card-text class="subtitle-1">アクセスが許可されていません。ログインしてください。</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style scoped>
.unauthorized {
  margin-top: 50px;
}

.red--text {
  color: #ff0000;
}
</style>