import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import userModel from './userModel'
import resolvers from './api/resolvers'
import typeDefs from './api/schema'

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { userModel }
  }
})

const app = express()
server.applyMiddleware({ app })

app.use('/rest', (_, res) => res.send('rest api'))
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
