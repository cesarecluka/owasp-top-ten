export const state = () => ({
  list: []
})

export const mutations = {

  init(state, vulnerabilities) {
    state.list = vulnerabilities
  },

  add(state, new_vulnerability) {
    state.list.push(new_vulnerability)
    state.list.sort((a, b) => a.position - b.position)
  },

  remove(state, vulnerability) {
    state.list.splice(state.list.indexOf(vulnerability), 1)
  },

}

export const getters = {

  getBySlug: (state) => (slug) => {
    return state.list.find(el => el.slug === slug)
  },

}
