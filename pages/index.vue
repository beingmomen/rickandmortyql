<template>
  <!-- <div class="space-y-20 mb-24 bg-[#121212]"> -->
  <div class="space-y-20 mb-24">
    <TheHero />
    <TheEpisodes />
    <TheCharacters />
  </div>
</template>

<script>
import { GET_ALL_DATA } from '@/composables/queries'

export default {
  name: 'IndexPage',
  async asyncData({ app, store }) {
    const client = app.apolloProvider.defaultClient

    const { data } = await client.query({
      query: GET_ALL_DATA,
      variables: {
        filter: {
          episode: `S01`,
        },
        page: 1,
      },
    })

    // dispatch to main index in store
    await store.dispatch('getAllDataFromApi', data)
  },
}
</script>

<style lang="scss" scoped>
</style>
