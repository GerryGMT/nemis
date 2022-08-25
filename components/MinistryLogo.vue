<template>
  <div class="d-flex flex-column justify-space-between align-center">
    <v-slider
      v-model="width"
      class="align-self-stretch"
      min="50"
      max="120"
      step="1"
      
    ></v-slider>

    <v-img :aspect-ratio="1/1" :width="width" src="/Arms.png"></v-img>

    <div class="subtitle">REPUBLIC OF KENYA</div>
    <div>MINISTRY OF EDUCATION</div>
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
.subtitle {
  font-size: 12px;
}
</style>
