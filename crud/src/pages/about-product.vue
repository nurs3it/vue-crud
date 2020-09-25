<template>
  <v-main>
    PRoduct
  </v-main>
</template>

<script>
export default {
  name: "about-product",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let that = vm
      let isCurrentRoute = !!(that.$store.getters.products.find(el => el.artnumber === that.$route.params.id))
      if (isCurrentRoute) {
        next(to)
      } else {
        next(from)
      }
    })
  }
}
</script>