<template>
  <div class="products-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Add a Player</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Market Price:</label>
          <input type="text" class="form-control" v-model="price">
        </div>
        <div class="form-group">
          <label>Position:</label>
          <input type="text" class="form-control" v-model="description">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      price: "",
      description: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        price: this.price,
        description: this.description
      };
      axios
        .post("http://localhost:3000/api/products", params)
        .then(response => {
          this.$router.push("/products" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>