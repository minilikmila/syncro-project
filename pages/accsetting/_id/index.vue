<template>
    <v-container>
      <editaccount :id="$route.params.id" />
    </v-container>
</template>
<script>
import editaccount from "@/components/useraccount/editaccount";
export default {
  data(){
    return {
      id: this.$route.params.id
    }
  },
  components: {
     editaccount,
  }
}
</script>
