<template>
  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate mb-4">Create Client</h2>
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6">
        <TextInput :label="'Full name'"
                   v-model="client.fullName"
        />
      </div>
      <div class="col-span-6">
        <TextInput :label="'Birthdate'"
                   v-model="client.birthDate"
        />
      </div>
    </div>
  </div>
  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    <Button look="primary" @click="createClient">Create</Button>
    <Button look="secondary" @click="cancel" >Cancel</Button>
  </div>
</template>

<script>
import Button from "@/components/elements/Button";
import TextInput from "@/components/elements/TextInput";
export default {
  name: "ClientForm",
  components: {TextInput, Button},
  data() {
    return {
      client: {
        fullName: '',
        birthDate: ''
      }
    }
  },
  methods: {
    createClient() {
      if (this.client.birthDate === '' || this.client.fullName === '' ) {
        return
      }
      this.client.id = Date.now();
      this.$emit('create', this.client)
      this.client = {
        fullName: '',
        birthDate: ''
      }
    },
    cancel() {
      this.$emit('cancel')
      this.client = {
        fullName: '',
        birthDate: ''
      }
    }
  },
}
</script>

<style scoped>

</style>