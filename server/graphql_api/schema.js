import { gql } from 'apollo-server-express'

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # To support String, Int, Float, Boolean and ID
  # The use of exclamation marks (!) marks a type as non-null

  type Student {
    id: ID
    name: String
    class: String
    courses: [Course]
  }

  type Teacher {
    id: ID
    name: String
  }

  type Course {
    id: ID
    name: String
    teachers: [Teacher]
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    getStudent(id: ID!): Student
    getTeacher(id: ID!): Teacher
    getCourse(id: ID!): Course
  }

  # The "Mutation" type is the root of all GraphQL mutations.
  type Mutation {
    setStudent(name: String!, classId: String!, coursesIds: [String]!): Student
  }
`

export default typeDefs
