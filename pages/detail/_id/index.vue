<template>
  <v-container>
     <detail :id="id" />
  </v-container>
</template>
<script>
import detail from "@/components/forcontacts/detail";
export default {
   head: {
   title: 'Detail-about'
  },
  data(){
    return {
      id: this.$route.params.id
    }
  },
  components: {
    detail
  }
}
</script>
