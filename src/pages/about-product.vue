<template>
  <v-main class="d-flex align-center">
    <v-container>
      <v-card
          v-if="product"
          class="mx-auto"
          max-width="500"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
        <v-card-text>
          <v-row>
            <v-col><h1 class="primary--text">{{ product.name }}</h1></v-col>
            <v-col><h2 align="right"><span class="price">{{ `$1500` }}</span></h2></v-col>
          </v-row>
        </v-card-text>
        <v-card-title class="pl-5 pr-5 flex-column">
          <div class="width-100"><p>{{ product.brand }}</p></div>
          <div class="width-100"><p>Quantity: {{ product.quantity }}</p></div>
          <div class="width-100"><p>Weight: {{ product.weight }}</p></div>
        </v-card-title>
        <v-card-actions class="justify-end">
          <NewItemComponent
              ref="dlg"
              :item="table.products"
              :isAboutPage="true"
              @edit="edit"
              @update="update"
          />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import NewItemComponent from "@/components/NewItemComponent";
import table from "@/data/table.constant"
export default {
  name: "about-product",
  components: {NewItemComponent},
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
  },
  data() {
    return {
      table,
      product: null
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.product = this.$store.getters.products.find(el => el.artnumber === this.$route.params.id);
    },
    edit() {
      this.$refs.dlg.formItem = Object.assign({}, this.product);
      this.$refs.dlg.dialog = true;
    },
    update() {
      this.init();
    }
  },
}
</script>

<style lang="scss">
.price {
  background: bisque;
  padding: 10px;
  border-radius: 20px;
}

.width-100 {
  width: 100%;
}
</style>