<template>
  <v-container>
    <!-- <h2>UR Account Setting takes place here! UR ID : - - {{ $route.params.id }}</h2> -->
    <v-layout wrap>
      <v-flex d-flex lg8 md8 sm8>
       <v-card width="100%">
             <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="180"
                        > <v-card-title class="white--text justify-center">
                          {{$store.getters.username}}</v-card-title>
                         <v-avatar circle  width="12%" v-if="$store.getters.imageUrl !=''"
                                  height="93px"
                          class="avatarsetting">
                         <v-img :src="'http://localhost:5000/api/containers/images/download/'+ $store.getters.imageUrl" />
                    </v-avatar>
                    <v-list-item-content class="ml-4 itemContent">
                      <v-list-item-title class="title info--text">{{$store.getters.username}}</v-list-item-title>
                      <v-list-item-subtitle class="font-italic white--text">{{$store.getters.email}}</v-list-item-subtitle>
                    </v-list-item-content>
              </v-img>
              <v-card-text>
                <v-layout wrap>
                   <div d-flex lg6 md6 sm6 class="ml-8">
                     <v-text-field label="First name" v-model="accountInfo.F_name" solo></v-text-field>
                     <v-text-field label="Last name" v-model="accountInfo.L_name" solo></v-text-field>
                     <v-text-field label="Email" v-model="accountInfo.email" solo :rules="emailRule" @focus="unique=false"></v-text-field>
                     <v-text-field label="Username" v-model="accountInfo.username"  @focus="unique=false" solo
                                   hint="username must have at least 3 any chars"></v-text-field>
                     <v-text-field label="Country" v-model="accountInfo.country" solo></v-text-field>
                   </div>
                   <div d-flex lg6 md6 sm6 class="socialDiv">
                     <v-text-field label="facebook" v-model="social_address.facebook" solo></v-text-field>
                     <v-text-field label="Instagram" v-model="social_address.Instagram" solo></v-text-field>
                     <v-text-field label="twitter" v-model="social_address.twitter" solo></v-text-field>
                     <v-text-field label="Linkenin" v-model="social_address.linkedin" solo></v-text-field>
                     <v-file-input placeholder="profile Pic"
                                   solo
                                   hint="Change ur profile picture"
                                   accept='images/*'
                                   v-model="image"></v-file-input>

                   </div>
                </v-layout>
                 <p class="red--text font-italic ml-5" v-show="unique">
                username is already taken try other name or check your email please? </p>
              </v-card-text>
              <v-card-actions class="ml-10">
                <v-btn class="red white--text mr-4" @click="$router.push('/dashboard/'+ $store.getters.userId)">
                       <v-icon class="mr-2">mdi-close-box-outline</v-icon> cancel</v-btn>
                <v-btn class="success" @click="saveChange" :disabled="saveBtn"><v-icon class="mr-3">mdi-content-save-all</v-icon>
                       Save Changes</v-btn>
              </v-card-actions>
       </v-card>

      </v-flex>
      <v-flex d-flex lg4 md4 sm4>
        <v-card class="ml-1">
          <v-card-title class="info--text">
            Advanced Options (Settings)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-7">
            <div>
              <p class="subtitle-1 info--text">If you want to change your existing password ?</p>
              <v-btn class="success" @click="passDialog = true">change Password</v-btn>
            </div>
            <div class="mt-4">
              <p class="subtitle-1 red--text"> If you want to delete your account and leave away ?</p>
              <v-btn class="red white--text" @click="deleteAcc =true"> Delete Account</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- setting snackbar for popup when users delete their accounts -->
    <!-- <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" top color="success lighten-1">
         <v-icon>mdi-checkbox-marked-circle</v-icon>
         {{snacktext}}

      </v-snackbar>
    </div> -->
     <!-- password changing dialog -->
       <v-dialog v-model="passDialog" width="40%" persistent>
             <v-card @keyup.enter="changePassword">
               <v-card-title class="info white--text text-center justify-center">Change Your password</v-card-title>
               <v-card-text class="mt-5">
                 <v-text-field label="Current password"  v-model="currentPassword"
                               @focus="warn = false"></v-text-field>
                 <v-text-field label="New password"  v-model="Newpassword"
                               @focus="valid= false" :rules="passRule"></v-text-field>
                 <v-text-field label="Confirm password"  v-model="confirmPassword" @focus="valid =false"></v-text-field>
                 <p class="ml-5 font-italic red--text" v-show="warn">Enter your current password correctly !</p>
                 <p class="ml-5 font-italic red--text" v-show="valid">Please confirm your password !</p>

               </v-card-text>
               <v-card-actions>
                 <v-btn class="red white--text" @click="passDialog = false">Cancel</v-btn>
                 <v-btn class="success" @click="changePassword" :disabled="passBtn">Change password</v-btn>
               </v-card-actions>
             </v-card>
       </v-dialog>
       <!-- Delete account dialog -->
       <v-dialog v-model="deleteAcc" width="40%" persistent>
         <v-card @keyup.enter="deleteAccount">
           <v-card-text class=" title red white--text justify-center text-center">
                        Delete Your account and leave contact.com service!</v-card-text>
              <v-card-text>
                <p class="subtitle-1 font-italic info--text mt-5">Please enter your password to confirm your action?</p>
                <v-text-field label="Password" v-model="passToDelete" outlined
                               @focus="confirmDelete = false"></v-text-field>
                <p class="subtitle-1 red--text font-italic" v-show="confirmDelete">
                               Please enter your current password to corfirm ur trigger?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn class="red white--text" @click="deleteAcc = false">Cancel</v-btn>
                <v-btn class="red white--text" @click="deleteAccount">Delete Account</v-btn>
              </v-card-actions>
         </v-card>
       </v-dialog>
  </v-container>
