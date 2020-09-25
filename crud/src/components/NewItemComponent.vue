<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="newItem"
      >
        New item
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{  isEdit ? 'Edit item' : 'New item' }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <template v-if="item && item.headers">
              <template v-for="(row, indx) in item.headers">
                <v-col
                    cols="6"
                    sm="6"
                    md="6"
                    v-if="row.value !== 'artnumber' && row.value !== 'actions'"
                    :key="indx"
                >
                  <v-text-field
                      :value="formItem[row.value]"
                      v-model="formItem[row.value]"
                      :label="row.text"
                      required
                  ></v-text-field>

                </v-col>
              </template>
            </template>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="darken-1"
            text
            @click="dialog = false"
        >
          Close</v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="saveIt"
        >
          Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NewItemComponent",
  props: ["item"],
  data() {
    return {
      dialog: false,
      formItem: null
    }
  },
  watch: {
    "dialog" () {
      if (!this.dialog) {
        this.newItem();
      }
    }
  },
  computed: {
    isEdit() {
      return !!(this.formItem.artnumber)
    }
  },
  created() {
    this.newItem();
  },
  methods: {
    newItem() {
      this.formItem = this.item.actions.newItem();
    },
    saveIt() {
      if (!this.isEdit) {
        this.formItem.artnumber = this.$store.getters.lastId + 1;
        this.$store.dispatch('saveNewItem', this.formItem);
        this.dialog = false;
      } else {
        this.$store.dispatch('saveEditItem', this.formItem);
        this.dialog = false;
      }
    }
  }
}
</script>

<style scoped>

</style>