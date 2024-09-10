<template>
  <div class="unauthorized">
	<h1>401 - Unauthorized</h1>
	<p>アクセスが許可されていません。ログインしてください。</p>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style scoped>
.unauthorized {
  text-align: center;
  margin-top: 50px;
}

.unauthorized h1 {
  font-size: 2em;
  color: #ff0000;
}

.unauthorized p {
  font-size: 1.2em;
}
</style>