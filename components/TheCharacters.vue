<template>
  <div>
    <div class="container mx-auto">
      <div class="section-header flex flex-col md:flex-row items-center gap-5">
        <h2 class="text-4xl font-black">Characters</h2>

        <h2 class="text-3xl text-gray-400 hidden md:block">|</h2>
        <h2 class="text-3xl text-gray-400">Rick and Morty</h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-10">
        <div
          v-for="character in characters || []"
          :key="character.id"
          class="flex flex-col justify-center items-center"
        >
          <img
            class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
            :src="character.image"
            :alt="character.name"
          />

          <h3 class="text-white font-black">{{ character.name }}</h3>
        </div>
      </div>

      <div class="flex justify-center py-10">
        <div class="join">
          <button
            class="join-item btn"
            :disabled="page === 1"
            @click="paginatedDate('dec')"
          >
            «
          </button>
          <button class="join-item btn">
            Page {{ page }} from {{ pages }}
          </button>
          <button
            class="join-item btn"
            :disabled="page === pages"
            @click="paginatedDate('inc')"
          >
            »
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_CHARACTERS } from '@/composables/queries'
export default {
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters
    },
    pages() {
      return this.$store.getters.getCharactersPage
    },
  },
  methods: {
    async paginatedDate(path) {
      if (path === 'inc') {
        this.page++
      } else {
        this.page--
      }

      try {
        const { data } = await this.$apollo.query({
          query: GET_ALL_CHARACTERS,
          variables: {
            page: this.page,
          },
        })

        this.$store.commit('setCharacters', data.characters.results)
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
