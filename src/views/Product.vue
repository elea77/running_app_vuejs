
<template>
    <div class="product__page">
        <div class="product__form" v-if="productItem">
            <TitlePage :title="productItem.title"/>

            <img class="image__product" :src="productItem.imageUrl"/>
            <p class="price__product">
                {{productItem.price}} €
            </p>
            <p class="description_product">
                {{productItem.description}}
            </p>
             <p class="date__product">
                {{productItem.date}} 
            </p>

            
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ApiProducts from '../mixins/ApiProducts';

    export default {
        name:"Product",
        components:{
            TitlePage
        },
        data: function() {
            return {
                productItem:{}
            }
        },
        mixins:[ApiProducts],
       created() {
            this.getOneProducts()
                .then((data) => {
                    this.productItem = data;
                })
                .catch((err) => console.log(err));
        },
         methods:{
            
        }
    }
</script>

<style lang="scss" scoped>


</style>