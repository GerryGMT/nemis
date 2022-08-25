<template>
  <v-footer  color="#003b95" padless fixed>
    <v-row class="footer" justify="center" no-gutters>
      <div class="links">
        <v-text
          v-for="link in links"
          :key="link"
          color="white"
          text
          class="my-2"
        >
          {{ link }} <span class="pa-5">/</span>
        </v-text>
      </div>

      <div class="icons">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
.links {
  font-size: 12px;
}
.icons {
  padding-left: 4rem;
}
.footer {
  padding-left: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>