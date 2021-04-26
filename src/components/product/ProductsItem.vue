<template>
    <div>
        <div class="cards__item" v-if="productsObject">
            <div class="cards__item__link" >

                <router-link class="link"  :to="{name: 'Product', params:{id:this.productsObject._id}}">
                    <h2 class="product__title">
                        {{productsObject.title}}
                    </h2>
                </router-link>

                   <img :src="productsObject.imageUrl"/>

            <div class="cards__item__info">
                <p class="cards__item__text">            
                {{productsObject.price}} €
                </p>
            </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:"ProductsItem",
        props:{
            productsObject: Object,
        },
        created() {
        },
        methods:{
           
        }
    }
</script>

<style lang="scss" scoped>

</style>