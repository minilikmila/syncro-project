import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist"
import axios from "axios"

// if (typeof window === 'undefined') {
//   // global.window = {}
//   // this.storage = option.storage || window.localStorage
// }
const vuexpersist = new VuexPersist({
      key: "CONAPP",
      storage: window.localStorage
});
Vue.use(Vuex);

const createStore = () =>{

   return new Vuex.Store({
        state: {
          F_name: '',
          L_name: '',
          imageUrl: '',
          userId: '',
          username: '',
          email: '',
          password: '',
          token: '',
          country: '',
          logged_in: false,
          user_contacts: [],
          social_media: {}
        },
        mutations: {
          setUserId(state, Id){
             state.userId = Id;
           },
          setFull_name(state, F_name,L_name){
            state.F_name = F_name;
            state.L_name = L_name;
          },
          setImageUrl(state, imageUrl){
            state.imageUrl = imageUrl;
          },
          setUsername(state, username){
            state.username = username;
          },
          setEmail(state, email){
            state.email = email;
          },
          setPassword(state, password){
            state.password = password;
          },
          setToken(state, token){
            state.token = token;
          },
          setSocial_media(state, social_media){
           state.social_media = social_media;
          },
          setCountry(state, country){
            state.country = country;
          },
          addContacts(state, user_data){
            state.user_contacts = user_data;
          }

        },
        actions: {
          addContacts(vuexContext, contactData){
            return axios.post(`http://localhost:5000/api/contacts`, contactData)
            .then(response => {
               console.log("From Store actions");
               console.log(response);
               return response.data;
            }).catch(err => console.log(err));
          }
        },
        getters: {
          userId: state => state.userId,
          username: state => state.username,
          F_name: state => state.F_name,
          imageUrl: state => state.imageUrl ,
          L_name: state => state.L_name,
          email: state => state.email,
          password: state => state.password,
          token: state => state.token,
          country: state => state.country,
          social_media: state => state.social_media,
          user_contacts: state => state.user_contacts,
        },
        plugins: [vuexpersist.plugin],
        modules: {}


     });
};

  export default createStore;
