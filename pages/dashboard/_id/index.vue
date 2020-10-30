<template>
  <v-container class="background justify-center align-center">
   <section class="mb-10">
     <div>
          <h2 class="font-italic font-weight-light mt-10 ml-12 info--text text-lg-left" >
          Contact List . You have the following - {{howmuch}} - lists of contacts! mentioned below.</h2>

          <h3 class="font-weight-light font-italic primary--text btnlayout text-lg-right text-sm-right">
          To add new contacts click here
          <v-btn class="success--text" text @click="dialog = !dialog" outlined>New
          <v-icon class="ml-2">mdi-plus-circle-outline</v-icon></v-btn></h3>
     </div>
     <v-divider></v-divider>
      <!-- <v-btn class="success btnlayout">New <v-icon class="ml-2">mdi-plus-circle-outline</v-icon></v-btn> -->
   </section>
   <section>
     <!-- setting up search functionality.... -->
      <v-layout> <v-text-field placeholder="find by First name" outlined prepend-inner-icon="mdi-magnify-plus"
                               v-model="search" @keyup.enter="$router.push('/search/'+ search)"></v-text-field>
          <!-- <v-btn class="success--text searchbtn" text outlined :disabled="searchBtn"
                 @click="$router.push('/search/'+ search)">
                 <v-icon>mdi-magnify-plus</v-icon> search</v-btn> -->
                 </v-layout>
                 <!-- end up search setting -->
      <p class="title ml-12 red--text font-italic"
        v-show="emptyList">Welcome to our services! You have Empty Contact lists registered here!</p>
      <v-container v-for="(contact,index) in contactsInfo" :key="index">
       <v-hover v-slot:default="{hover}"
                close-delay="100"
                open-delay="">

          <v-card
                  class="mt-2"
                  :elevation="hover ? 12 : 2"
                  :class=" {'on-hover': hover}"
                   height="120px">
                  <v-card-title>
                  <!-- <h2>  {{contact.F_name}}</h2> -->
                  <!-- <v-layout wrap> -->
                  <v-flex class="align-left" shrink v-if="contact.imageUrl != ''">
                     <v-avatar class="" circle width="3%"
                            min-height="10%"
                            :size="$vuetify.breakpoint.smAndUp ? 40 : 30">
                      <v-img :src="'http://localhost:5000/api/containers/images/download/' + contact.imageUrl" />
                  </v-avatar>
                   </v-flex>
                  <!-- </v-layout> -->
                  </v-card-title>
          <v-card-text class="" link @click="$router.push('/detail/' + contact.id)">
              <v-layout>
                <div>
                 <h3 class="primary--text"><v-icon class="primary--text">mdi-account</v-icon>  {{contact.F_name}}</h3>
                 <h3 class="font-italic success--text"><v-icon class="success--text">mdi-email</v-icon> {{ contact.email }}</h3>
                </div>
                <div class="ml-10 mt-5">
                  <h3 class="info--text"> <v-icon class="primary--text mr-2">mdi-phone</v-icon>{{ contact.Phone_no }}</h3>
                </div>
                 <v-spacer />

              </v-layout>

          <!-- <v-spacer></v-spacer> -->
          <!-- <h3 align-right> {{ index }}</h3> -->
          </v-card-text>
          <v-card-actions>
              <!-- <v-layout>
              </v-layout> -->
              <v-spacer></v-spacer>
              <div class="btnsection">
                   <v-layout>
                      <div>
                      <v-btn @click="$router.push('/edit/'+ contact.id)"
                         text class="primary--text pa-5 px-7 mr-3" outlined>
                    <v-icon>mdi-pencil</v-icon> Edit</v-btn>
                    </div>
                    <div>
                  <v-btn text class="red--text pa-5" outlined @click="remove(index)">
                    <v-icon>mdi-delete</v-icon> Delete</v-btn>
                </div>
                   </v-layout>
              </div>
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
   <!-- Snackbar for the delete successfull pop up -->
   <div class="text-center ma-2 success">
     <v-snackbar v-model="deleteSnackbar" top color="success darken-1">
           <v-icon>mdi-checkbox-marked-circle</v-icon>
       {{ deleteConfirmation }}

       <v-btn
        color="red"
        text
        @click="deleteSnackbar = false"
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
              <v-icon>mdi-close-box</v-icon> </v-btn>
         </v-card-title>
         <v-divider class="red"></v-divider>
            <v-form ref="form">
               <v-window v-model="step">
             <v-window-item :value="1">
             <v-card-text>
              <v-text-field label="First Name" :rules="nameRule" v-model="addContactData.F_name"
                             prepend-inner-icon="mdi-account"></v-text-field>
              <v-text-field label="Last Name" v-model="addContactData.L_name"  prepend-inner-icon="mdi-account"></v-text-field>
               <v-text-field label="City" @click="addressField =!addressField"
                              v-model="addContactData.city" prepend-inner-icon="mdi-city"></v-text-field>
                <div v-show="addressField">
                <v-text-field label="State" v-model="addContactData.state"></v-text-field>
                <v-text-field label="Street" v-model="addContactData.street"></v-text-field>
                <v-text-field label="Zip code" v-model="addContactData.zip"></v-text-field>

             </div>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="2">
             <v-card-text>
               <v-layout>
                 <v-text-field label="Phone number" v-model="addContactData.Phone_no"
                              :rules="phoneRule" outlined prepend-inner-icon="mdi-phone"></v-text-field>
                 <v-file-input
                              placeholder="Upload contact's picture"
                              outlined
                              accept="image/*"
                              v-model="addContactData.image"
                              prepend-inner-icon="mdi-image-plus"></v-file-input>
               </v-layout>
              <v-text-field placeholder="E-mail" :rules="emailRule" v-model="addContactData.email"
                             @click="socialMedia = !socialMedia"
                              prepend-inner-icon="mdi-email-plus"></v-text-field>
                  <div v-show="socialMedia">

                    <v-text-field label="facebook" v-model="addContactData.facebook"
                                  prepend-inner-icon="mdi-facebook"></v-text-field>
                    <v-text-field label="Instagram" v-model="addContactData.Instagram" prepend-inner-icon="mdi-instagram"></v-text-field>
                    <v-text-field label="linkdIn" v-model="addContactData.linkedin" prepend-inner-icon="mdi-linkedin"></v-text-field>
                    <v-text-field label="twitter" v-model="addContactData.twitter" prepend-inner-icon="mdi-twitter"></v-text-field>

                 </div>
                <!-- <v-text-area></v-text-area> -->
             </v-card-text>
           </v-window-item>
           <!-- <v-window-item :value="3">
              <h3 class="title font-weight-light mb-2"> your contact:
              <span class="Success--text">{{ F_name }}</span> is successfull added </h3>
              <span class="caption grey-- text"> Good Luck!</span>
           </v-window-item> -->
         </v-window>
            </v-form>
         <v-divider></v-divider>
         <v-card-actions>
           <v-btn :disabled="step==1"
                   @click="step--"
                   text outlined
                   class="primary--text">
                   <v-icon>mdi-chevron-left</v-icon>
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
               <v-icon>mdi-chevron-right</v-icon>
           </v-btn>
         </v-card-actions>

       </v-card>

   </v-dialog>
  </v-container>
