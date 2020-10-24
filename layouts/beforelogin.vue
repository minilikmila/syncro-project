<template>
  <v-app>
    <v-main>
      <v-container>
        <v-app-bar fixed
                    app>
           <v-toolbar-title class="info--text ml-12">Contact.com</v-toolbar-title>
           <div class="drawerstyle success--text">
             Thanks for choosing us!
           </div>
        </v-app-bar>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.drawerstyle{
  margin-left: 30%;
}
</style>
