<template>
  <div class="error-container">
    <h1>The page you are requesting does not exit</h1>
    <div>
      <router-link to="/">Click here to return to the home page</router-link>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 1% auto;
}
</style>
