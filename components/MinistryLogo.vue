<template>

<!-- Logo with slider -->

  <div class="d-flex flex-column justify-space-between align-center">
    <v-slider
      v-model="width"
      class="align-self-stretch"
      min="50"
      max="120"
      step="1"
    ></v-slider>

    <v-img :aspect-ratio="1 / 1" :width="width" src="/Arms.png"></v-img>

    <div class="subtitle white--text">REPUBLIC OF KENYA</div>
    <div class="edu white--text">MINISTRY OF EDUCATION</div>
  </div>
</template>
<script>
export default {
  data: () => ({
    width: 120,
  }),
}
</script>

<style>
.subtitle .edu {
  font-size: 12px;
  font-family: 'Nexa-Light', sans-serif;
}
.subtitle {
  font-weight: 400;
}
.edu {
  font-weight: 800;
}
</style>
