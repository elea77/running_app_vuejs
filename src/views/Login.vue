<template>
    <div class="container">
        <TitlePage title="Connexion"/>
        <div class="alert alert-danger" role="alert" v-if="messageError">
            {{ messageError }} 
        </div>
        <div class="form">
            <!-- Autre méthode:  -->
            <!-- <form @submit.prevent="login"> -->
            <form>
                <div class="form__group">
                    <input type="text" v-model="email" id="" class="form_input" placeholder="Adresse mail"> <br>
                </div>
                <div class="form__group">
                    <input type="password" v-model="password" id="" class="form_input" placeholder="Mot de passe"> <br>
                </div>
                <div class="form__group">
                    <button type="submit" class="btn" @click.prevent="loginBtn">Se connecter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import TitlePage from '../components/TitlePage';
    import ApiUsers from '../mixins/ApiUsers';
    import apiConfigs from '../configs/api.configs';
    import VueJwtDecode from "vue-jwt-decode";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                email: "",
                password: "",
                userToken: "",
                messageError: ""
            }
        },
        mixins:[ApiUsers],
        methods: {
            loginBtn: function(event) {
                event.preventDefault(); // empêche le rechargement de la page
                return fetch(`${apiConfigs.apiUrl}/login`, {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        email: this.email,
                        password: this.password
                    })
                })
                .then (res => res.json())
                .then((data) => {
                    if(!data.auth) {
                        this.messageError = data.message;
                    }
                    else{
                        let token = data.token;
                        let decodedToken = VueJwtDecode.decode(token);
                        if(decodedToken.isAdmin == false){
                            this.messageError = "Vous n'êtes pas Administrateur ! Vous ne pouvez donc pas accéder au dashboard";
                        }
                        else {
                            localStorage.setItem('token',token);
                            this.$router.push('/dashboard');
                            window.location.reload();
                        }
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        .form_input {
            width: 25em;
            height: calc(1.5em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            margin-bottom: 1rem;
            @media (max-width: 560px) {
                width: 18em;
            }
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }
    }
</style>