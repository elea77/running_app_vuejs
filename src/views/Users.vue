<template>
  <div class="main-panel">
    <div class="container">
      <TitlePage title="Liste utilisateurs" />
      <router-link to="/AddAdmin">
        <button class="btn btn-primary mb-2">Ajouter un Administrateur</button>
      </router-link>
      <table class="table">
          <thead class="thead-dark">
              <tr>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Admin</th>
              <th scope="col">Actions</th>
              </tr>
          </thead>
            <tbody>
                <tr v-for="user in usersFromApi" v-bind:key="user._id">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.isAdmin }}</td>
                    <td>
                      <router-link :to="{name:'EditOtherUser',params:{id:user._id}}">
                        <span class="iconify" style="color: rgb(0, 133, 255);" data-inline="false" data-icon="ant-design:edit-outlined"></span>
                      </router-link>
                      <span @click="del(user._id)" style="color: red;" class="iconify" data-inline="false" data-icon="ant-design:delete-outlined"></span>
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
  import ApiUsers from '../mixins/ApiUsers';
  export default {
    components: {
      TitlePage,
      ProductsGrid,
    },
    data: function() {
      return {
        usersFromApi: [],
        searchValue: ""
      };
    },
    mixins:[ApiUsers],
    methods: {
      del: function(id) {
        console.log(id);
        this.deleteUser(id)
        .then(data => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
      }
    },
    created() {
      this.getUsers()
        .then((data) => {
          this.usersFromApi = data;
        })
        .catch((err) => console.log(err));


        var navItems = document.getElementsByClassName("nav-item");
        if(navItems[0]){
          navItems.forEach(element => {
            element.classList.remove("active");
          });
          var item = document.getElementById("users");
          item.classList.add("active");
        }
    },
  };
</script>

<style lang="scss" scoped>
.no-btn {
  background: transparent;
  border: none !important;
  font-size:0;
 }

.iconify{
  color: black;
  font-size: 25px;
  cursor: pointer;
}
</style>