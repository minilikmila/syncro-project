<template>
  <v-container>
    <editcontact :id="$route.params.id" />
  </v-container>
</template>
<script>
import editcontact from "@/components/forcontacts/editcontact";
export default {
   head: {
   title: 'Edit-contact'
  },
  data(){
    return {
      id: this.$route.params.id,
    }
  },
  components: {
    editcontact
  }
}
</script>