</template>
<script>
import { apiservice } from "@/apiservice";
const api = new apiservice();
export default {
  props: {
     id: {
       type: String,
     }
  },
  data(){
    return {
      // snackbar: false,
      // snacktext: 'Successfully remove your account!',
      passDialog: false,
      deleteAcc:false,
      unique: false,
      accountInfo: {},
      social_address: {},
      currentPassword: '',
      Newpassword: '',
      confirmPassword: '',
      warn: false,
      valid: false,
      passToDelete: '',
      confirmDelete: false,
      image: [],
      // validation rules
       nameRule: [
        // v => v.length > 3 || 'username must have at least any 2 char',
        // v => !!v || 'username is required! and Must have at least 3 any chars!',
           ],
      emailRule: [
        v => !!v || 'Email is required!',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passRule: [
        v => v.length > 5 || 'Password must have at least any 5 char'
      ],

    }
  },
  methods: {
    // save ordinal changes except passwords
    saveChange(){

       let data = {
           F_name: this.accountInfo.F_name,
           L_name: this.accountInfo.L_name,
           email: this.accountInfo.email,
           username: this.accountInfo.username,
           country: this.accountInfo.country,
           imageUrl: typeof this.image.name === 'undefined'? this.accountInfo.imageUrl: this.image.name
       }
       let social = {
         social_media: {
             facebook: this.social_address.facebook,
             Instagram: this.social_address.Instagram,
             linkedin: this.social_address.linkedin,
             twitter: this.social_address.twitter
         }
       }
      //  if(this.image.length!=0){
      //    let credential = {...data, ...social, imageUrl: this.image.name}
      //  }
      //  else
      //  {
      //  let credential = {...data, ...social}
      //  }
      let credential = {...data, ...social}
       console.log(credential);
       api.updateAccount(this.$store.getters.userId, credential).then(response => {
         console.log("from acc setting")
        //  console.log(response.social_media)
            this.$store.commit('setUsername', response.username);
            this.$store.commit('setToken', response.token);
            this.$store.commit('setEmail', response.email);
            this.$store.commit('setFull_name', response.F_name, response.L_name)
            this.$store.commit('setSocial_media', response.social_media);
            if(this.image.length!= 0 ){
              console.log("Image Uploaded");
              api.uploadImage(this.image);
              this.$store.commit('setImageUrl', this.image.name);
            }
            this.$router.push('/dashboard/'+ this.$store.getters.userId);
       }).catch(err => {
         this.unique = true;
         console.log(err);
       });
    },
     // Changing password
     changePassword(){
       console.log(this.$store.getters.password);
        let data = {
                  password: this.Newpassword
                  }
         if(this.currentPassword == this.$store.getters.password){
              if(this.Newpassword == this.confirmPassword){

                 api.updateAccount(this.$store.getters.userId, data).then(response => {
                   console.log("Altering password!");
                   console.log(response);
                   this.passDialog = false
                 }).catch(err=> console.log(err))
              }else{
                this.valid = true
              }
         }else {
           this.warn = true
         }

     },
     //Delete Your account permanently
     deleteAccount(){
       if(this.passToDelete == this.$store.getters.password){

          api.deleteAllContacts(this.$store.getters.userId).then(response => {
              console.log("Confirmed!");
              console.log(response);
              api.deleteYourAccount(this.$store.getters.userId).then(response => {
                console.log("Account deleted !");
                // console.log(response);
                this.deleteAcc = false;
                // this.snackbar = true;
                this.$router.push('/signin');
              });
          });

       } else {
         this.confirmDelete = true;
       }
     },

    // get Accounts Information
    getAccountData(){
      api.getAccountInfo(this.$store.getters.userId).then(response => {
        console.log("Account Information")
        console.log(response.data);
        this.accountInfo = response.data
        this.social_address = response.data.social_media
        console.log(this.social_address)
      }).catch(err => console.log(err));
    }
  },
  computed: {
    saveBtn(){
      let x = true;
      if(this.accountInfo.username !='' && this.accountInfo.email !=''){
        return !x;
      }
      else{
        return x;
      }
    },
    passBtn(){
      let x = true;
      if(this.Newpassword.length > 5){
        return !x;
      } else {
        return x;
      }
    }
  },
  mounted(){
    this.getAccountData();
  }
}
</script>
<style scoped>
.avatarsetting{
  margin-left: 43%;
}
.socialDiv{
  margin-left: 25%;
}
.itemContent{
  margin-top: -7%;
}
</style>
