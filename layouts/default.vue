<template>
  <v-app id="app">
    <!-- Side Navigation -->

    <v-navigation-drawer v-model="drawer" app>
      <div class="container"><MinistryLogo /></div>
      <v-list class="navlist" nav>
        <ul class="navbar-nav">
          <!-- Register -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/">
              <v-list-item three-line>
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
                <div class="triangle"></div>
                <div class="bottom-line"></div>
              </v-list-item>
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
              ><div class="bottom-line"></div></v-list-item>
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
              ><div class="bottom-line"></div></v-list-item>
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
                    >With School Managers<br />
                    and Teachers</v-list-item-title
                  >
                </v-list-item-content>
                <div class="triangle"></div
              ><div class="bottom-line"></div></v-list-item>
            </NuxtLink>
          </li>
        </ul>
      </v-list>

      <template>
        <div class="nav-footer">
          <div class="year">
            ©{{ new Date().getFullYear() }} All Rights Reserved
          <br />
          <a href="">nemis@education.go.ke</a>          
          </div>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Hambuger nav-bar-icon -->
    <v-fab-transition>
      <v-btn
        class="fabButton"
        color="#19A0FB"
        fab
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
      <CarouselHeader />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script >
import MinistryLogo from '~/components/MinistryLogo.vue'
import CarouselHeader from '~/components/carouselHeader.vue';
export default {
  components: { MinistryLogo, CarouselHeader },
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
.triangle {
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 30px solid #fff;
}
.v-list--nav .v-list-item {
  padding: 0px;
}
.nuxt-link-exact-active {
  .v-list-item {
    background-color: #E4E4E4;
  }
  .triangle {
    border-right: 30px solid #023481;
  }
  .bottom-line {
    border-bottom: 5px solid #003b95;
  }
}
a.nuxt-link-active {
  background-color: #000;
}
a {
  text-decoration: none;
}
.navlist .nav::-webkit-scrollbar {
  display: none;
}
li {
  list-style: none;
}
.bottom-line {
  position: absolute;
  width: 170px;
  right: 50px;
  border-bottom: 1px solid #003b95;
  bottom: 0;
}
.nav-footer {
  padding: 2.3rem;
}
.year {
  font-size: 10px;
  font-weight: 700;
  font-family: 'Nexa-Light', sans-serif;
}
@media only screen and (min-width: 1025px) {
  .fabButton {
    display: none;
  }
}
</style>

