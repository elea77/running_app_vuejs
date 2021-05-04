<template>
    <div class="main-panel">

      <div class="container">
          <TitlePage title="Dashboard"/>

          <div class="row">

            <div class="col">
              <div class="dash__card">
                  <h2> Produits</h2>
                  <p>{{productsNumber}}</p>
              </div>
            </div>
            
            <div class="col">
              <div class="dash__card">
                  <h2> Produits En vente </h2>
                  <p>{{productsSales}}</p>
              </div>
            </div>
          
            <div class="col">
              <div class="dash__card">
                  <h2> Produits Vendus </h2>
                  <p>{{productsSales}}</p>
              </div>
            </div>

          </div>
          <div class="row">

            <div class="col-2"></div>
            
            <div class="col">
              <div class="dash__card">
                  <h2> Utilisateurs</h2>  
                  <p>{{usersNumber}}</p>
              </div>
            </div>

               <div class="col">
              <div class="dash__card">
                  <h2> Administrateurs</h2>  
                  <p>{{usersNumber}}</p>
              </div>
            </div>
            <div class="col-2"></div>
            
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
      if(navItems[0]){
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        var item = document.getElementById("dashboard");
        item.classList.add("active");
      }
  },

  
};

</script>

<style lang="scss" scoped>
.dash__card{
  min-height: 100px;
  border-radius: 8px;
  background-color: #9c27b0;
  color: #ffffff;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.8em;
  }
  p {
    font-size: 2em;
    padding-top: 5px;
  }
}


</style>