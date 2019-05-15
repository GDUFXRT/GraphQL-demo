import { gql } from 'apollo-server-express'

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

const typeDefs = gql`
  type Query {
    testString: String
    user(name: String!): User
    allUsers: [User]
  }

  type User {
    id: Int
    name: String
    bestFriend: User
    followingUsers: [User]
  }
  # The "Mutation" type is the root of all GraphQL mutations.
`

// # To support String、Int、Float、Boolean and ID
// # The use of exclamation marks (!) marks a type as non-null

// type Student {
//   id: ID
//   name: String
//   class: String
//   courses: [Course]
// }

// type Teacher {
//   id: ID
//   name: String
// }

// type Course {
//   id: ID
//   name: String
//   teachers: [Teacher]
// }

// # The "Query" type is the root of all GraphQL queries.
// type Query {
//   getStudent(id: ID!): Student
//   getTeacher(id: ID!): Teacher
//   getCourse(id: ID!): Course
// }

export default typeDefs
