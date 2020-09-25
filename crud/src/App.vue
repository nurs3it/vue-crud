<template>
  <v-app>
    <v-main>
      <TableComponent :table="table" />
    </v-main>
  </v-app>
</template>

<script>
import TableComponent from "@/components/TableComponent";
import table from "@/data/table.constant";
export default {
  name: 'App',
  components: {TableComponent},
  data: () => ({
    table: table.products
  })
};
</script>
