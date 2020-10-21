<template>
  <v-container class="background justify-center align-center">
   <section class="mb-10">
     <div>
          <h2 class="font-italic font-weight-light mt-10 ml-12 info--text text-lg-left" >
          Contact List . You have the following lists of contacts !</h2>

          <h3 class="font-weight-light font-italic primary--text btnlayout text-lg-right text-sm-right">
          To add new contacts click here
          <v-btn class="success--text" text @click="dialog = !dialog">New
          <v-icon class="ml-2">mdi-plus-circle-outline</v-icon></v-btn></h3>
     </div>
     <v-divider></v-divider>

      <!-- <v-btn class="success btnlayout">New <v-icon class="ml-2">mdi-plus-circle-outline</v-icon></v-btn> -->
   </section>
   <section>
      <v-container v-for="(contact,index) in contactsInfo" :key="index">
       <v-hover v-slot:default="{hover}"
                close-delay="100"
                open-delay="">

          <v-card @click="$router.push('/detail/' + contact.id)"
                  class="mt-2"
                  :elevation="hover ? 12 : 2"
                  :class=" {'on-hover': hover}"
                   height="120px">
                  <v-card-title>
                  <!-- <h2>  {{contact.F_name}}</h2> -->
                  <!-- <v-layout wrap> -->
                  <v-flex class="align-left" shrink>
                     <v-avatar class="" circle width="3%"
                            min-height="10%"
                            :size="$vuetify.breakpoint.smAndUp ? 40 : 30">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />
                  </v-avatar>
                   </v-flex>
                  <!-- </v-layout> -->
                  </v-card-title>
          <v-card-text class="">
              <v-layout>
                <div>
                 <h3 class="primary--text">  {{contact.F_name}}</h3>
                 <h3 class="font-italic"> {{ contact.email }}</h3>
                </div>
                <div class="ml-10 mt-5">
                  <h3>{{ contact.Phone_no }}</h3>
                </div>
                 <v-spacer />
                 <div class="btnsection">
                   <v-layout>
                      <div>
                      <v-btn @click="$router.push('/edit/'+ contact.id)"
                         text class="primary--text pa-5 px-7 mr-3" outlined>
                    <v-icon>mdi-pencil</v-icon> Edit</v-btn>
                    </div>
                    <div>
                  <v-btn text class="red--text pa-5" outlined>
                    <v-icon>mdi-delete</v-icon> Delete</v-btn>
                </div>
                   </v-layout>
                 </div>

              </v-layout>

          <!-- <v-spacer></v-spacer> -->
          <!-- <h3 align-right> {{ index }}</h3> -->
          </v-card-text>
          <v-card-actions>
              <!-- <v-layout>
              </v-layout> -->
          </v-card-actions>
        </v-card>
       </v-hover>
    </v-container>

    <!-- Snackbar preparation -->
   <div class="text-center ma-2 success">
     <v-snackbar v-model="snackbar" top color="blue-grey lighten-1">
           <v-icon>mdi-checkbox-marked-circle</v-icon>
       {{ snackbartext }}

       <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Close </v-btn>
     </v-snackbar>
   </div>
   </section>

   <!-- Dialogue setting -->
   <v-dialog v-model="dialog"
             width="50%"
             persistent
             class="justify-center align-center">
               <v-card>
           <v-card-title  class="title info--text grey lighten-2 justify-center align-center">
            <span>{{currentTitle}} </span>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = !dialog" text class="red--text" >
              <v-icon>mdi-close-circle-outline</v-icon> </v-btn>
         </v-card-title>
         <v-divider class="red"></v-divider>
            <v-form ref="form">
               <v-window v-model="step">
             <v-window-item :value="1">
             <v-card-text>
              <v-text-field label="First Name"  :rules="nameRule" v-model="F_name"></v-text-field>
              <v-text-field label="Last Name" v-model="L_name"></v-text-field>
               <v-text-field label="City" @click="addressField =!addressField"></v-text-field>
                <div v-show="addressField">
                <v-text-field label="State"></v-text-field>
                <v-text-field label="Street"></v-text-field>
                <v-text-field label="Zip code"></v-text-field>

             </div>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="2">
             <v-card-text>
               <v-text-field label="Phone number" v-model="Phone_no"></v-text-field>
              <v-text-field label="E-mail" :rules="emailRule"
                             @click="socialMedia = !socialMedia"></v-text-field>
                  <div v-show="socialMedia">

                    <v-text-field label="facebook"></v-text-field>
                    <v-text-field label="Instagram"></v-text-field>
                    <v-text-field label="linkdIn"></v-text-field>
                    <v-text-field label="twitter"></v-text-field>

                 </div>
                <v-text-area></v-text-area>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="3">
              <h3 class="title font-weight-light mb-2"> your contact:
              <span class="Success--text">{{ F_name }}</span> is successfull added </h3>
              <span class="caption grey-- text"> Good Luck!</span>
           </v-window-item>
         </v-window>
            </v-form>
         <v-divider></v-divider>
         <v-card-actions>
           <v-btn :disabled="step==1"
                   @click="step--"
                   text outlined
                   class="primary--text">
              Back
           </v-btn>
         <!-- <v-btn @click="dialog = !dialog" class="red" >Cancel </v-btn> -->
           <v-spacer />
           <v-btn class="success white--text mr-12" rounded
                    text outlined
                   :disabled="addBtn" @click="addContact">
             Add
             <v-icon>mdi-plus-circle-outline </v-icon>
           </v-btn>
           <v-btn :disabled="step ===2"
                  @click="step++"
                  depressed text outlined
                  class="primary--text">
               Next
           </v-btn>
         </v-card-actions>

       </v-card>
     <!-- <v-card>
       <v-card-title class="title info--text justify-center align-center">
         New Contacts
       </v-card-title>
       <v-card-text>
         <v-text-field label="First name"></v-text-field>
         <v-text-field label="Last name"></v-text-field>
         <v-text-field label="Email" @click="socialMedia = !socialMedia"></v-text-field>
         <div v-show="socialMedia">
           <v-layout wrap>
             <div lg6 md6 sm6 class="mr-12">
                    <v-text-field label="facebook"></v-text-field>
                    <v-text-field label="Instagram"></v-text-field>
             </div>

             <div lg6 md6 sm6 >
                    <v-text-field label="linkdIn"></v-text-field>
                    <v-text-field label="twitter"></v-text-field>
             </div>
           </v-layout>
         </div>

         <v-text-field label="City" @click="addressField =!addressField"></v-text-field>
         <div v-show="addressField">
         <v-text-field label="State"></v-text-field>
         <v-text-field label="Street"></v-text-field>
         <v-text-field label="Zip code"></v-text-field>

         </div>
         <v-text-field label="Phone number"></v-text-field>

       </v-card-text>
       <v-card-actions>
         <v-btn @click="dialog = !dialog" class="red" >Cancel </v-btn>
       </v-card-actions>
     </v-card> -->
   </v-dialog>
  </v-container>
