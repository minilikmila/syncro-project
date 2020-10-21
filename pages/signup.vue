<template>
  <v-container>
   <v-layout wrap>
     <v-flex lg6 md6 sm6>
      <v-card flat width="100%"
              min-height="100%"
              class="historycard">
                  <!-- <v-card-title class="success--text darken-3">Register here</v-card-title> -->
            <v-carousel
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              continuous
              class="carousel"
             >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                    <div class="subtitle-1">

                      <!-- <h3 class="red--text">{{ slide }}</h3> -->
                        <v-img :src="slide"
                        > <v-card-title>Register here</v-card-title>
                         <p class="subtitle-1 ml-10 mt-12 font-italic wite--text darken-5"> {{ messages[i] }}</p>
                          </v-img>

                      </div>
                </v-carousel-item>
              </v-carousel>

        <v-card-text>
          <p class="title info--text"> We gonna show you how to create contacts.com account</p>
          <v-divider class="red"></v-divider>
          <div>
            <v-list>
              <v-list-item>
                <ul class="title info--text">
                  <li>If have account before and forget password use forget password</li>
                  <li>Please ! fill at least all of the mandatory fields </li>
                </ul>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>
      </v-card>
     </v-flex>
     <!-- The second side components contains form -->
     <v-flex lg6 md6 sm6>
       <v-card>
         <v-card-title class="grey lighten-2 justify-center info--text">
            <span>{{currentTitle}} </span>
            <!-- <v-avatar>

            </v-avatar> -->
         </v-card-title>
         <v-divider class="red mb-4"></v-divider>
            <v-form ref="form">
               <v-window v-model="step">
             <v-window-item :value="1">
             <v-card-text>
              <v-text-field label="First Name" outlined :rules="nameRule" v-model="Fname"></v-text-field>
              <v-text-field label="Last Name" outlined v-model="Lname"></v-text-field>
              <v-text-field label="Username" outlined v-model="username"></v-text-field>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="2">
             <v-card-text>
              <v-text-field label="E-mail" :rules="emailRule" outlined
                             @click="socialMedia = !socialMedia"></v-text-field>
                  <div v-show="socialMedia">

                    <v-text-field label="facebook"></v-text-field>
                    <v-text-field label="Instagram"></v-text-field>
                    <v-text-field label="linkdIn"></v-text-field>
                    <v-text-field label="twitter"></v-text-field>

                 </div>
                 <v-select
                    :items="items"
                    label="Country"
                    outlined
                    hint="pick your country"
                  ></v-select>
             </v-card-text>
           </v-window-item>
           <v-window-item :value="3">
              <v-card-text>
                <v-textarea
                      outlined
                      rows="3"
                      name="Bio-area"
                      label="Your Bio ( It's optional)"
                    ></v-textarea>
                 <v-text-field label="Password" outlined v-model="password"></v-text-field>
                <v-text-field label="Confirm Password" outlined v-model="confirmPassword"></v-text-field>
                 <v-checkbox
                  v-model="checkbox"
                  label="Do You agree the term and conditions?"
                  required>
              </v-checkbox>
              </v-card-text>
           </v-window-item>
           <v-window-item :value="4">
              <h3 class="title font-weight-light mb-2"> Welcome to Contacts.com websites</h3>
              <span class="caption grey-- text"> Thanks for Signing up !</span>
           </v-window-item>
         </v-window>
            </v-form>
         <v-divider class="mt-7"></v-divider>
         <v-card-actions>
           <v-btn :disabled="step==1"
                   @click="step--"
                   class="mt-12">
              Back
           </v-btn>
              <v-btn class="warning mt-12" @click="resetForm"> resetForm</v-btn>
           <v-spacer />
              <v-btn class="info mt-12" :disabled="registerOn"> Register</v-btn>
           <v-btn :disabled="step ===3"
                  @click="step++"
                  depressed
                  class="mt-12">
               Next
           </v-btn>
         </v-card-actions>
       </v-card>
       <!-- <v-card>
         <v-card-title class="justify-center info--text">
           Register here
         </v-card-title>
         <v-card-text>
             <v-form ref="form">
              <v-text-field label="First Name"  :rules="nameRule" v-model="Fname"></v-text-field>
              <v-text-field label="Last Name" v-model="Lname"></v-text-field>
              <v-text-field label="Username" v-model="username"></v-text-field>
              <v-text-field label="E-mail" v-model="email"></v-text-field>
              <v-textarea
              class=""
                    name="input-6-1"
                    label="Default style"
                    hint="Your Biography it's optional"
              ></v-textarea>
              <v-text-field label="Password" v-model="password"></v-text-field>
              <v-text-field label="Confirm Password" v-model="confirmPassword"></v-text-field>

              <v-checkbox
               v-model="checkbox"
               label="Do You agree the term and conditions"
               required
               >
              </v-checkbox>
            </v-form>
           </v-card-text>
         <v-card-actions>
              <v-btn class="info mt-12" :disabled="registerOn"> Register</v-btn>
              <v-btn class="warning mt-12" @click="resetForm"> resetForm</v-btn>
         </v-card-actions>
       </v-card> -->
     </v-flex>
   </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      socialMedia: false,
      step: 1,
      Fname: '',
      Lname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      checkbox: false,
       items:['Ethiopia','Israel','China','USA', 'Kenya','S.Africa','Egypt','India','Switherland'],
       slides: [
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' ,
          'https://cdn.vuetifyjs.com/images/cards/server-room.jpg',
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' ,

        ],
        messages: [
          'If have account before and forget password use forget password',
          'Please ! fill at least all of the mandatory fields ',
        ],
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
    resetForm(){
      this.$refs.form.reset();
    }
  },
  computed: {
    registerOn(){
      let x = true;
      if(this.Fname !='' && this.Lname !='' && this.checkbox)
      {   return !x   }
      else
      return x
    },
    currentTitle(){
      switch(this.step){
          case 1: return 'Primary Information'
          case 2: return 'More about You'
          default: return 'account created'
      }
    }
  }
}
</script>
<style scoped>
.historycard{
  margin-left: -15%;
  width: 100%;
}
.carousel{
  margin-bottom: -20%;
}
</style>
