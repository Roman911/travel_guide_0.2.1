import { gql } from 'apollo-boost'

export const ALL_LOCATIONS = gql`
  query locations {
    locations {
      _id
      coordinates
      isType
    }
  }
`

export const LOCATION = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      _id
      title
      small_text
      address
      coordinates
      cover {
        url
      }
    }
  }
`

export const LOCATIONS_SORT = gql`
  query locationsSortByType($type: [String]) {
    locationsSortByType(type: $type) {
      _id
      coordinates
      isType
    }
  }
`

export const LOCATIONS_SORT_BY_ID = gql`
  query locationsSortById($_id: [ID]) {
    locationsSortById(_id: $_id) {
      _id
      coordinates
      isType
    }
  }
`