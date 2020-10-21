<template>
  <v-app dark class="background">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      expand-on-hover
      class=" "
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
               Application
          </v-list-item-title>
          <v-list-item-subtitle>
            Subtitle
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
   <v-divider></v-divider>
   <v-list nav dense>
     <v-list-item v-for="(itemlist,index) in items"
     :key="index"
     link >
       <v-list-item-icon>
            <v-icon class="primary--text">{{ itemlist.icon }}</v-icon>
       </v-list-item-icon>
       <v-list-item-content>
        <v-list-item-title @click="follow(index)" class="primary--text">{{ itemlist.title }}</v-list-item-title>
       </v-list-item-content>
     </v-list-item>
   </v-list>
    <template v-slot:append d>
        <div>
         <v-layout>
            <v-btn block class="primary"> <v-icon>mdi-logout</v-icon> Logout</v-btn>
         </v-layout>
        </div>
      </template>
      <!-- <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="green lighten-1"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"/>

      <v-toolbar-title v-text="title" class="white--text" />

      <v-spacer />
      <h3 class="white--text mr-5">Profile Name</h3>
      <div class="text-center">
    <v-menu offset-y
            open-delay="1"
            open-on-hover
            transition="scale-transition"
            class=""
            light
            >
      <template v-slot:activator="{ on }">
        <v-btn
          class="white--text"
          v-on="on"
          text
        >
          <!-- Profile -->
          <v-icon>mdi-dots-grid</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="follow(index)"
        >
          <v-list-item-title class="info--text">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer
      :fixed="fixed"
      app
      dark
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
     <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey darken-3 ">
        <strong class="subheading font-weight-light">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 primary"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        {{ new Date().getFullYear() }} — <strong>Contacts.com</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: "Contact.com",
      items: [
          { title: 'Profile Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
         icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  methods: {
    follow(index){
      if(this.items[index].title == 'Profile Dashboard')
       this.$router.push('/dashboard')
      else if(this.items[index].title == 'Photos')
       this.$router.push('/index')
      else if (this.items[index].title == 'About')
       this.$router.push('/signin')    }
  }
}
</script>
<style scoped>
.background{
  /* background-color: rgba(0, 67, 89, 0.3); */
/* background-image: url('../assets/image/test.jpg'); */
}

</style>
