<template>
  <div class="container">
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
                Modifier
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
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-right: 80px;
  margin-top: 50px;
}

.no-btn {
    background: transparent;
    border: none !important;
    font-size:0;
  }

</style>