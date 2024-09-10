<template>
  <div class="forbidden">
	<h1>403 - Forbidden</h1>
	<p>アクセスが拒否されました。権限がありません。</p>
  </div>
</template>

<script>
export default {
  name: 'Forbidden'
}
</script>

<style scoped>
.forbidden {
  text-align: center;
  margin-top: 50px;
}

.forbidden h1 {
  font-size: 2em;
  color: #ff0000;
}

.forbidden p {
  font-size: 1.2em;
}
</style>