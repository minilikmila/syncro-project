<template>
  <v-container>
           <h3 class="text-center info--text font-italic font-weight-light mb-2">Edit your contacts here </h3>
           <!-- <v-divider></v-divider> -->
           <v-layout wrap>
             <v-flex d-flex lg4 md4 sm6>
               <v-card width="100%" height="100%" flat >
              <v-img :src="'http://localhost:5000/api/containers/images/download/'+contactInfo.imageUrl"
               height="100%" />
                 </v-card>
             </v-flex>
              <v-flex lg8 md8 sm8>
          <v-card class="cardlayout">
            <!-- <v-card-title class="justify-center info--text grey lighten-2">Edit contact</v-card-title> -->
                <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200"
                    > <v-card-title class="white--text justify-center">
                      Now u try to edit <strong class="info--text">:  {{contactInfo.F_name}} {{contactInfo.L_name}}'s -
                      </strong> Info</v-card-title>
                      <v-avatar circle  width="10%" v-if="contactInfo.imageUrl !=''"
                              height="100px"
                      class="avatarsetting">
                      <v-img :src="'http://localhost:5000/api/containers/images/download/'+ contactInfo.imageUrl" />
            </v-avatar>
                </v-img> -->
            <!-- <v-divider class="red"></v-divider> -->
            <v-card-text>
                <v-layout wrap>
                <div lg6 md6 sm6 class="ml-12 ">
                <v-text-field label="First Name" v-model="contactInfo.F_name" class="mr-5" solo
                              :rules="nameRule" prepend-inner-icon="mdi-account"></v-text-field>
                <v-text-field label="Email" v-model="contactInfo.email" class="mr-5" solo
                              :rules="emailRule" prepend-inner-icon="mdi-email"></v-text-field>
                <v-text-field label="facebook" class="mr-5" v-model="contactInfo.facebook" solo prepend-inner-icon="mdi-facebook"></v-text-field>
                <v-text-field label="twitter" class="mr-5" v-model="contactInfo.twitter" solo prepend-inner-icon="mdi-twitter"></v-text-field>
                <v-text-field label="Instagram" class="mr-5" v-model="contactInfo.Instagram" solo prepend-inner-icon="mdi-instagram"></v-text-field>
                <v-text-field label="LnkdIn" class="mr-5" v-model="contactInfo.linkedin" solo prepend-inner-icon="mdi-linkedin"></v-text-field>

                </div>
            <div lg6 md6 sm6 class="secondDiv">
                <v-text-field label="Last Name" v-model="contactInfo.L_name" class="ml-5" solo prepend-inner-icon="mdi-account"></v-text-field>
                <v-text-field label="Phone_no" v-model="contactInfo.Phone_no" class="ml-5" solo
                              :rules="phoneRule" prepend-inner-icon="mdi-phone"></v-text-field>
                <v-text-field label="City" class="ml-5" v-model="contactInfo.city" solo prepend-inner-icon="mdi-city"></v-text-field>
                <v-text-field label="State" class="ml-5" v-model="contactInfo.state" solo></v-text-field>
                <v-text-field label="Street" class="ml-5" v-model="contactInfo.street" solo prepend-inner-icon="mdi-walk"></v-text-field>
                <v-text-field label="ZipCode" class="ml-5" v-model="contactInfo.zip" solo prepend-inner-icon="mdi-zip-box-outline"></v-text-field>

            </div>
                <v-file-input
                            class="ml-12 mt-3 mr-3"
                            placeholder="Upload picture" solo
                            accept='images/*'
                            v-model="image"
                            prepend-inner-icon="mdi-image-plus"></v-file-input>

                </v-layout>
            </v-card-text>
            <v-card-actions class="ml-12">
              <v-btn class="red--text" text outlined @click="$router.push('/dashboard/'+ $store.getters.userId)">
                <v-icon class="mr-3">mdi-close-box-outline</v-icon> Cancel </v-btn>
              <v-btn class="success--text ml-8" text outlined @click="saveEditContact" :disabled="editBtn">
                  <v-icon class="mr-3">mdi-content-save-all</v-icon> Save Changes</v-btn>
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
      address: {},
      image: [],
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
           zip: this.contactInfo.zip,
           imageUrl: typeof this.image.name === 'undefined'? this.contactInfo.imageUrl: this.image.name
         }
         api.editContacts(this.id, edited).then(response => {
            console.log(response);
            console.log("this is imagename")
            console.log(this.image.name)
            if(this.image.length !=0){
              console.log("uploading image", this.image.name);
              api.uploadImage(this.image);
            }
            this.$router.push('/dashboard/'+ this.$store.getters.userId);
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
          console.log(this.contactInfo.imageUrl)
       }).catch(err => console.log(err));
     }
  },
  computed: {
      editBtn(){
        let x = true;
        if(this.contactInfo.F_name != '' && this.contactInfo.Phone_no != ''){
           return !x;
        }
        else {
          return x;
        }
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
.cardlayout{
  /* margin-bottom: 20%; */
}

</style>
