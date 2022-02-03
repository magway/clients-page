<template>
  <div>
    <h1 class="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-4">Clients Page</h1>
    <SearchPanel class="mb-4" />
    <ClientsTable :clients="currentClients" />
  </div>
</template>

<script>
import SearchPanel from "@/components/SearchPanel";
import ClientsTable from "@/components/ClientsTable";
import {mapGetters, mapActions} from 'vuex'
import Pagination from "@/components/Pagination";

export default {
  name: "Clients",
  components: {Pagination, ClientsTable, SearchPanel},
  computed: {
    ...mapGetters({
      currentClients: 'currentClients',
    })
  },
  methods: {
    ...mapActions({
      setData: 'setData'
    }),
  },
  mounted() {
    this.setData();
  },
};
</script>