</template>
<script>

import {apiservice} from '../apiservice';
const api = new apiservice();
export default {
   head: {
   title: 'User-dash'
  },
  data(){
    return {
      // showbackBtn: false,
      Phone_no: '',
      F_name: '',
      L_name: '',
      step: 1,
      snackbartext: 'you successfully add new contact',
      snackbar: false,
      id: "5f8ae77123c21e05cc0f5e4e",
      contactsInfo: [],
      dialog: false,
      addressField: false,
      socialMedia: false,
      // Validation rule of vue
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
        addContact(){
          // this.showbackBtn = true
          // this.step ++
          this.snackbar = true
          // this.dialog = false
          this.step = 1
        },
        detailInfo(){
           this.$router.push('/detailInfo')
        },
        editContact(){
          this.$router.push('/signin')
        },
        getContactData() {
            api.getContact(this.id).then( response => {
              console.log(response.data);
              this.contactsInfo = response.data
              console.log('contactInfo')
              console.log(this.contactsInfo)
            }).catch( err => console.log(err, "Error is happened!"));
        }
      },
      computed: {
        currentTitle(){
        switch(this.step){
          case 1: return 'Primary Information'
          case 2: return 'More about Contacts'
          default: return 'account created'
      }
    },
    addBtn(){
        let x = true
        if(this.F_name != '' && this.L_name != '' && this.step === 2)
        {
          return !x
        }
        else
        return x
      }
      },
      mounted(){
        this.getContactData();
      }
}
</script>
<style scoped>
.background{
  /* background-color: gray; */
  /* background-image: url('../assets/image/test.jpg'); */
}
.v-card{
  transition: opacity .4s ease-in-out;
}
.v-card:not(.on-hover){

}
.btnlayout{
  /* margin-left: 65%; */
  margin-top: 0%;
  margin-bottom: 1%;
}
.contact-card-text{
  /* margin-left: 7%; */
  margin-top: -60px;
}
.btnsection{
   /* margin-left: -20px; */
}
.avatarlayout{
  /* margin-bottom: 5%; */
  margin-left: 35%;
}
</style>
