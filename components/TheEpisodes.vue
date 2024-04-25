<template>
  <div>
    <div class="container mx-auto">
      <div class="section-header flex flex-col md:flex-row items-center gap-5">
        <select v-model="selected" class="select select-bordered w-32 max-w-xs">
          <option v-for="season in seasons" :key="season.id" :value="season.id">
            {{ season.label }}
          </option>
        </select>

        <h2 class="text-3xl text-gray-400 hidden md:block">|</h2>
        <h2 class="text-3xl text-gray-400">Rick and Morty</h2>
      </div>

      <div v-if="episodes.length" class="grid grid-cols-1 gap-10 mt-20">
        <div
          v-for="(ep, i) in episodes"
          :key="i"
          class="flex flex-col md:flex-row gap-5 mx-5 md:mx-0"
        >
          <div class="md:w-[60rem]">
            <img :src="getImagePath(selected)" class="w-full rounded-lg" />
          </div>
          <div>
            <h2 class="text-sky-400 text-2xl font-bold">
              {{ ep.episode }} - {{ ep.name }}
            </h2>
            <h2 class="text-2xl font-bold text-gray-400 mt-2">
              {{ ep.air_date }}
            </h2>
            <p class="mt-2 text-xl text-gray-400">
              An award-winning animated comedy series which follows the off-beat
              exploits of a mad scientist named Rick Sanchez and his
              impressionable grandson, Morty Smith. Together, the pair travel
              through time and space in a series of colourful misadventures.
            </p>
          </div>
        </div>
      </div>

      <div v-else role="alert" class="alert alert-error mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>No Found Data</span>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_EPISODES } from '@/composables/queries'
export default {
  data() {
    return {
      seasons: [
        { id: 'S01', label: 'Season 01', select: true },
        { id: 'S02', label: 'Season 02', select: false },
        { id: 'S03', label: 'Season 03', select: false },
        { id: 'S04', label: 'Season 04', select: false },
        { id: 'S05', label: 'Season 05', select: false },
        { id: 'S06', label: 'Season 06', select: false },
        { id: 'S07', label: 'Season 07', select: false },
      ],
      selected: 'S01',
    }
  },
  computed: {
    episodes() {
      return this.$store.getters.getEpisodes
    },
  },
  watch: {
    async selected(newValue, oldValue) {
      try {
        const { data } = await this.$apollo.query({
          query: GET_ALL_EPISODES,
          variables: {
            filter: {
              episode: newValue,
            },
          },
        })

        this.$store.commit('setEpisodes', data.episodes.results)
      } catch (error) {}
    },
  },
  methods: {
    getImagePath(imageName) {
      // This method constructs the path to the image
      // It uses the `require` function in a way that it can resolve the path correctly
      return require(`@/assets/image/seasons/${imageName}.webp`)
      // return require(`@/assets/image/episodes/${imageName}.webp`)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
