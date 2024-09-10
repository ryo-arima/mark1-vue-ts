<template>
  <div class="bad-request">
	<h1>400 - Bad Request</h1>
	<p>リクエストにエラーがあります。もう一度お試しください。</p>
  </div>
</template>

<script>
export default {
  name: 'BadRequest'
}
</script>

<style scoped>
.bad-request {
  text-align: center;
  margin-top: 50px;
}

.bad-request h1 {
  font-size: 2em;
  color: #ff0000;
}

.bad-request p {
  font-size: 1.2em;
}
</style>