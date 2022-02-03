<template>
  <div class="bg-white shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50"></thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <template v-if="clients.length > 0">
          <clients-table-row
              v-for="client in clients"
              :client="client"
              :key="client.id"
              @remove="$emit('remove', client)"
          />
          <tr>
            <td colspan="3">
              <Pagination />
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="3" class="px-6 py-4">No Clients</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ClientsTableRow from "@/components/ClientsTableRow";
import Pagination from "@/components/Pagination";

export default {
  name: "ClientsTable",
  components: {Pagination, ClientsTableRow },
  props: {
    clients: {
      type: Array,
      required: true
    }
  }
}
</script>
