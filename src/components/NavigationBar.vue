<template>
  <div class="navigation">
    <header>
      <h1>GITHUB REPOS</h1>
    </header>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/repoList">Repositories</router-link></li>
    </ul>
  </div>
</template>

<script>
import router from './router';

export default {
    name: "NavigationBar",
    components: { router }
};
</script>

<style scoped>
.navigation {
  background-color: rgb(6, 59, 10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  color: #fff;
  width: 100%;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin-left: 50px;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
