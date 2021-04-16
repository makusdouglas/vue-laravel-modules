<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card container">
          <div class="card-header row justify-content-between">
            <span>{{ cardheader }}</span>
            <button class="btn btn-outline-primary btn-sm" @click="showAlert()">
              More...
            </button>
          </div>

          <div class="card-body">
            <ul v-for="user in usersData" :key="user['name']">
              <li>Nome: {{ user["name"] }}</li>
              <li>Apelido: {{ user["nickname"] }}</li>
              <li>Email: {{ user["email"] }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardheader", "users"],
  mounted() {
    console.log("Component mounted");
  },
  computed: {
    usersData() {
      return JSON.parse(this.users);
    },
  },
  methods: {
    showAlert(e) {
      alert("Click");
      console.log(e);
    },
  },
};
</script>

<style lang="sass">
</style>
