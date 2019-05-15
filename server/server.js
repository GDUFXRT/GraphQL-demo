import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import userModel from './model/userModel'
import resolvers from './graphql_api/resolvers'
import typeDefs from './graphql_api/schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ userModel })
})

const app = express()
server.applyMiddleware({ app })

// Restful can coexist with Graphql
app.use('/rest', (_, res) => res.send('rest api'))
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
