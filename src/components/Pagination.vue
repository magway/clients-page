<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden" v-if="filteredClientsTotal > limit">
      <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
      <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">{{ start + 1 }}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ currentEnd }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ filteredClientsTotal }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div v-if="filteredClientsTotal > limit">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              :class="itemClass(page=== pageNumber)"
              href="#"
              @click.prevent="changePage(pageNumber)"
          >
            {{ pageNumber }}
          </a>

          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Pagination",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  computed: {
    ...mapState({
      filteredClientsTotal: state => state.filteredClientsTotal,
      page: state => state.page,
      limit: state => state.limit,
      start: state => state.start,
      end: state => state.end,
      totalPages: state => state.totalPages,
    }),
    currentEnd() {
      return this.totalPages === 1 ? this.filteredClientsTotal : this.end
    }
  },
  methods: {
    ...mapActions({
      setPage: 'setPage',
    }),
    itemClass(isCurrent) {
      return isCurrent ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50";
    },
    changePage(pageNumber) {
      this.setPage(pageNumber)
    },
  }
}
</script>

<style scoped>

</style>