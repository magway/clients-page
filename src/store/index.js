import { createStore } from 'vuex'
import fake_data from "./fake_data.js";

export default createStore({
  state: {
    fakeClientsBase: fake_data,
    clients: [],
    filteredClients: [],
    selectedSort: 'fullName',
    searchQuery: '',
    searchDate: '',
    page: 1,
    limit: 20,
    start: 0,
    end: 0,
    totalPages: 0,
    filteredClientsTotal: 0,
    sortOptions: [
      {value: 'fullName', name: 'by FullName'},
      {value: 'birthDate', name: 'by BirthDate'},
    ]
  },
  getters: {
    currentClients(state, getters) {
      return state.clients;
    },
    sortedClients(state) {
      return [...state.fakeClientsBase].sort((c1, c2) => c1[state.selectedSort]?.localeCompare(c2[state.selectedSort]))
    },
    filteredSortedClients(state, getters) {
      return getters.sortedClients.filter(client => client.fullName.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setFakeClientsBase(state, clients) {
      state.fakeClientsBase = clients;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setFilteredClients(state, filteredClients) {
      state.filteredClients = filteredClients;
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setFilteredClientsTotal(state, filteredClientsTotal) {
      state.filteredClientsTotal = filteredClientsTotal
    },
    setStart(state, start) {
      state.start = start
    },
    setEnd(state, end) {
      state.end = end
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setSearchDate(state, searchDate) {
      state.searchDate = searchDate
    },
  },
  actions: {
    setData({state, commit, getters}) {
      //fetch fake data
      let data = []
      if (state.searchQuery === '' && state.searchDate === '') {
         data = state.fakeClientsBase;
      } else {
        data = getters.filteredSortedClients
      }

      const total = data.length;
      commit('setFilteredClientsTotal', total)
      commit('setTotalPages', Math.ceil(total / state.limit))
      commit('setStart', (state.page - 1) * state.limit)
      commit('setEnd', state.start + state.limit)
      commit('setClients', data.slice(state.start, state.end))
    },
    setPage({state, commit, dispatch}, page) {
      commit('setPage', page);
      commit('setStart', (state.page - 1) * state.limit)
      commit('setEnd', state.start + state.limit)
      commit('setClients', state.fakeClientsBase.slice(state.start, state.end))
    },
    setSearchQuery({state, commit, dispatch}, searchQuery) {
      commit('setSearchQuery', searchQuery);
      commit('setPage', 1);
      dispatch('setData');
    },
    setSearchDate({state, commit}, searchDate) {
      commit('setSearchDate', searchDate);
    },
  },
  modules: {
  }
})
