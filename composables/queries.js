import gql from 'graphql-tag'

export const GET_ALL_EPISODES = gql`
  query GetEpisodesOfSeason($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`

export const GET_ALL_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`

export const GET_ALL_DATA = gql`
  query getAllData($filter: FilterEpisode, $page: Int) {
    episodes(filter: $filter) {
      results {
        id
        name
        episode
        air_date
      }
    }
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`
