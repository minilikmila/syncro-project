<template>
  <v-container>
            <!-- <h2> Edit: {{ this.id }}</h2> -->
            <v-flex>
              <v-card>
                <!-- <v-card-title class="justify-center info--text grey lighten-2">Edit contact</v-card-title> -->
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200"
                        > <v-card-title class="white--text justify-center">
                          Now u try to edit <strong class="info--text">:  {{contactInfo.F_name}} {{contactInfo.L_name}}'s -
                          </strong> Info</v-card-title>
                         <v-avatar circle  width="10%"
                                  height="100px"
                          class="avatarsetting">
                         <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                </v-avatar>
                         <!-- <p class="subtitle-1 ml-10 mt-12 font-italic wite--text darken-5"></p> -->
                    </v-img>
                <v-divider class="red"></v-divider>
                <v-card-text>
                  <!-- <v-layout>
                    <v-text-field label="First Name" v-model="contactInfo.F_name" class="mr-5"></v-text-field>
                    <v-text-field label="Last Name" v-model="contactInfo.L_name" class="ml-5"></v-text-field>
                  </v-layout>
                   <v-layout>
                  <v-text-field label="Email" v-model="contactInfo.email" class="mr-5"></v-text-field>
                  <v-text-field label="Phone_no" v-model="contactInfo.Phone_no" class="ml-5"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                  <v-text-field label="Email" v-model="contactInfo.email" class="mr-5"></v-text-field>
                       <v-text-field label="facebook" class="mr-5" v-model="contactInfo.facebook"></v-text-field>
                       <v-text-field label="City" class="ml-5" v-model="contactInfo.city"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="twitter" class="mr-5" v-model="contactInfo.twitter"></v-text-field>
                       <v-text-field label="State" class="ml-5" v-model="contactInfo.state"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="Instagram" class="mr-5" v-model="contactInfo.Instagram"></v-text-field>
                       <v-text-field label="Street" class="ml-5" v-model="contactInfo.street" ></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="LnkdIn" class="mr-5" v-model="contactInfo.linkedin"></v-text-field>
                       <v-text-field label="ZipCode" class="ml-5" v-model="contactInfo.zip"></v-text-field>
                   </v-layout> -->
                   <v-layout wrap>
                    <div lg6 md6 sm6 class="ml-12">
                    <v-text-field label="First Name" v-model="contactInfo.F_name" class="mr-5"></v-text-field>
                    <v-text-field label="Email" v-model="contactInfo.email" class="mr-5"></v-text-field>
                    <v-text-field label="facebook" class="mr-5" v-model="contactInfo.facebook"></v-text-field>
                    <v-text-field label="twitter" class="mr-5" v-model="contactInfo.twitter"></v-text-field>
                    <v-text-field label="Instagram" class="mr-5" v-model="contactInfo.Instagram"></v-text-field>
                    <v-text-field label="LnkdIn" class="mr-5" v-model="contactInfo.linkedin"></v-text-field>

                    </div>
                    <div lg6 md6 sm6 class="secondDiv">
                       <v-text-field label="Last Name" v-model="contactInfo.L_name" class="ml-5"></v-text-field>
                       <v-text-field label="Phone_no" v-model="contactInfo.Phone_no" class="ml-5"></v-text-field>
                       <v-text-field label="City" class="ml-5" v-model="contactInfo.city"></v-text-field>
                       <v-text-field label="State" class="ml-5" v-model="contactInfo.state"></v-text-field>
                       <v-text-field label="Street" class="ml-5" v-model="contactInfo.street" ></v-text-field>
                       <v-text-field label="ZipCode" class="ml-5" v-model="contactInfo.zip"></v-text-field>

                    </div>
                    <div class="ml-12">
                      <v-text-field label="Pictures"></v-text-field>
                    </div>
                   </v-layout>
                </v-card-text>
                <v-card-actions class="ml-12">
                  <v-btn class="red--text" text outlined @click="$router.push('/dashboard')">
                     Cancel <v-icon>mdi-close-box-outline</v-icon></v-btn>
                  <v-btn class="success--text ml-8" text outlined @click="saveEditContact">
                     Save Changes <v-icon class="ml-3">mdi-content-save-all</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
  </v-container>
</template>
<script>
import { apiservice } from "@/apiservice";
const api = new apiservice();

export default {
  // head: {
  //  title: 'Edit-contact'
  // },
  name: "editcontact",
  props: {
      id: {
        type: String,
        required: true
      }
    } ,
  data(){
    return {
      // id: this.$route.params.id,
      contactInfo: {},
      social_address: {},
      address: {}
    }
  },
  methods: {
    saveEditContact(){
         let edited = {
           F_name: this.contactInfo.F_name,
           L_name: this.contactInfo.L_name,
           email: this.contactInfo.email,
           Phone_no: this.contactInfo.Phone_no,
           Instagram: this.contactInfo.Instagram,
           facebook: this.contactInfo.facebook,
           twitter: this.contactInfo.twitter,
           linkedin: this.contactInfo.linkedin,
           city: this.contactInfo.city,
           state: this.contactInfo.state,
           street: this.contactInfo.street,
           zip: this.contactInfo.zip
         }
         api.editContacts(this.id, edited).then(response => {
            console.log(response);
            this.$router.push('/dashboard')
         }).catch(err => console.log(err));

    },

     // get the editable contact data
     getContact(){
       api.getContactById(this.id).then(response => {
         console.log("contact information")
          console.log(response.data);
          this.contactInfo = response.data;
          // this.social_address = this.contactInfo.social_address
          // this.address = this.contactInfo.address;
          console.log("this is from contactInfo")
          console.log(this.contactInfo);
       }).catch(err => console.log(err));
     }
  },
  mounted(){
    this.getContact();
  }
}
</script>
<style scoped>
.avatarsetting{
  /* margin-top: 23%; */
  /* margin-bottom: -30%; */
  margin-left: 45%;
  opacity: 0.9;
}
.secondDiv{
  margin-left: 20%;
}

</style>
