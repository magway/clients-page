<template>
  <form @submit.prevent>
    <div class="shadow overflow-hidden sm:rounded-md mb-4">
      <div class="px-4 py-5 bg-white sm:p-6">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate mb-4">Search</h2>
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <TextInput :label="'Full name'"
                       v-model="fullNameQuery"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput :label="'Birthdate'"
                       v-model="birthdateQuery"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 sm:flex sm:flex-row-reverse">
        <Button look="primary" class="sm:ml-3" @click="searchClients">Search</Button>
        <Button look="secondary" class="mt-3 sm:ml-3 sm:mt-0" @click="clearSearch">Cancel</Button>
      </div>
    </div>
  </form>
</template>

<script>
import TextInput from "@/components/elements/TextInput";
import {mapState, mapActions} from 'vuex'
import Button from "@/components/elements/Button";

export default {
  name: "SearchPanel",
  components: {Button, TextInput},
  data() {
    return {
      fullNameQuery: "",
      birthdateQuery: "",
    }
  },
  methods: {
    searchClients() {
      this.setSearchQuery(this.fullNameQuery),
      this.setSearchDate(this.birthdateQuery)
    },
    clearSearch() {
      this.setSearchQuery(''),
      this.setSearchDate(''),
      this.fullNameQuery = '',
      this.birthdateQuery = ''
    },
    ...mapActions({
      setSearchQuery: 'setSearchQuery',
      setSearchDate: 'setSearchDate'
    }),
  },
  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery,
      searchDate: state => state.searchDate,
    }),
  },
  mounted() {
    this.fullNameQuery = this.searchQuery
    this.birthdateQuery = this.searchDate
  }
}
</script>
