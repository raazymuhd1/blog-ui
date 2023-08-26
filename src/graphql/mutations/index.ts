import { gql } from "@apollo/client"

export const REGISTER_USER = gql`
    mutation RegisterUser($user: RegisterUserInput!) {
        register(user: $user) {
            name
            email
        }
    }
`
export const LOGIN_USER = gql`
    mutation RegisterUser($user: LoginUserInput!) {
        register(user: $user) {
            name
            email
        }
    }
`