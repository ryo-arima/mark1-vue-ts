<template>
  <div class="not-found">
	<h1>404 - Not Found</h1>
	<p>お探しのページは見つかりませんでした。</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 2em;
  color: #ff0000;
}

.not-found p {
  font-size: 1.2em;
}
</style>