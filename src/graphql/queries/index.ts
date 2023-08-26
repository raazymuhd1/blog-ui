import { gql } from "@apollo/client"

const GET_USER = gql`
    query GetUser($userId: ID!) {
        user(id: $userId) {
            id
            name
            email
            image
            bannerImage
        }
    }
`

const GET_ALL_USERS = gql`
    query GetAllUser {
        user {
            id
            name
            email
            image
            bannerImage
        }
    }
`

export { GET_USER, GET_ALL_USERS }