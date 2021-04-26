
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
        created() {
            fetch(`http://localhost:3030/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.productItem = data;
            })
            .catch(err=> console.log(err));
        },
         methods:{
            
        }
    }
</script>

<style lang="scss" scoped>


</style>