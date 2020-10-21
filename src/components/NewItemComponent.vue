<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-if="isAboutPage"
          class="mx-2"
          fab
          dark
          color="indigo"
          v-bind="attrs"
          v-on="on"
          @click="$emit('edit')"
      >
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          v-else
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
        <span class="headline">{{ isEdit ? 'Edit item' : 'New item' }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form
              style="width: 100%"
              ref="form"
              v-model="valid"
              lazy-validation
              v-if="formItem"
          >
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
                        :required="row.required"
                        :rules="requireSimple"
                    ></v-text-field>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="darken-1"
            text
            @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="saveIt"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NewItemComponent",
  props: ["item", "isAboutPage"],
  data() {
    return {
      dialog: false,
      formItem: null,
      valid: true,
      requireSimple: [
        v => !!v || 'Name is required',
        v => (v && v.length > 0) || 'Min 1 simbol',
      ],
    }
  },
  watch: {
    "dialog"() {
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
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    saveIt() {
      this.validate();
      if (!this.isEdit) {
        this.formItem.artnumber = this.$store.getters.lastId + 1;
        this.$store.dispatch('saveNewItem', this.formItem);
        this.closeAfterSave();
        this.resetValidation();
      } else {
        this.$store.dispatch('saveEditItem', this.formItem);
        this.closeAfterSave();
        this.resetValidation();
      }
    },
    closeAfterSave() {
      if (this.valid) {
        this.$emit("update");
        this.dialog = false;
      }
    }
  }
}
</script>

<style scoped>

</style>