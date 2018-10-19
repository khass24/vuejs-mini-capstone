<template>
  <div class="home">
    <h1>West Ham Fire Sale</h1>
    <div class="row">
      <div class="col-md-4" v-for="product in products">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="http://uefa.wdfiles.com/local--files/england:west-ham-united-fc/west-ham-united-fc-old-3.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Player: {{product.name}}</h5>
            <p class="card-text">Price: {{product.price}}</p>
            <p class="card-text">Position: {{product.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  margin: 15px;
}

.card {
  margin: 20px;
}

h1 {
  text-align: center;
}

body {
  background-color: #982B48;
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
    methods: {
      // addProduct: function() {
      //   this.errors = [];
      //   var params = {
      //                 name: this.newProduct.name,
      //                 price: this.newProduct.price,
      //                 description: this.newProduct.description,
      //                 supplier_id: this.newProduct.supplier_id
      //                };

      //   axios
      //   .post("http://localhost:3000/api/products", params)
      //   .then(response => {
      //     this.products.push(response.data);
      //     this.newProduct = {name: "", price: "", description: "", supplier_id: ""};
      //   })
      //   .catch(error => {
      //     this.errors = error.response.data.errors;
      //   });
      // }
    },
    computed: {}
  };
</script>