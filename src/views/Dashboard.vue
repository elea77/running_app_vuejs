<template>
    <div class="main-panel">

      <div class="container">
          <TitlePage title="Dashboard"/>
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

    </div>

</template>

<script>
import TitlePage from '../components/TitlePage'; 
import ApiUsers from '../mixins/ApiUsers';
import ApiProducts from '../mixins/ApiProducts';
export default {
  components: {
    TitlePage
  },
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

      var navItems = document.getElementsByClassName("nav-item");
      navItems.forEach(element => {
          element.classList.remove("active");
      });
      var item = document.getElementById("dashboard");
      item.classList.add("active");
  },

  
};

</script>

<style lang="scss" scoped>
.user__card{
  height: 110px;
  width: 250px;
  border-radius: 8px;
  background-color: #9c27b0;
  color: #ffffff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.product__card{
  height: 110px;
  width: 250px;
  border-radius: 8px;
  background-color: #9c27b0;
  color: #ffffff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.sales__card{
  height: auto;
  width: 250px;
  border-radius: 8px;
  background-color: #9c27b0;
  color: #ffffff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

</style>