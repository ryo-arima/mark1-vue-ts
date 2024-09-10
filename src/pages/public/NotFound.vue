<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Mark1</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid class="not-found">
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-card class="text-center">
              <v-card-title class="red--text">
                <h1>404 - Not Found</h1>
              </v-card-title>
              <v-card-text>
                <p>お探しのページは見つかりませんでした。</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; 2024 Mark1</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  margin-top: 50px;
}

h1 {
  font-size: 2em;
}

p {
  font-size: 1.2em;
}
</style>