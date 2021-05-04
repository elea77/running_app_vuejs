<template>
    <div class="main-panel">
        <div class="container">
            <TitlePage title="Informations utilisateur"/>
            <div>
                <div v-if="user">
                    <div>
                        <p>Nom : <b>{{user.firstName}}</b></p>
                        <p>Prénom : <b>{{user.lastName}}</b></p>
                        <p>Email : <b>{{user.email}}</b></p>
                        <p>Numéro de téléphone : <b>{{user.phone}}</b></p>
                        <router-link :to="{name:'EditOtherUser',params:{id:user._id}}" class="btn btn-primary">Modifier le profil</router-link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiUsers from '../mixins/ApiUsers';
    import TitlePage from '../components/TitlePage'
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{}
            }
        },
        mixins:[ApiUsers],
        created() {
            this.getOtherUser()
            .then(data=>{
                this.user = data;
            })
            .catch(err => console.log(err))
        }
    }
</script>

<style lang="scss" scoped>
    .user__info {
        text-align: left;
    }
</style>