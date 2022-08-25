<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <div class="container"><MinistryLogo /></div>
      <v-list nav>
        <!-- <div class="callout top-left">Your Favourite HTML,CSS,JS Playground!</div> -->
        <v-card class="mx-auto" max-width="344" outlined>
          
            <v-list-item three-line>
              <v-avatar size="80">
                <img src="/register.png" />
              </v-avatar>
              <v-list-item-content class="p-0">
                <v-list-item-title class="title mb-0 pb-0">
                  Register
                </v-list-item-title>
                <v-list-item-subtitle class="subtitle"
                  >An Institution</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          
        </v-card>

        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-avatar size="80">
              <img src="/learn.png" />
            </v-avatar>
            <v-list-item-content class="p-0">
              <v-list-item-title class="title mb-0 pb-0">
                Learn
              </v-list-item-title>
              <v-list-item-subtitle class="subtitle"
                >More About Us</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-avatar size="80">
              <img src="/discover.png" />
            </v-avatar>
            <v-list-item-content class="p-0">
              <v-list-item-title class="title mb-0 pb-0">
                Discover
              </v-list-item-title>
              <v-list-item-subtitle class="subtitle"
                >Our Curriculum</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-avatar size="80">
              <img src="/engage.png" />
            </v-avatar>
            <v-list-item-content class="p-0">
              <v-list-item-title class="title mb-0 pb-0">
                Engage
              </v-list-item-title>
              <v-list-item-subtitle class="subtitle"
                >With School Managers and Teachers</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-list>
    </v-navigation-drawer>

    <v-fab-transition>
      <v-btn
        class="fabButton"
        color="pink"
        fab
        dark
        small
        absolute
        fixed
        top
        left
        @click="drawer = !drawer"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
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
<style>
.container {
  height: 300px;
  background-color: #19a0fb;
}
.fabButton {
  top: 20px !important;
}
.title {
  font-size: 18px;
}
.subtitle {
  font-size: 12px;
}
@media only screen and (min-width: 1025px) {
  .fabButton {
    display: none;
  }
}

/* div.callout {
	height: 60px;
	width: 100%;
	float: left;
}
div.callout {
	background-color: #444;
	background-image: -moz-linear-gradient(top, #444, #444);
	position: relative;
	color: #ccc;
	padding: 10px;
	border-radius: 3px;
	box-shadow: 0px 0px 20px #999;
	
	min-height: 50px;
	border: 1px solid #333;
	text-shadow: 0 0 1px #000;
	
}
.callout.left::before {
	right: 0px;
	top: 40%;
	border-left: 10px solid red;
  transform: rotate(180deg);
}
.callout::before {
	content: "";
	width: 0px;
	height: 0px;
	border: 0.8em solid transparent;
	position: absolute;
} */
</style>

