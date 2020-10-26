<template>
  <v-container>
   <v-layout wrap>
     <v-flex lg6 md6 sm6>
      <v-card flat width="100%"
              min-height="100%"
              class="historycard">
                  <!-- <v-card-title class="success--text darken-3">Register here</v-card-title> -->
            <v-carousel
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              continuous
              class="carousel"
             >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                    <div class="subtitle-1">

                      <!-- <h3 class="red--text">{{ slide }}</h3> -->
                        <v-img :src="slide"
                        > <v-card-title>Register here</v-card-title>
                         <p class="subtitle-1 ml-10 mt-12 font-italic wite--text darken-5"> {{ messages[i] }}</p>
                          </v-img>

                      </div>
                </v-carousel-item>
              </v-carousel>

        <v-card-text>
          <p class="title info--text"> We gonna show you how to create contacts.com account</p>
          <v-divider class="red"></v-divider>
          <div>
            <v-list>
              <v-list-item>
                <ul class="title info--text">
                  <li>If have account before and forget password use forget password</li>
                  <li>Please ! fill at least all of the mandatory fields </li>
                </ul>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>
      </v-card>
     </v-flex>
     <!-- The second side components contains form -->
     <v-flex lg6 md6 sm6>
       <v-card>
         <v-card-title class="grey lighten-2 justify-center info--text">
            <span>{{currentTitle}} </span>
            <!-- <v-avatar>

            </v-avatar> -->
         </v-card-title>
         <v-divider class="red mb-4"></v-divider>
            <v-form ref="form">
               <v-window v-model="step">
             <v-window-item :value="1">
             <v-card-text>
              <v-text-field label="First Name" outlined :rules="nameRule" v-model="accountData.F_name"></v-text-field>
              <v-text-field label="Last Name" outlined v-model="accountData.L_name"></v-text-field>
              <v-text-field label="Username" outlined v-model="accountData.username"></v-text-field>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="2">
             <v-card-text>
              <v-text-field label="E-mail" :rules="emailRule" outlined v-model="accountData.email"
                             @click="socialMedia = !socialMedia"></v-text-field>
                  <div v-show="socialMedia">

                    <v-text-field label="facebook" v-model="accountData.facebook"></v-text-field>
                    <v-text-field label="Instagram" v-model="accountData.Instagram"></v-text-field>
                    <v-text-field label="linkdIn" v-model="accountData.linkedin"></v-text-field>
                    <v-text-field label="twitter" v-model="accountData.twitter"></v-text-field>

                 </div>
                 <v-select
                    :items="items"
                    label="Country"
                    outlined
                    v-model="accountData.country"
                    hint="pick your country"
                  ></v-select>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="3">
              <v-card-text>
                <v-textarea
                      outlined
                      rows="3"
                      name="Bio-area"
                      label="Your Bio ( It's optional)"
                      v-model="accountData.bio"
                    ></v-textarea>
                 <v-text-field label="Password" outlined
                               v-model="accountData.password" @focus="passwordWarn= false"></v-text-field>
                <v-text-field label="Confirm Password" outlined
                              v-model="accountData.confirmPassword" @focus="passwordWarn= false"></v-text-field>
                 <v-checkbox
                  v-model="checkbox"
                  label="Do You agree the term and conditions?"
                  required>
              </v-checkbox>
              </v-card-text>
           </v-window-item>
           <v-window-item :value="4">
              <h3 class="title font-weight-light mb-2"> Welcome to Contacts.com websites</h3>
              <span class="caption grey-- text"> Thanks for Signing up !</span>
           </v-window-item>
           <p class="red--text font-italic ml-5"
              v-show="passwordWarn">The password doesn't match please try angain! </p>
         </v-window>
            </v-form>
         <v-divider class="mt-7"></v-divider>
         <v-card-actions>
           <v-btn :disabled="step==1" v-show="showbtn"
                   @click="step--"
                   class="mt-12">
              Back
           </v-btn>
              <v-btn class="warning mt-12" @click="resetForm" v-show="showbtn"> resetForm</v-btn>
              <v-btn class="success mt-12" @click="$router.push('/signin')" v-show="!showbtn">Not now</v-btn>
           <v-spacer />
              <v-btn class="info mt-12" :disabled="registerOn" v-show="showbtn"
                    @click="addUserAccount"> Register</v-btn>
                    <!-- Optional showbtn operates show or not buttons on the page -->
              <v-btn class="info mt-12" v-show="!showbtn"
                     @click="directLogin"> direct Login</v-btn>
           <v-btn :disabled="step ===3" v-show="showbtn"
                  @click="step++"
                  depressed
                  class="mt-12">
               Next
           </v-btn>
         </v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>
  </v-container>
