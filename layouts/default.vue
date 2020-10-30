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
               contacts.com
          </v-list-item-title>
          <v-list-item-subtitle>
            Subtitle
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
   <v-divider></v-divider>
   <v-list nav dense>
     <v-avatar circle width="3%" class="mr-4 justify-center avatarsetting" >
             <v-img :src="'http://localhost:5000/api/containers/images/download/'+ $store.getters.imageUrl"/>
         </v-avatar>
     <v-list-item v-for="(itemlist,index) in items"
     :key="index"
     link >
       <v-list-item-icon>
            <v-icon class="primary--text">{{ itemlist.icon }}</v-icon>
       </v-list-item-icon>
       <v-list-item-content>
        <v-list-item-title @click="follow(index)" class="primary--text" link>{{ itemlist.title }}</v-list-item-title>
       </v-list-item-content>
     </v-list-item>
   </v-list>
    <template v-slot:append d>
        <!-- <div>
         <v-layout>
            <v-btn block class="primary" @click="logout"
            > <v-icon>mdi-logout</v-icon> Logout</v-btn>
         </v-layout>
        </div> -->
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
        <v-avatar circle width="3%" class="mr-4">
             <v-img :src="'http://localhost:5000/api/containers/images/download/'+ $store.getters.imageUrl"/>
         </v-avatar>
        <div >
          <p class="subtitle-1 white--text userName">{{$store.getters.username}}</p>
          <p class="subtitle-2 white--text email"><nuxt-link to="www.google.com"> {{$store.getters.email}}
                                                  </nuxt-link></p>
        </div>


         <!-- <div class="white--text mr-12 userbar" >
        <h3 class="title">{{$store.getters.username}}</h3>
        <p class="subtitle">{{$store.getters.email}}</p>
     </div> -->

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
        <v-list-item-icon>
          <v-icon class="primary--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-title class="info--text" link >{{ item.title }}</v-list-item-title>
          <!-- <v-list-item-list><nuxt-link to>{{ item.title }}</nuxt-link></v-list-item-list> -->
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
      title: "Contacts.com",
      items: [
          { title: 'Profile Dashboard', icon: 'mdi-view-dashboard' },
          // { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
          { title: 'Settings', icon: 'mdi-cog'},
          { title: 'Logout', icon: 'mdi-logout'}
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
       this.$router.push('/dashboard/'+ this.$store.getters.userId)
      // else if(this.items[index].title == 'Photos')
      //  this.$router.push('/index')
      else if (this.items[index].title == 'About')
       this.$router.push('/about')
      else if(this.items[index].title == 'Settings')
      {
          this.$router.push('/accsetting/' + this.$store.getters.userId)
          // console.log("Settings");
          // this.setting();
      }
      else if(this.items[index].title == 'Logout')
       {
         this.logout();
       }
       },

       // perform logging out the user from its account
       logout(){
         this.$store.commit('setUserId', '');
         this.$store.commit('setUsername', '');
         this.$store.commit('setEmail', '')
         this.$store.commit('setToken', '')
         this.$store.commit('setPassword', '')
         this.$store.commit('addContacts', '')
         this.$store.commit('setImageUrl', '')
         this.$router.push('/signin');
       },
       // setting is commited
  }
}
</script>
<style scoped>
.background{
  /* background-color: rgba(0, 67, 89, 0.3); */
/* background-image: url('../assets/image/test.jpg'); */
}
.userbar{
  /* margin-left: 70%; */
}
.userName{
  margin-top: 8%;
  margin-bottom: -3%;
}
.avatarsetting{
  margin-left: 28% ;
}

</style>
