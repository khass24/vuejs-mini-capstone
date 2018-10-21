<template>
  <div class="products-index">
    <h1>West Ham Fire Sale</h1>
    <div class="row">
      <div class="col-md-4 bg-dark" v-for="product in products">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top bg-secondary" src="https://mbtskoudsalg.com/images/west-ham-logo-png-8.png" alt="Card image cap">
          <div class="card-body bg-secondary">
            <h5 class="card-title">Player: {{product.name}}</h5>
            <p class="card-text">Price: ${{product.price}}0</p>
            <p class="card-text">Position: {{product.description}}</p>
          </div>
          <router-link class="btn btn-info btn-lg" v-bind:to="'/products/' + product.id">View Player</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.products-index {
  margin: 15px;
}

.card {
  margin-left: -5px;
  margin-top: 10px;
  margin-bottom: 15px;
}

h1 {
  text-align: center;
  color: white;
}

body {
  font-family: "Palatino Linotype";
  background-color: #982B48;
  color: white;
}

</style>

<script>
  var axios = require("axios");

  export default {
    data: function() {
      return {
        products: []
      };
    },
    created: function() {
      axios
      .get("http://localhost:3000/api/products")
      .then(response => {
        this.products = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>