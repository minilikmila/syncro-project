<template>
  <v-container>
    <v-card class="cardstyle" width="50%">
      <v-card-title class="signin-title">
        <h2 class="primary--text ml-10 headerline">Sign In</h2>
      </v-card-title>
      <!-- <hr> -->
      <v-card-text class="mt-10">
        <v-form>
          <v-text-field label="Username"  @focus="warn= false" v-model="username"></v-text-field>
          <v-text-field label="Password" type="password"  @focus="warn= false" v-model="password" ></v-text-field>
           <p class="subtitle-1 red--text font-italic"
              v-show="warn">U use incorrect password or username please try again correctly!</p>
        </v-form>
      </v-card-text>
      <v-card-actions class="mt-10">
        <v-btn class="success ml-5" @click="signin"
               >
              Sign in
            <v-icon class="ml-3">mdi-account-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
     </v-card>
     <div class="signupbtn mt-5">
      <p class="">If You haven't account yet; u can register here
      <v-btn text class="primary--text" @click="$router.push('/signup')">signUp</v-btn></p>
     </div>
  </v-container>
</template>
<script>
import { apiservice } from "../apiservice";
const api = new apiservice();
export default {
  layout:'beforelogin',
  data(){
    return {
      username: '',
      password: '',
      warn: false,
      // accountInfo: {}
    }
  },
  methods: {
    // signin request!!
       signin(){

         let data = {
           username: this.username,
           password: this.password
         }
        api.login(data).then(response => {
          console.log("From singin page")
             console.log(response);
             console.log(response.email)
            //  console.log(this.accountInfo)
            if(response){
            this.$store.commit('setUserId',response.id);
            this.$store.commit('setPassword', response.password);
            this.$store.commit('setUsername', response.username);
            this.$store.commit('setToken', response.token);
            this.$store.commit('setEmail', response.email);
            this.$store.commit('setFull_name', response.F_name, response.L_name)
            this.$store.commit('setSocial_media', response.social_media);
            this.$router.push('/dashboard');
            //  console.log("from social testing")
            //  console.log(this.$store.getters.social_media);
            }
            else {
              this.warn = true
            }

        }).catch(err => {
          this.warn = true;
          // console.log(err);

          });
       }
  },
  mounted(){
    // console.log(this.$store.getters.id)

  }
}
</script>
<style scoped>
.cardstyle{
  margin-top: 16%;
  margin-left: 40%;
}
.signin-title{
  margin-left: 30%;
}
.signupbtn{
  margin-left: 55%;
}
</style>
