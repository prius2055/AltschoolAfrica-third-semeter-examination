<template>
  <div class="repo">
    <h3>Date and time created : {{ parameters.date }}</h3>
    <h1>{{ parameters.name }}</h1>
    <p>To copy this repository, use the command</p>
    <p class="clone">git clone {{ parameters.clone }}</p>
    <router-link to="/repoList" class="btn-back">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "MyRepo",
  computed: {
    parameters() {
      console.log(this.$route);
      return {
        name: this.$route.query.name,
        date: new Date (this.$route.query.date),
        clone: this.$route.query.clone,
      };
    },
  },
};
</script>

<style scoped>
.repo {
  border: 2px solid #80ed99;
  border-radius: 5%;
  padding: 30px 20px 50px 20px;
  width: 50%;
  text-align: center;
  margin: 40px auto;
  /* position: relative; */
}

h3 {
  margin-bottom: 20px;
  text-align: right;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 30px;
  font-size: 18px;
}

.clone {
  font-style: italic;
  font-weight: 600;
}

.btn-back {
  background-color: #80ed99;
  color: #000;
  padding: 10px 40px;
  cursor: pointer;
  border-radius: 10%;
  border: none;
}
</style>

