<template>
  <v-container>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="carlayout"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-layout
          align-center
          fill-height
          justify-center
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-layout>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-flex>
    This is for the long period
  </v-flex>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>
<style scoped>
.carlayout{
  /* width: 1000px; */
}
</style>
