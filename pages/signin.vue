<template>
  <v-container>
    <v-card class="cardstyle" width="50%">
      <v-card-title class="signin-title">
        <h2 class="primary--text ml-10 headerline">Sign In</h2>
      </v-card-title>
      <!-- <hr> -->
      <v-card-text class="mt-10">
        <v-form>
          <v-text-field label="E-mail" ></v-text-field>
          <v-text-field label="Password" type="password" ></v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions class="mt-10">
        <v-btn class="success ml-5"
               nuxt>
          Sign in
            <v-icon class="ml-3">mdi-account-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
     </v-card>
     <div class="signupbtn mt-5">
      <p class="">If You haven't account yet; u can register here
      <v-btn text class="primary--text" @click="$router.push('/signup')">signUp</v-btn></p>
     </div>
  </v-container>
</template>
<style scoped>
.cardstyle{
  margin-top: 16%;
  margin-left: 40%;
}
.signin-title{
  margin-left: 30%;
}
.signupbtn{
  margin-left: 55%;
}
</style>
