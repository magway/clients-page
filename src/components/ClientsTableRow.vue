<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-gray-900">{{ client.fullName }} <span class="text-gray-400 text-xs">[id: {{ client.id }}]</span></div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-gray-900">{{ client.birthDate }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900" @click.prevent="removeClient(client)">Delete</a>
    </td>
  </tr>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ClientsTableRow",
  props: {
    client: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions({
      removeClient: 'removeClient'
    })
  }
}
</script>