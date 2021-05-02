<template>

    <div class="main-panel">
        <div class="user__card">
            <h2> Utilisateurs</h2>  
            {{usersNumber}} 
        </div>

        <div class="product__card">
            <h2> Produits </h2>
            {{productsNumber}}
        </div>

        <div class="sales__card">
            <h2> Produits Vendus </h2>
            {{productsSales}}
        </div>

    </div>

</template>

<script>
import ApiUsers from '../mixins/ApiUsers';
import ApiProducts from '../mixins/ApiProducts';
export default {

  data: function() {
    return {
      usersNumber:"",
      productsNumber:"",
      productsSales:""
    };
  },
  mixins:[ApiUsers,ApiProducts],
  created() {
    this.calculUsers()
      .then((data) => {
        this.usersNumber = data;
      })
      .catch((err) => console.log(err));

    this.calculProducts()
      .then((data) => {
        this.productsNumber = data;
      })
      .catch((err) => console.log(err));

    this.calculSales()
      .then((data) => {
        this.productsSales = data;
      })
      .catch((err) => console.log(err));
  },

  
};

</script>

<style>

</style>