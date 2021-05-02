<template>
  <div class="main-panel">
    <ProductsGrid :productsArray="productsFromApi"/>    
  </div>
</template>

<script>
import ProductsGrid from '../components/product/ProductsGrid';
import ApiProducts from '../mixins/ApiProducts';
export default {
  components: {
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


</style>