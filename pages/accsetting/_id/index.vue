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
                         <v-avatar circle  width="12%"
                                  height="93px"
                          class="avatarsetting">
                         <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                    </v-avatar>
                    <v-list-item-content class="ml-4 itemContent">
                      <v-list-item-title class="title info--text">{{$store.getters.username}}</v-list-item-title>
                      <v-list-item-subtitle class="font-italic white--text">{{$store.getters.email}}</v-list-item-subtitle>
                    </v-list-item-content>
              </v-img>
              <v-card-text>
                <v-layout wrap>
                   <div lg6 md6 sm6 class="ml-12">
                     <v-text-field label="First name" v-model="accountInfo.F_name"></v-text-field>
                     <v-text-field label="Last name" v-model="accountInfo.L_name"></v-text-field>
                     <v-text-field label="Email" v-model="accountInfo.email"></v-text-field>
                     <v-text-field label="Username" v-model="accountInfo.username"></v-text-field>
                     <v-text-field label="Country" v-model="accountInfo.country"></v-text-field>
                   </div>
                   <div lg6 md6 sm6 class="socialDiv">
                     <v-text-field label="facebook" v-model="social_address.facebook"></v-text-field>
                     <v-text-field label="Instagram" v-model="social_address.Instagram"></v-text-field>
                     <v-text-field label="twitter" v-model="social_address.twitter"></v-text-field>
                     <v-text-field label="Linkenin" v-model="social_address.linkedin"></v-text-field>

                   </div>
                </v-layout>
              </v-card-text>
              <v-card-actions class="ml-10">
                <v-btn class="red white--text" @click="$router.push('/dashboard')">cancel</v-btn>
                <v-btn class="success" @click="saveChange"> Save Changes</v-btn>
              </v-card-actions>
       </v-card>

      </v-flex>
      <v-flex d-flex lg4 md4 sm4>
        <v-card>
          <v-card-title class="info--text">
            Advanced Option (Settings)
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-7">
            <div>
              <p class="subtitle-1 red--text">If you want to change your existing password ?</p>
              <v-btn class="success" @click="passDialog = true">change Password</v-btn>
            </div>
            <div class="mt-4">
              <p class="subtitle-1 info--text"> If you want to delete your account and leave away ?</p>
              <v-btn class="red white--text" @click="deleteAcc =true"> Delete Account</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
     <!-- password changing dialog -->
       <v-dialog v-model="passDialog" width="40%" persistent>
             <v-card>
               <v-card-title class="info white--text text-center justify-center">Change Your password</v-card-title>
               <v-card-text class="mt-5">
                 <v-text-field label="Current password"  v-model="currentPassword" @focus="warn = false"></v-text-field>
                 <v-text-field label="New password"  v-model="Newpassword" @focus="valid= false"></v-text-field>
                 <v-text-field label="Confirm password"  v-model="confirmPassword" @focus="valid =false"></v-text-field>
                 <p class="ml-5 font-italic red--text" v-show="warn">Enter your current password correctly !</p>
                 <p class="ml-5 font-italic red--text" v-show="valid">Please confirm your password !</p>

               </v-card-text>
               <v-card-actions>
                 <v-btn class="red white--text" @click="passDialog = false">Cancel</v-btn>
                 <v-btn class="success" @click="changePassword">Change password</v-btn>
               </v-card-actions>
             </v-card>
       </v-dialog>
       <!-- Delete account dialog -->
       <v-dialog v-model="deleteAcc" width="40%" persistent>
         <v-card>
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
  data(){
    return {
      id: this.$route.params.id,
      passDialog: false,
      deleteAcc:false,
      accountInfo: {},
      social_address: {},
      currentPassword: '',
      Newpassword: '',
      confirmPassword: '',
      warn: false,
      valid: false,
      passToDelete: '',
      confirmDelete: false,
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

       }
       let social = {
         social_media: {
             facebook: this.social_address.facebook,
             Instagram: this.social_address.Instagram,
             linkedin: this.social_address.linkedin,
             twitter: this.social_address.twitter
         }
       }
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
            this.$router.push('/dashboard')
       }).catch(err => console.log(err));
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
