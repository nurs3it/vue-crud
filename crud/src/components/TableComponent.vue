<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ table.title ? table.title : "" }}
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="mr-5"
        ></v-text-field>
        <NewItemComponent
            :item="table"
            ref="dlg"
        />
      </v-card-title>
      <v-data-table
            :headers="table.headers"
            :items="data"
            :search="search"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
              mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
              mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import NewItemComponent from "@/components/NewItemComponent";
export default {
  name: "TableComponent",
  components: {NewItemComponent},
  props: ["table"],
  data() {
    return {
      search: '',
      data: []
    }
  },
  created() {
    this.data = this.$store.getters[this.table.name];
  },
  methods: {
    editItem(item) {
      this.$refs.dlg.formItem = Object.assign({}, item);
      this.$refs.dlg.dialog = true;
    },
    deleteItem(item) {
      this.$store.dispatch("deleteProduct", item)
    }
  }
}
</script>
