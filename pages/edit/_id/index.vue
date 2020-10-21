<template>
  <v-container>
            <!-- <h2> Edit: {{ this.id }}</h2> -->
            <v-flex>
              <v-card>
                <!-- <v-card-title class="justify-center info--text grey lighten-2">Edit contact</v-card-title> -->
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200"
                        > <v-card-title class="white--text justify-center">Edit Contacts</v-card-title>
                         <v-avatar circle  width="10%"
                                  height="100px"
                          class="avatarsetting">
                         <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
                </v-avatar>
                         <!-- <p class="subtitle-1 ml-10 mt-12 font-italic wite--text darken-5"></p> -->
                    </v-img>
                <v-divider class="red"></v-divider>
                <v-card-text>
                  <v-layout>
                    <v-text-field label="First Name" class="mr-5"></v-text-field>
                    <v-text-field label="Last Name" class="ml-5"></v-text-field>
                  </v-layout>
                   <v-layout>
                  <v-text-field label="Email" class="mr-5"></v-text-field>
                  <v-text-field label="Phone_no" class="ml-5"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="facebook" class="mr-5"></v-text-field>
                       <v-text-field label="City" class="ml-5"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="twitter" class="mr-5"></v-text-field>
                       <v-text-field label="State" class="ml-5"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="Instagram" class="mr-5"></v-text-field>
                       <v-text-field label="Street" class="ml-5"></v-text-field>
                   </v-layout>
                   <v-layout wrap>
                       <v-text-field label="LnkdIn" class="mr-5"></v-text-field>
                       <v-text-field label="ZipCode" class="ml-5"></v-text-field>
                   </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn class="red--text" text outlined>Cancel <v-icon>mdi-close-box-outline</v-icon></v-btn>
                  <v-btn class="success--text ml-8" text outlined> Save Changes <v-icon class="ml-3">mdi-content-save-all</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
  </v-container>
</template>
<script>
export default {
   head: {
   title: 'Edit-contact'
  },
  data(){
    return {
      id: this.$route.params.id
    }
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
</style>
