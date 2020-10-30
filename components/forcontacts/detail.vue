<template>
  <v-container>
      <h3 class="font-italic mt-5 mb-2 font-weight-light info--text text-center">
                See more detail of your contact :- <strong class="red--text">
                  {{contactInfo.F_name}} {{contactInfo.L_name }}</strong></h3>
       <v-layout>
         <v-flex d-flex lg4 md4 sm4>
            <v-card width="100%" height="100%" flat v-if="contactInfo.imageUrl !=''">
              <v-img :src="'http://localhost:5000/api/containers/images/download/'+contactInfo.imageUrl"
               height="76%" />
            </v-card>
         </v-flex>
          <v-flex d-flex lg8 md8 sm8>
            <v-card width="100%" tile
                    class="cardlayout justify-center align-center">
               <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                        height="230"
                        > <v-card-title class="white--text justify-center">See detail here</v-card-title>
                         <v-avatar circle  width="15%" v-if="contactInfo.imageUrl !=''"
                                     height="133px"
                                     class="avatarsetting">
                         <v-img :src="'http://localhost:5000/api/containers/images/download/'+contactInfo.imageUrl" />
                </v-avatar>
                          <v-list-item-content class="sideAddress">
                          <v-list-item-title class="title white--text">{{contactInfo.F_name}}</v-list-item-title>
                          <v-list-item-subtitle class="font-italic white--text">{{contactInfo.email}}</v-list-item-subtitle>

                        </v-list-item-content>
                    </v-img> -->
              <v-card-text class="mt-8">
               <v-layout>
                 <div>
                <strong class=""><v-icon class="primary--text">mdi-account</v-icon>
                    FullName   <p class="primary--text ml-12">{{ contactInfo.F_name}} {{contactInfo.L_name}}</p>
                    </strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-home-city</v-icon>City
                 <p class="primary--text ml-12">{{contactInfo.city}}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-road-variant</v-icon>Street
                 <p class="primary--text ml-12">{{contactInfo.street}}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-home-city</v-icon>State
                 <p class="primary--text ml-12">{{contactInfo.state}}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-zip-box-outline</v-icon>ZipCode
                 <p class="primary--text ml-12">{{contactInfo.zip}}</p></strong>
                  <strong class="mt-1"><v-icon class="primary--text">mdi-phone</v-icon>
                              Phone_No_ <p class="primary--text ml-12 subtitle-1">{{ contactInfo.Phone_no}}</p></strong>
                 </div>
                 <div class="listElements">

                <strong class=""> <v-icon class="primary--text">mdi-email</v-icon>
                              Email <p class="primary--text ml-12 subtitle-1">{{ contactInfo.email }}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-facebook</v-icon>
                              facebook account <p class="primary--text ml-12 subtitle-1"> {{contactInfo.facebook}}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-twitter</v-icon>
                                twitter account <p class="primary--text ml-12"> {{contactInfo.facebook}}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-linkedin</v-icon>
                Linkedin account: - <p class="primary--text ml-12 subtitle-1"> {{contactInfo.linkedin}}</p></strong>
                <strong class="mt-1"><v-icon class="primary--text">mdi-instagram</v-icon>
                Instagram account <p class="primary--text ml-12 subtitle-1">{{contactInfo.Instagram}}</p></strong>
                 </div>
               </v-layout>
              </v-card-text>
              <v-card-actions class="mt-12">
                <v-btn class=" red--text mr-5" outlined text @click="$router.push('/dashboard/'+ $store.getters.userId)">
                       <v-icon class="mr-2">mdi-close-box-outline</v-icon> Cancel</v-btn>
                <v-btn class=" success--text" outlined text
                       @click="$router.push('/edit/'+ id)"><v-icon class="mr-2">mdi-pencil</v-icon> Edit </v-btn>
              </v-card-actions>
            </v-card>
        </v-flex>
       </v-layout>
  </v-container>
</template>
<script>

import {apiservice} from '@/apiservice';
const api = new apiservice();
// header:"detail"
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      contactInfo: {}

    }
  },
  methods: {
    getContact(){
      api.getContactById(this.id).then(response => {
          console.log(response.data);
          this.contactInfo = response.data;
          console.log(this.contactInfo)
      }).catch(err => { console.log(err)});

      // for(let i=0; i< this.$store.getters.user_contacts.length; i++){
      //   if(this.id === this.$store.getters.user_contacts.id){
      //     this.contactInfo = this.$store.getters.user_contacts[i];
      //     break;
      //   }
      // }
    }
  },
  mounted(){
    this.getContact();
    // console.log(this.$store.getters.user_contacts.length, "length")
  }
}
</script>
<style scoped>
.titlelayout{
  margin-left: 35%;
}
.cardlayout{
  /* margin-left: 5%; */
  margin-bottom: 20%;
  /* margin-top: 7%; */
}
/* .avatarsetting{
  margin-top: 23%;
  margin-bottom: -30%;
  margin-left: 80%;
  opacity: 0.9;
} */
.bigimg{
  /* opacity: 0.4; */
}
.avatarsetting{
  /* margin-top: 23%; */
  /* margin-bottom: -30%; */
  margin-left: 42%;
  opacity: 0.9;
}
.listElements{
  margin-left: 40%;
}
.sideAddress{
  margin-top: -5%;
  margin-left: 2%;
}
</style>
