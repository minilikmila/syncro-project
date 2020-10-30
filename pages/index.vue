<template>
  <v-container>
    <!-- -->
  <v-layout class="general">
    <v-flex lg6 md6 sm6 class="white--text darken-3 mr-10">
     <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur qu
       is dolorum, architecto mollitia recusandae eum tempora illum, blan
       ditiis ipsum molestiae est obcaecati voluptatibus autem, unde quasi amet quidem culpa dignissimos.</p> -->
      <strong class="ml-12">services provided</strong>
         <v-divider class="white"></v-divider>
      <ul class="mt-8">
        <li>You can upload contacts picture. </li>
      </ul>
      <h3 class="mt-7 font-italic font-weight-light">If you need to login right now
        <nuxt-link to="/signin" class="warning--text darken-3">click here</nuxt-link> </h3>
      <h3 class="mt-8 font-italic font-weight-light">but if you haven't accout yet please
        <nuxt-link to="/signup" class="warning--text darken-3">Click here now</nuxt-link>
      </h3>
    </v-flex>
    <v-flex lg6 md6 sm6 class="white--text darken-3">
        <strong class="ml-12"> Read to get more informations </strong>
       <v-divider class="white"></v-divider>
       <ul class="mt-7">
         <li>This service provides 15GB for your contact registration</li>
         <li>If you have not an account yet you have to sign up and join the service</li>
         <li>Before you sign up please check you have an email address bcs its mandatory</li>
       </ul>
       <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qua
         m inventore explicabo necessitatibus distinctio s
         equi ullam officiis temporibus iste aliquid ex cum illo fugit eius dolorem quasi. Deserunt, ab culpa?</p> -->

    </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
  export default {
    layout: 'homelayout',
    data () {
      return {

      }
    },
  }
</script>
<style scoped>
.general{
  /* width: 1000px; */
    margin-top: 6%;
    opacity: 0.9;
}
.btnstyle{
  margin-left: 40%;
  margin-top: 20%;
}
</style>
