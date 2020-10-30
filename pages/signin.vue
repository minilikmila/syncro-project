<template>
  <v-container>
    <v-card class="cardstyle" width="50%" @keyup.enter="signin">
      <v-card-title class="signin-title">
        <h2 class="primary--text ml-10 headerline">Sign In</h2>
      </v-card-title> <v-divider></v-divider>
      <!-- <hr> -->
      <v-card-text class="mt-10" ref="form">
        <v-form>
          <v-text-field label="Username"  @focus="warn= false" v-model="username" outlined
                        prepend-inner-icon="mdi-account"></v-text-field>
          <v-layout>
             <v-text-field label="Password" :type="type"  @focus="warn= false" v-model="password" outlined
                        prepend-inner-icon="mdi-key"  ></v-text-field>
                        <v-icon @click="showPassword" class="passEye info--text">{{eyeIcon}}</v-icon>
          </v-layout>
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
      <p class="">If You haven't account yet; please
      <nuxt-link to="/signup">Click here </nuxt-link>  </p>
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
       eyeIcon: 'mdi-eye',
       type: 'password',
      // accountInfo: {}
    }
  },
  methods: {
    // Show password or not
    showPassword(){
       if(this.type == 'password'){
         this.type = '';
         this.eyeIcon = 'mdi-eye-off';
       } else {
            this.type = 'password';
            this.eyeIcon= 'mdi-eye';
       }
    },
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
            this.$store.commit('setFull_name', response.F_name, response.L_name);
            this.$store.commit('setImageUrl', response.imageUrl);
            this.$store.commit('setSocial_media', response.social_media);
            this.$router.push('/dashboard/' + response.id + '?access_token='+ response.token);
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
.passEye{
  margin-left: -7%;
  margin-bottom: 4%;
}
</style>
