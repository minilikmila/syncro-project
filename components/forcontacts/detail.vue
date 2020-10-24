<template>
  <v-container>
      <h2 class="font-italic mt-5 mb-2 font-weight-light info--text text-center">
        See more detail of your contact :- <strong class="red--text"> {{contactInfo.F_name}} {{contactInfo.L_name }}</strong></h2>
        <section>
           <!-- <v-card
              flat
              tile
              width="90%"
              height="300"
              class="mx-auto imagetitle mt-12"
            >
    <v-layout>
      <v-flex>
        <v-img
          class="bigimg"
          height="300"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-layout
            align-end
            fill-height
            wrap
          >
                          :size="$vuetify.breakpoint.smAndUp ? 150 : 50"
           <v-flex shrink align-self-end>
                <v-avatar circle  width="30%"
                                  height="150px"
                          class="avatarsetting">
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                </v-avatar>
            </v-flex>
            <v-list-item
              dark
              color="rgba(0, 0, 0, .4)"
            >
              <v-list-item-content>
                <v-list-item-title class="title">{{contactInfo.F_name}}</v-list-item-title>
                <v-list-item-subtitle class="font-italic">{{contactInfo.email}}</v-list-item-subtitle>

              </v-list-item-content>
            </v-list-item>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </v-card> -->
            <v-card width="90%" tile
                    class="cardlayout justify-center align-center">
               <v-img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                        height="230"
                        > <v-card-title class="white--text justify-center">See detail here</v-card-title>
                         <v-avatar circle  width="10%"
                                  height="100px"
                          class="avatarsetting">
                         <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                </v-avatar>
                          <v-list-item-content class="ml-5">
                          <v-list-item-title class="title white--text">{{contactInfo.F_name}}</v-list-item-title>
                          <v-list-item-subtitle class="font-italic white--text">{{contactInfo.email}}</v-list-item-subtitle>

                        </v-list-item-content>
                         <!-- <p class="subtitle-1 ml-10 mt-12 font-italic wite--text darken-5"></p> -->
                    </v-img>
              <v-card-text class="mt-12">
               <v-layout>
                 <div>
                <h3 class=""><v-icon>mdi-account</v-icon>Name: -  {{ contactInfo.F_name}}</h3>
                <h3 class="mt-2"><v-icon>mdi-home-city</v-icon>City: - {{contactInfo.city}}</h3>
                <h3 class="mt-2"><v-icon>mdi-road-variant</v-icon>Street: - {{contactInfo.street}}</h3>
                <h3 class="mt-2"><v-icon>mdi-home-city</v-icon>State: - {{contactInfo.state}}</h3>
                <h3 class="mt-2"><v-icon>mdi-zip-box-outline</v-icon>ZipCode: - {{contactInfo.zip}}</h3>
                 </div>
                 <div class="listElements">
                <h3 class="mt-2"><v-icon>mdi-Phone</v-icon>Phone_No_: - {{ contactInfo.Phone_no}}</h3>
                <h3 class=""> <v-icon>mdi-email</v-icon>Email: - {{ contactInfo.email }}</h3>
                <h3 class="mt-2"><v-icon>mdi-facebook</v-icon>facebook account: - {{contactInfo.facebook}}</h3>
                <h3 class="mt-2"><v-icon>mdi-twitter</v-icon>twitter account: - {{contactInfo.twitter}}</h3>
                <h3 class="mt-2"><v-icon>mdi-linkedin</v-icon>linkedin account: - {{contactInfo.linkedin}}</h3>

                 </div>
               </v-layout>
              </v-card-text>
              <v-card-actions class="mt-12">
                <v-btn class=" red--text mr-5" outlined text @click="$router.push('/dashboard')">Cancel <v-icon>mdi-close-circle</v-icon></v-btn>
                <v-btn class=" success--text" outlined text
                       @click="$router.push('/edit/'+ id)"> Edit <v-icon>mdi-pencil</v-icon></v-btn>
              </v-card-actions>
            </v-card>
        </section>
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
  margin-left: 5%;
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
  margin-left: 45%;
  opacity: 0.9;
}
.listElements{
  margin-left: 40%;
}
</style>
