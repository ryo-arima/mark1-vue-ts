<template>
  <v-container fluid class="forbidden">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card class="elevation-12">
          <v-card-title class="headline red--text">403 - Forbidden</v-card-title>
          <v-card-text class="subtitle-1">アクセスが拒否されました。権限がありません。</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PublicForbidden'
}
</script>

<style scoped>
.forbidden {
  margin-top: 50px;
}
</style>
