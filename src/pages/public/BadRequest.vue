<template>
  <v-container fluid class="bad-request">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card class="elevation-12">
          <v-card-title class="red lighten-1 white--text">
            <h1 class="display-1">400 - Bad Request</h1>
          </v-card-title>
          <v-card-text>
            <p class="subtitle-1">リクエストにエラーがあります。もう一度お試しください。</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BadRequest'
}
</script>

<style scoped>
.bad-request {
  margin-top: 50px;
}

.bad-request h1 {
  font-size: 3em;
}

.bad-request p {
  font-size: 1.5em;
}
</style>