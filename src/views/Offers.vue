<template>
  <div class="main-panel">
    <div class="container">
      <TitlePage title="Liste des produits" />
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Fitre par statut :</label>
          <div class="col-sm-10">
          <select class="form-control" id="filterStatus" @change="filterRowsBySelect('filterStatus',6,0)">
            <option value="">Tout</option>
            <option value="En vente">En vente</option>
            <option value="Vendu">Vendu</option>
          </select>
          </div>
        </div>
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
              <td v-if="product.status == true">En vente</td>
              <td v-else-if="product.status == false">Vendu</td>
              <td>{{ product.user }}</td>
                  
              <td>
                
                <router-link :to="{name:'EditProduct',params:{id:product._id}}">
                  <span class="iconify" style="color: rgb(0, 133, 255);" data-inline="false" data-icon="ant-design:edit-outlined"></span>
                </router-link>
                <button @click="del(product._id)" class="no-btn">
                  <span style="color: red;" class="iconify" data-inline="false" data-icon="ant-design:delete-outlined"></span>
                </button>
                <router-link :to="{name:'History',params:{id:product._id}}">
                  <span class="iconify" data-icon="ant-design:history-outlined" data-inline="false"></span>
                </router-link>
                
              </td> 
            </tr>
          </tbody>
        </table>
    </div>
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
      if(navItems[0]){
        navItems.forEach(element => {
          element.classList.remove("active");
        });
        var item = document.getElementById("offers");
        item.classList.add("active");
      }
  },
  methods: {
    filterRowsBySelect: function (element,column,table){
      var filter = document.getElementById(element).value;
      var tableau = document.querySelectorAll("tbody");
      var rows = [].slice.call(tableau[table].querySelectorAll("tr"));

      for(var i = 0; i < rows.length; i++){
          var content = rows[i].cells[column].textContent || rows[i].innerText;
          if(content.indexOf(filter) > -1){
              rows[i].style.display = '';
          }else{
              rows[i].style.display = 'none';
          }
      }
    },
    del: function(id) {
      this.deleteProduct(id)
      .then(data => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.no-btn {
    background: transparent;
    border: none !important;
    font-size:0;
    
  }

#filterStatus {
  width: 20%;
}

.iconify{
  color: black;
  font-size: 25px;
  cursor: pointer;
}


</style>