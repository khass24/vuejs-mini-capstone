<template>
  <div class="products-show">
    <h1>{{ product.name }}</h1>
      <h4>Market Value: ${{ product.price }}0</h4>
      <h4>Position: {{ product.description }}</h4>
    <img src="https://mbtskoudsalg.com/images/west-ham-logo-png-8.png">
  </div>
</template>

<style>

body {
  text-align: center;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      product: {}
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/products/" + this.$route.params.id)
    .then(response => {
      this.product = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
