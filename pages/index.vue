<template>
  <v-row>
    <v-col class="body text-center">
      <!-- Import carousel -->
      <CarouselHeader />

      <v-footer padless>
        <v-card flat tile width="100%" class="white--text text-center">
          <v-row class="body" no-gutters>
            <v-col cols="12" sm="12" md="8">
              <div>
                <p class="heading white--text">
                  For School Managers or Head of Institutions, Register
                  Institution for credibility
                </p>
              </div>

              <div class="contain">
                <div class="first">
                  <div class="line"></div>
                  <ul>
                    <li class="pt-8">Register an Institution</li>
                    <li>What is NEMIS?</li>
                    <li>Our Policies</li>
                    <li>How to Apply</li>
                  </ul>
                </div>
                <div class="second">
                  <div class="line"></div>
                  <ul>
                    <li class="pt-8">FAQ’s</li>
                    <li>Application Forms</li>
                    <li>Schools/Institutions</li>
                    <li>Information Centre</li>
                  </ul>
                </div>
              </div>

              <div class="card">
                <v-card height="90" width="260">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="download-text">
                        Download School Guide
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-btn
                      class="Button"
                      color="primary"
                      dark
                      small
                      @click="drawer = !drawer"
                    >
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                  </v-list-item>
                </v-card>
              </div>
            </v-col>

            <v-divider vertical dark></v-divider>

            <v-col cols="12" md="4">
              <SignIn />
            </v-col>
          </v-row>

          <v-divider dark></v-divider>

          <!-- Footer Links -->

          <v-card-text class="body white--text">
            <v-row class="footer" justify="center" no-gutters>
              <div class="links">
                <div
                  v-for="link in links"
                  :key="link"
                  color="white"
                  text
                  class="display-flex my-2"
                >
                  {{ link }} <span class="pa-5">/</span>
                </div>
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
          url: 'https://facebook.com',
        },
        {
          name: 'twitter',
          icon: 'mdi-twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'youtube',
          icon: 'mdi-youtube',
          url: 'https://youtube.com',
        },
      ],
    }
  },
}
</script>

<style>
.body {
  background-color: #003b95;
  overflow: hidden;
}
.col {
  padding: 0;
}
.heading {
  font-size: 14px;
  font-family: 'Nexa-Light', sans-serif;
  font-weight: 400;
  padding-left: 3.5rem;
  margin: 20px 0px;
}
.contain {
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 3.5rem;
}
.first {
  width: 50%;
  height: auto;
  text-align: center;
}
.second {
  width: 50%;
  height: auto;
  text-align: center;
}

.contain .first ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
}
.contain .second ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
}
.contain .first ul li {
  color: #fff;
  font-size: 14px;
  font-family: 'Nexa-Light', sans-serif;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
.contain .second ul li {
  color: #fff;
  font-size: 14px;
  font-family: 'Nexa-Light', sans-serif;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
.line {
  border-bottom: 5px solid #ebf3ff1a;
  width: 196px;

}
.download-text {
  font-size: 13px;
  font-family: 'Nexa-Light', sans-serif;
  font-weight: 700; 
}
.card {
  bottom: 0;
  padding: 3rem;
}

@media only screen and (max-width: 321px) {
  .icons {
    padding-left: 0;
  }
  .heading {
    padding-left: 1.5rem;
  }
  .contain {
    padding-left: 1.5rem;
  }
}
@media only screen and (min-width: 710px) {
  .links {
    display: flex;
  }
}
</style>