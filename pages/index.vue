<template>
  <v-row>
    <v-col class="body text-center">
      <CarouselHeader />

      <v-footer padless>
        <v-card flat tile width="100%" class="white--text text-center">
          <v-row class="body" no-gutters>
            <v-col cols="12" sm="12" md="8">
              <v-card-text>
                <h1 class="pb-2 white--text">
                  For School Managers or Head of Institutions, Register
                  Institution for credibility
                </h1>
              </v-card-text>

              <v-card-text class="pt-0 text-left text-md-center">
                <div
                  v-for="(item, i) in items"
                  :key="i"
                  class="primary col-md-3 col-12 elevation-0"
                >
                  <h3 class="d-none d-md-block py-2">{{ item.name }}</h3>
                  <div class="d-md-none">{{ item.name }}</div>
                  <div>
                    <li>
                      <a
                        v-for="tag in item.tags"
                        target="_blank"
                        v-bind:key="tag.url"
                        class="white--text"
                        >{{ tag.urlname }}
                      </a>
                    </li>
                  </div>
                </div>
              </v-card-text>
            </v-col>

            <v-divider vertical></v-divider>

            <v-col cols="12" md="4">
              <SignIn />
            </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-card-text class="body white--text">
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
                  <a target="_blank" :key="icon.url" v-for="icon in icons">
                    <v-btn class="mx-4" dark icon>
                      <v-icon size="24px">
                        {{ icon.icon }}
                      </v-icon>
                    </v-btn>
                  </a>
                </div>
              </v-row>
            </v-card-text>
          
        </v-card>
      </v-footer>
    </v-col>
  </v-row>
</template>

<script>
import CarouselHeader from '~/components/carouselHeader.vue'
import SignIn from '../components/SignIn.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'Index',
  components: { CarouselHeader, SignIn, Footer },
  data() {
    return {
      links: [
        'Ministry of Education',
        'COVID 19 Measures',
        'Info Center',
        "FAQ's",
        'Institution',
      ],
      icons: [
        {
          name: 'facebook',
          icon: 'mdi-facebook',
          url: 'https://codepen.io/jettaz',
        },
        {
          name: 'twitter',
          icon: 'mdi-twitter',
          url: 'https://codepen.io/jettaz',
        },
        {
          name: 'youtube',
          icon: 'mdi-youtube',
          url: 'https://codepen.io/jettaz',
        },
      ],
      items: [
        {
          name: 'Product',
          tags: [
            {
              urlname: 'Create Websites',
              url: 'https://codepen.io/jettaz',
            },
            {
              urlname: 'Secure Cloud Hosting',
              url: 'https://codepen.io/jettaz',
            },
            {
              urlname: 'Engage Your Audience',
              url: 'https://codepen.io/jettaz',
            },
            {
              urlname: 'Website Support',
              url: 'https://codepen.io/jettaz',
            },
          ],
        },
        {
          name: 'Company',
          tags: [
            { urlname: 'About', url: 'https://codepen.io/jettaz' },
            { urlname: 'Careers', url: 'https://codepen.io/jettaz' },
            { urlname: 'Support', url: 'https://codepen.io/jettaz' },
            { urlname: 'Pricing', url: 'https://codepen.io/jettaz' },
            { urlname: 'FAQ', url: 'https://codepen.io/jettaz' },
          ],
        },
      ],
    }
  },
}
</script>

<style>
.body {
  background-color: #003b95;
}
</style>