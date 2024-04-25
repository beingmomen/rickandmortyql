export const state = () => ({
  episodes: [],
  characters: [],
  charactersCount: 0,
  charactersPage: 1,
})

export const getters = {
  getEpisodes: (state) => state.episodes,
  getCharacters: (state) => state.characters,
  getCharactersCount: (state) => state.charactersCount,
  getCharactersPage: (state) => state.charactersPage,
}

export const actions = {
  getAllDataFromApi({ commit }, payload) {
    commit('setEpisodes', payload.episodes.results)
    commit('setCharacters', payload.characters.results)
    commit('setCharactersCount', payload.characters.info.count)
    commit('setCharactersPage', payload.characters.info.pages)
  },
  handleEpisodes({ commit }, payload) {
    commit('setEpisodes', payload)
  },
}

export const mutations = {
  setEpisodes(state, payload) {
    state.episodes = payload
  },
  setCharacters(state, payload) {
    state.characters = payload
  },
  setCharactersCount(state, payload) {
    state.charactersCount = payload
  },
  setCharactersPage(state, payload) {
    state.charactersPage = payload
  },
}
