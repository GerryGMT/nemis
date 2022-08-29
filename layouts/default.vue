<template>
  <v-app>

    <!-- Side Navigation -->

    <v-navigation-drawer v-model="drawer" app>
      <div class="container"><MinistryLogo /></div>
      <v-list class="navlist" nav>
        <ul class="navbar-nav">
          <!-- Register -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/">
              <v-list-item three-line
                >
                <v-avatar size="80">
                  <img src="/register.png" />
                </v-avatar>
                <v-list-item-content class="p-0">
                  <v-list-item-title class="title mb-0 pb-0">
                    Register
                  </v-list-item-title>
                  <v-list-item-title class="itemsubtitle"
                    >An Institution</v-list-item-title
                  >
                </v-list-item-content>
                <div class="triangle"></div
              ></v-list-item>
            </NuxtLink>
          </li>

          <!-- Learn -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/inspire">
              <v-list-item three-line
                ><v-avatar size="80">
                  <img src="/learn.png" />
                </v-avatar>
                <v-list-item-content class="p-0">
                  <v-list-item-title class="title mb-0 pb-0">
                    Learn
                  </v-list-item-title>
                  <v-list-item-title class="itemsubtitle"
                    >More About Us</v-list-item-title
                  >
                </v-list-item-content>
                <div class="triangle"></div
              ></v-list-item>
            </NuxtLink>
          </li>

          <!-- Discover -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/discover">
              <v-list-item three-line
                ><v-avatar size="80">
                  <img src="/discover.png" />
                </v-avatar>
                <v-list-item-content class="p-0">
                  <v-list-item-title class="title mb-0 pb-0">
                    Discover
                  </v-list-item-title>
                  <v-list-item-title class="itemsubtitle"
                    >Our Curriculum</v-list-item-title
                  >
                </v-list-item-content>
                <div class="triangle"></div
              ></v-list-item>
            </NuxtLink>
          </li>

         <!-- Engage -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/engage">
              <v-list-item three-line
                ><v-avatar size="80">
                  <img src="/engage.png" />
                </v-avatar>
                <v-list-item-content class="p-0">
                  <v-list-item-title class="title mb-0 pb-0">
                    Engage
                  </v-list-item-title>
                  <v-list-item-title class="itemsubtitle"
                    >With School Managers<br/> and Teachers</v-list-item-title
                  >
                </v-list-item-content>
                <div class="triangle"></div
              ></v-list-item>
            </NuxtLink>
          </li>
        </ul>    
      </v-list>
    </v-navigation-drawer>

<!-- Hambuger nav-bar-icon -->
    <v-fab-transition>
      <v-btn
        class="fabButton"
        color="#19A0FB"
        fab
        dark
        small
        absolute
        fixed
        top
        left
        @click="drawer = !drawer"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script >
import MinistryLogo from '~/components/MinistryLogo.vue'
export default {
  components: { MinistryLogo },
  data() {
    return {
      drawer: null,
      links: [
        'Ministry of Education',
        'COVID 19 Measures',
        'Info Center',
        "FAQ's",
        'Institution',
      ],
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-youtube'],
    }
  },
}
</script>
<style lang="scss" scoped>


.container {
  height: 300px;
  background-color: #19a0fb;
}
.fabButton {
  top: 20px !important;
}
.title {
  font-size: 18px;
  font-family: 'Nexa-Light', sans-serif;
  font-weight: 700;
  color: #003b95;
}
.itemsubtitle {
  font-size: 12px;
  font-family: 'Nexa-Light', sans-serif;
  font-weight: 700;
  color: #003b95;
}
.v-application ul {
  padding: 0px;
}
.v-list--nav {
  padding: 0px;
}

@media only screen and (min-width: 1025px) {
  .fabButton {
    display: none;
  }
}

.triangle {
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 30px solid #fff;
  
}

.v-list--nav .v-list-item {
  padding: 0px;
}

.nav-item :hover {
  background-color: #E4E4E4;
  
   .triangle{
  border-right: 30px solid #023481;
  }  
}

a {
  position: relative;
  text-decoration: none;
  height: 3px;
  background-color: red;
  width: 100px;
}
a:after {
  content: "";
  position: absolute;
  }
.navlist .nav::-webkit-scrollbar {
  display: none;
}
li {
  list-style: none;
}

// .arrow {
//   width: 0;
//   height: 0;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   border-right: 10px solid #c97932;
//   margin: 25px auto;
//   color: green;
// }

</style>

