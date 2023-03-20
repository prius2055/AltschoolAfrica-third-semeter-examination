<template>
  <div class="welcome-page">
    <h1>Hello there!</h1>
    <h2>Welcome to my third semeter Altschool Africa Examination page</h2>
    <p>
      This page is created for Altschool Africa third semester examination,using
      <a href="https://vuejs.org" target="_blank" rel="noopener">vuejs</a>
    </p>
    <p>To view the list of repositories,</p>
    <h3>Click on the <span>Repositories</span> link in the navigation bar above</h3>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-page {
  border: 2px solid #80ed99;
  max-width: 800px;
  margin: 1% auto;
  padding: 2%;
  text-align: center;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  padding-top: 1%;
  padding-bottom: 1%;
}

h2 {
  margin: 10px 0;
  font-size: 25px;
}

h3 {
  font-size: 18px;

}

span {
  font-weight: 500;
  color: #063b0a;
  text-decoration: underline;
  font-style: italic;

}



p {
  margin: 10px 0;
  font-size: 18px;
  font-weight: 400;
}
</style>
