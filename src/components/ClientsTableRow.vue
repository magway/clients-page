<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-gray-900">{{ client.fullName }} [id: {{ client.id }}]</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-gray-900">{{ client.birthDate }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900" @click.prevent="$emit('remove', client)">Delete</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ClientsTableRow",
  props: {
    client: {
      type: Object,
      required: true,
    }
  }
}
</script>