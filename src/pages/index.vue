<template>
  <v-main>
    <TableComponent :table="table"/>
  </v-main>
</template>

<script>
import TableComponent from "@/components/TableComponent";
import table from "@/data/table.constant";

export default {
  name: "index",
  components: {TableComponent},
  data: () => ({
    table: table.products
  })
}
</script>

<style scoped>

</style>