</template>
<script>
import {apiservice} from '@/apiservice';
const api = new apiservice();

export default {
   head: {
   title: 'User-dash'
  },
  data(){
    return {
      // showbackBtn: false,
      addContactData: {
          Phone_no: '',
          F_name: '',
          L_name: '',
          city: '',
          street: '',
          state: '',
          Instagram: '',
          facebook: '',
          linkedin: '',
          twitter: '',
          email: '',
          zip: '',
          image:[],
      },
      // id: this.$route.params.id,
      search: '',
      step: 1,
      snackbartext: 'you successfully add new contact',
      snackbar: false,
      deleteSnackbar: false,
      deleteConfirmation: 'You successfully delete the contact',
      contactsInfo: [],
      emptyList: false,
      dialog: false,
      addressField: false,
      socialMedia: false,
      howmuch: '',
      // Validation rule of vue
      emailRule: [
        // v => !! || 'Email is required!'
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      nameRule: [
        v => !!v || 'Name ia required!'
      ],
      phoneRule: [
        v => !!v || 'Phone no_ is required!'
      ]
         }

      },

      methods: {
        addContact(){
          // this.showbackBtn = true
          // this.step ++
          let newContact = {
          Phone_no: this.addContactData.Phone_no,
          F_name: this.addContactData.F_name,
          L_name: this.addContactData.L_name,
          city: this.addContactData.city,
          street: this.addContactData.street,
          state: this.addContactData.state,
          Instagram: this.addContactData.Instagram,
          facebook: this.addContactData.facebook,
          linkedin: this.addContactData.linkedin,
          twitter: this.addContactData.twitter,
          email: this.addContactData.email,
          zip: this.addContactData.zip,
          useraccountsId: this.$store.getters.userId,
          imageUrl: this.addContactData.image.name
          }
          this.$store.dispatch('addContacts', newContact).then(response => {
               console.log('From dashboard dispatching area');
               console.log(response);
               this.contactsInfo.push(response);
                this.snackbar = true
                this.emptyList = false
                // this.dialog = false
                this.step = 1;
              /// Upload contact picture
               if(this.addContactData.image != 0){
                      console.log("Image is alive!");
                      // this.addContactData.image.name = this.addContactData.image.name + new Date();
                      console.log(this.addContactData.image.name);
                      // send it(image) to the local storage
                      api.uploadImage(this.addContactData.image).then(response => {
                      console.log(response);
                      });
                    }
                    // else {
                    //   console.log("Empty image file store")
                    // }
          }).catch(err => console.log(err));

        },
        // Romove/delete contacts from user account
        remove(index){
              console.log(this.contactsInfo[index].id);
              let name = this.contactsInfo[index].F_name;
              let promise = window.confirm('Are You sure wanna delete' + name + '?')
              if(promise){
                api.deleteContact(this.contactsInfo[index].id).then(response => {
                  console.log(response);
                  this.deleteSnackbar = true;
                  this.contactsInfo.splice(index,1);
                  // this.$router.push('/dashboard')
                  if(this.contactsInfo.length <= 0){
                    this.emptyList = true;
                  }
                 }).catch(err => console.log(err));
              }
        },
        // searchContact(){
        //   if(this.search != ''){
        //     this.$router.push('/search', this.$emit( this.search));

        //   }
        // },

        getContactData() {
            api.getContact(this.$store.getters.userId).then( response => {
              console.log(response.data);
              this.contactsInfo = response.data
              console.log('contactInfo')
              console.log(this.contactsInfo)
              this.howmuch = this.contactsInfo.length;
              if(this.contactsInfo.length <= 0){
                this.emptyList = true;
                }
              // dispatching to the local storage called vuex - state management
              this.$store.commit('addContacts', response.data);
            }).catch( err => console.log(err, "Error is happened!"))
        }
      },
       mounted(){
        this.getContactData();
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
        if(this.addContactData.F_name != '' && this.addContactData.Phone_no != '' && this.step === 2)
        {
          return !x
        }
        else
        return x
      },
    searchBtn(){
      let x = true;
      if(this.search != ''){
        return !x;
      } else {
        return x;
      }
    }
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
   margin-top: -17%;
}
.avatarlayout{
  /* margin-bottom: 5%; */
  margin-left: 35%;
}
.searchbtn{
  height: 180px;
  margin-left: -12%;
  margin-top: 1%;
}
</style>
