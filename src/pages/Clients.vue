<template>
  <div>
    <h1 class="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-4">Clients Page</h1>

    <SearchPanel class="mb-4" />

    <Dialog v-model:show="clientFormVisible"
            @update:show="setClientFormVisible"
    >
      <ClientForm @create="createClient" @cancel="setClientFormVisible(false)"/>
    </Dialog>
    <div class="shadow overflow-hidden sm:rounded-md mb-4">
      <div class="px-4 py-5 bg-white sm:p-6">
        <Button @click="setClientFormVisible(true)" look="primary">Create Client</Button>
      </div>
    </div>

    <ClientsTable :clients="currentClients"/>
  </div>
</template>

<script>
import SearchPanel from "@/components/SearchPanel";
import ClientsTable from "@/components/ClientsTable";
import {mapGetters, mapActions, mapState} from 'vuex'
import Pagination from "@/components/Pagination";
import Dialog from "@/components/Dialog";
import Button from "@/components/elements/Button";
import ClientForm from "@/components/ClientForm";

export default {
  name: "Clients",
  components: {ClientForm, Button, Dialog, Pagination, ClientsTable, SearchPanel},
  computed: {
    ...mapState({
      clientFormVisible: state => state.clientFormVisible,
    }),
    ...mapGetters({
      currentClients: 'currentClients',
    })
  },
  methods: {
    ...mapActions({
      setData: 'setData',
      setClientFormVisible: 'setClientFormVisible',
      addClient: 'addClient'
    }),
    createClient(client) {
      this.addClient(client)
      this.setClientFormVisible(false)
    },
    removeClient(client) {
      this.removeClient(client)
      this.setClientFormVisible(false)
    }
  },
  mounted() {
    this.setData();
  },
};
</script>