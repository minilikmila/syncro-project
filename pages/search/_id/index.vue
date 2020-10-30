<template>
 <v-container>
   <!-- <h3>We are here! </h3>
   <h3>{{text}}</h3> -->
   <!-- <v-flex>
     <h3>Please wait....</h3>
   </v-flex> -->
   <v-container v-if="found">
      <detail :id="this.findId" />
   </v-container>
   <v-container v-else>
     <v-layout>
       <h2 class="ml-12 red--text">WE cant found this contact </h2>
       <h3 class="ml-5 mt-1"><nuxt-link :to="'/dashboard/' + this.$store.getters.userId">try again</nuxt-link></h3>
     </v-layout>
   </v-container>
 </v-container>
</template>
<script>
import detail from '@/components/forcontacts/detail';
import { apiservice } from "@/apiservice";
const api = new apiservice();
export default {

  // props: {
  //   name: {
  //     type: String
  //   }
  // }
  data(){
    return {
      found: false,
      contactInfo: [],
      id: this.$route.params.id,
      text: 'Not Found',
      findId: ''
    }
  },
  components:{
    detail
  },
  async mounted(){
    await api.getContact(this.$store.getters.userId).then(response => {
        console.log(response.data)
        this.contactInfo = response.data;
        for(let i=0; i<this.contactInfo.length; i++){
          if(this.contactInfo[i].F_name == this.id){
              this.text = 'found!'
              this.found = true
              this.findId = this.contactInfo[i].id;
              console.log("This is found Id : " + this.findId)
              break;
          }
        }
    }).catch(err => console.log(err));
  },



}
</script>
