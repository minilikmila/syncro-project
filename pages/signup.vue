<template>
  <v-container>
     <newUseracc />
  </v-container>
</template>
<script>
import newUseracc from "@/components/useraccount/newUseracc";
export default {
  layout: 'beforelogin',
  components: {
    newUseracc,
  }
}
</script>
