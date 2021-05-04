<template>
  <div class="main-panel">
    <TitlePage title="Liste des produits" />
      <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Prix</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Statut</th>
            <th scope="col">Historique</th>
            <th scope="col">ID User</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsFromApi" v-bind:key="product._id">
            <td>{{ product.title }}</td>
            <td>{{ product.description }}</td>
            <td><img :src="product.imageUrl" :alt="product.title" width="50px"></td>
            <td><p>{{ product.price }} €</p></td>
            <td>{{ product.date }}</td>
            <td>{{ product.time }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.history }}</td>
            <td>{{ product.user }}</td>
                
            <td>
              
              <router-link :to="{name:'EditProduct',params:{id:product._id}}">
                <button class="btn btn-primary mb-2">
                Modifier
                </button>
              </router-link>
              
            </td> 
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
 import TitlePage from '../components/TitlePage';
import ProductsGrid from '../components/product/ProductsGrid';
import ApiProducts from '../mixins/ApiProducts';
export default {
   components: {
      TitlePage,
      ProductsGrid,
    },
  data: function() {
    return {
      productsFromApi: [],
      searchValue: "",
      oldSearchValue: ""
    };
  },
  mixins:[ApiProducts],
  created() {
    this.getProducts()
      .then((data) => {
        this.productsFromApi = data;
      })
      .catch((err) => console.log(err));

      var navItems = document.getElementsByClassName("nav-item");
      navItems.forEach(element => {
          element.classList.remove("active");
      });
      var item = document.getElementById("offers");
      item.classList.add("active");
  },
};
</script>

<style lang="scss" scoped>
.no-btn {
    background: transparent;
    border: none !important;
    font-size:0;
    
  }



</style>