</template>
<script>
import { apiservice } from "@/apiservice";
const api = new apiservice();

export default {
  layout: 'beforelogin',
  data(){
    return {
      socialMedia: false,
      step: 1,
      accountData: {
      F_name: '',
      L_name: '',
      email: '',
      country:'',
      bio: '',
      username: '',
      facebook: '',
      twitter: '',
      Instagram: '',
      linkedin: '',
      password: '',
      confirmPassword: '',
      },
      showbtn: true,
      passwordWarn: false,
      checkbox: false,
       items:['Ethiopia','Israel','China','USA', 'Kenya','S.Africa','Egypt','India','Switherland'],
       slides: [
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' ,
          'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' ,

        ],
        messages: [
          'If have account before and forget password use forget password',
          'Please ! fill at least all of the mandatory fields ',
        ],
      emailRule: [
        // v => !! || 'Email is required!'
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      nameRule: [
        v => !!v || 'Name ia required!'
      ]
    }
  },
  methods: {
    resetForm(){
      this.$refs.form.reset();
    },
    addUserAccount(){
      let data = {
         F_name: this.accountData.F_name,
         L_name: this.accountData.L_name,
         email: this.accountData.email,
         username: this.accountData.username,
         password: this.accountData.password,

      }
    let social = {
        social_media: {
          facebook: this.accountData.facebook,
          Instagram: this.accountData.Instagram,
          twitter: this.accountData.twitter,
          linkedin: this.accountData.linkedin
        }
      }
     if (this.accountData.password!='') {
       if(this.accountData.password == this.accountData.confirmPassword){
        // send to the server
          // collect the two object together
        let fullData = { ...data, ...social}
        console.log("signup testing mila-mina")
        // console.log(fullData);
        api.createAccount(fullData).then(response => {
          console.log("This is signup page")
          console.log(response);
          this.step = 4
          this.showbtn = false
        }).catch(err => {
          console.log(err);
        })
        // this.$router.push('/signin')
       }else {
         this.passwordWarn = true;
       }
     }

    },
    // Operates a direct login from the signup pages
    directLogin(){
      let userData = {
        username: this.accountData.username,
        password: this.accountData.password
      }
      // let loggedData = api.login(userData);
     api.login(userData).then(response => {
        console.log(response);
        this.$store.commit('setUserId', response.id);
        this.$store.commit('setUsername', response.username);
        this.$store.commit('setPassword', response.password)
        this.$store.commit('setEmail', response.email);
        this.$store.commit('setToken', response.token);
        this.$router.push('/dashboard');
     }).catch(err => console.log(err,"Error"));
    }
  },
  computed: {
    registerOn(){
      let x = true;
      if(this.accountData.F_name !='' && this.accountData.username !='' && this.checkbox &&
         this.accountData.email)
      {   return !x   }
      else
      return x
    },
    currentTitle(){
      switch(this.step){
          case 1: return 'Primary Information'
          case 2: return 'More about You'
          default: return 'account created'
      }
    }
  }
}
</script>
<style scoped>
.historycard{
  margin-left: -15%;
  width: 100%;
}
.carousel{
  margin-bottom: -20%;
}
</style>
