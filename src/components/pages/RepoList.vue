<template>
  <div class="repo-container">
    <h1>This is a list of all my github repositories</h1>

    <div v-if="repos.length !== 0">
      <div class="repos">
        <div
          :key="`${i + 1}`"
          v-for="(repo, i) in repos.slice(skip, sliceEnd)"
          class="repo"
        >
          <h1>{{ repo.name }}</h1>
          <router-link
            :to="{
              name: 'MyRepo',
              params: { id: i + 1 },
              query: {
                name: repo.name,
                date: repo.created_at,
                clone: repo.clone_url,
              },
            }"
            class="btn-view"
            >View details</router-link
          >
        </div>
      </div>

      <div class="btn">
        <button @click="onPreviousButton">Previous</button>
        <button @click="onNextButton">Next</button>
      </div>
    </div>

    <div class="loading" v-else>
      <img src="../../assets/icons8-spinner.gif" alt="spinner" />
      <h2>List loading, Please wait</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoList",
  data() {
    return {
      page: 1,
      PER_PAGE: 3,
      repos: [],
    };
  },

  methods: {
    onPreviousButton(e) {
      e.preventDefault();
      if (this.page !== 1) {
        this.page -= 1;
      } else {
        return;
      }
    },

    onNextButton(e) {
      e.preventDefault();
      if (this.page !== this.totalPages) {
        this.page += 1;
      } else {
        return;
      }
    },
  },

  computed: {
    totalPages() {
      const pages = Math.ceil(this.repos?.length / 3);
      return pages;
    },

    skip() {
      const skip = this.page * this.PER_PAGE - this.PER_PAGE;
      return skip;
    },

    sliceEnd() {
      const sliceEnd = this.skip + this.PER_PAGE;
      return sliceEnd;
    },
  },

  created() {
    fetch("https://api.github.com/users/prius2055/repos")
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;
        console.log(data);
      });
  },
};
</script>

<style scoped>
.repo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 1% auto;
}

.repos {
  display: flex;
  flex-direction: row;
  column-gap: 2%;
  margin-top: 5%;
}

.repo {
  border: 2px solid #80ed99;
  border-radius: 5%;
  padding: 50px 20px 10px 20px;
  width: 350px;
  height: 200px;
  text-align: center;
}

.btn {
  display: flex;
  column-gap: 15%;
  margin-top: 2%;
  justify-content: center;
  margin-top: 5%;
}

h2 {
  margin-top: 15%;
}

.btn-view {
  background-color: #80ed99;
  color: #000;
  padding: 2% 4%;
  position: absolute;
  bottom: 5%;
  left: 65%;
  cursor: pointer;
  border-radius: 10%;
}

button {
  padding: 10px 20px;
  width: 150px;
  background-color: #063b0a;
  color: white;
  border: none;
  cursor: pointer;
}

.loading img {
  width: 100px;
  height: 100px;
  margin: 60px 47% 0px 47%;
}
</style>

