<template>
  <v-app light class="style font">
    <v-app-bar fixed
                    app>
           <v-toolbar-title class="info--text ml-12">Contact.com</v-toolbar-title>
           <!-- <div class="drawerstyle success--text">
             Thanks for choosing us!
           </div> -->
           <v-spacer />
           <v-btn class="success--text mr-12"
                  outlined text @click="$router.push('/signin')"> Signin</v-btn>
        </v-app-bar>
      <v-content>
      <v-container>
         <!-- <v-app-bar
      fixed
      app>
      <div class="drawerstyle purple--text">
 This is contact recording web based application and thank you for choose us!
      </div>
    </v-app-bar> -->
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey">
       <div>
          <v-text-field label="email" class="" solo></v-text-field>
          <v-textarea label="commnet" rows="2" cols="90" class="" solo></v-textarea>
          <v-btn class="success" block> Submit </v-btn>
       </div>
        <v-spacer></v-spacer>
        <div class="social">
          <p class="red--text mr-12">Get connected with us on social networks!</p>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <!-- <p>Connect to us using one of the above ours social address </p> -->
        </div>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        {{ new Date().getFullYear() }} — <strong>contacts.com</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
    </v-app>
</template>
<script>
export default {
  data(){
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ]
    }
  }
}
</script>
<style  scoped>
.signinbtn{

}
.year{
  /* margin-top:      ; */
  margin-left: 43% ;
  /* margin-bottom: 20; */
}
.btn{
  width: 200px;
  height: 300px;
}
.style{
  background-image: url('~assets/image/wallper.png');
  background-size: cover;
  position: relative;
  /* opacity: 0.6; */
  /* margin: 20px; */
}
.footer{
  height: 200px;
}
.contactus{
  margin-left: 350px;
  margin-bottom: 20px;
}
.social{
  /* position: relative; */
  margin-right: 12%;
  margin-top: -4%;
}
</style>
