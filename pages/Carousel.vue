<template>
  <v-container class="">
    <v-flex>
      <v-carousel
    cycle
    height="700"
    hide-delimiter-background
    show-arrows-on-hover
    continuous
    width="1000"

  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
         <div class="display-3" fill-width>
            <v-img :src="slide"
             />
          </div>
    </v-carousel-item>
  </v-carousel>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
          'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
        ],
    }
  }
}
</script>
<style scoped>
.carousel{
  /* width: 1000px; */
}
.imglayout{
/* opacity: 0.5; */
}
</style>
