<template>

<!-- Carousel -->

  <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    show-arrows-on-hover
  >
  <!-- 1st Slide -->
    <v-carousel-item>
      <div class="text-h2">
        <v-card>
          <div class="all">
          <div class="mmg">
            <v-img src="/image 1.png"></v-img>
          </div>
          <div class="heading">
            <div class="welcome">
              <p>
                Welcome <br />
                to
                <span class="my-span"> Nemis </span>
              </p>
            </div>
            <div class="my-paragraph">
              <p>
                The National Education Management Information <br />
                System is a web-based data management solution <br />
                which collects data & Information from education <br />
                institutions, processes and reports status.
              </p>
            </div>
          </div>
          </div>
        </v-card>
      </div>
    </v-carousel-item>
    <!-- 2nd Slide -->
    <v-carousel-item>
      <div class="text-h2">
        <v-card>
          <div class="all">
          <div class="mmg">
            <v-img src="/image 1.png"></v-img>
          </div>
          <div class="heading">
            <div class="welcome">
              <p>
                Welcome <br />
                to
                <span class="my-span"> Nemis </span>
              </p>
            </div>
            <div class="my-paragraph">
              <p>
                The National Education Management Information <br />
                System is a web-based data management solution <br />
                which collects data & Information from education <br />
                institutions, processes and reports status.
              </p>
            </div>
          </div>
          </div>
        </v-card>
      </div>
    </v-carousel-item>
    <!-- 3rd Slide -->
    <v-carousel-item>
      <div class="text-h2">
        <v-card>
          <div class="all">
          <div class="mmg">
            <v-img src="/image 1.png"></v-img>
          </div>
          <div class="heading">
            <div class="welcome">
              <p>
                Welcome <br />
                to
                <span class="my-span"> Nemis </span>
              </p>
            </div>
            <div class="my-paragraph">
              <p>
                The National Education Management Information <br />
                System is a web-based data management solution <br />
                which collects data & Information from education <br />
                institutions, processes and reports status.
              </p>
            </div>
          </div>
          </div>
        </v-card>
      </div>
    </v-carousel-item>
    <!-- 4th Slide -->
    <v-carousel-item>
      <div class="text-h2">
        <v-card>
          <div class="all">
          <div class="mmg">
            <v-img src="/image 1.png"></v-img>
          </div>
          <div class="heading">
            <div class="welcome">
              <p>
                Welcome <br />
                to
                <span class="my-span"> Nemis </span>
              </p>
            </div>
            <div class="my-paragraph">
              <p>
                The National Education Management Information <br />
                System is a web-based data management solution <br />
                which collects data & Information from education <br />
                institutions, processes and reports status.
              </p>
            </div>
          </div>
          </div>
        </v-card>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1'],
      slides: ['First', 'Second', 'Third', 'Fourth'],
    }
  },
}
</script>

<style>
.v-carousel__controls {
  width: fit-content !important;
}
.welcome {
  position: absolute;
  width: 323px;
  height: 126px;
  left: 4rem;
  top: 52px;

  font-weight: 900;
  font-family: 'Nexa-Light', sans-serif;
  font-size: 64px;
  line-height: 63px;

  letter-spacing: 0.03em;
  color: #ffffff;
}
.my-paragraph {
  position: absolute;
  width: 386px;
  height: 68px;
  left: 4rem;
  top: 181px;
  font-weight: 400;
  font-family: 'Nexa-Light', sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
.heading {
  float: left;
  padding: auto;
  text-align: left;
}
.my-span {
  color: #0cc160;
  text-transform: uppercase;
  font-style: italic;
}
.mmg {
  /* opacity: 0.4; */
  background-color: rgba(0, 59, 149, 0.4);
;
}
.all {
  position: relative;
}
</style>