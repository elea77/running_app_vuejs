<template>
    <div class="main-panel">
        <div class="container">
            <TitlePage title="Ajouter un administrateur"/>
            <div class="form-register">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" v-model="firstName" placeholder="Prénom">
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" v-model="lastName" placeholder="Nom">
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" v-model="email" placeholder="Adresse mail">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password" placeholder="Mot de passe">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="phone" placeholder="Téléphone">
                    </div>
                    
                    <button type="submit" class="btn btn-primary" @click="register">Ajouter l'administrateur</button>

                </form>
                <p v-if="messageError">{{ messageError }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import TitlePage from '../components/TitlePage'; 
    import ApiUsers from '../mixins/ApiUsers';
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phone: "",
                isAdmin: true,
                userToken: "",
                messageError: ""
            }
        },
        mixins:[ApiUsers],
        methods: {
            register: function(event) {
                event.preventDefault();
                this.createAdmin()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/users');
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="scss" scoped>

    
</style>