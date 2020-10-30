<template>
  <v-container>
    <v-flex class="about">
      <section class="mb-12">
           <h3 class="info--text">About Us [ Contacts.com ]</h3>
           <v-divider class="mt-2"></v-divider>
      </section>
      <section class="info--text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ex sint ev
        eniet rerum, ea quibusdam adipisci eligendi quisquam, voluptas aliquam neque. Assumenda deser
        unt ad possimus! Reiciendis impedit corporis aperiam. Ullam repellendus, optio accusantium ex eaque et
        beatae provident iusto vel consectetur ducimus sunt soluta q
        uas illo veritatis sit fuga sapiente?</p>
      </section>
      <section class="warning--text">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quisquam, cum tempore autem sim
          ilique provident laudantium consequuntur quae, laboriosam harum possimus hic iste delectus odio quibusdam.
          Asperiores eaque illo reprehenderit aspernatur ipsa sint, numquam in. Impedit reiciendis aut non eaque, debiti
          s recusandae aliquid modi distinctio cu
          m totam repudiandae fugit maxime. Unde ipsa perspiciatis debitis fugit a ab accusantium laudantium ex!</p>
      </section>
      <section>
        <v-card width="80%" class="ml-12">
          <v-card-title class="justify-center info--text">
             Write your feedback and any comment you feel about our services
          </v-card-title> <v-divider ></v-divider>
          <v-card-text>
            <v-text-field label="Email" outlined></v-text-field>
            <v-textarea label="Your comment or feedback" outlined></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn class="success" block>Submit</v-btn>
          </v-card-actions>
        </v-card>
      </section>
    </v-flex>
  </v-container>
</template>
<style>
 .about{
   margin-top: 40px;
 }
</style>
