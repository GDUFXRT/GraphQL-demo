import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

import root from './api/resolvers'
import schema from './api/schema'

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: root,
    graphiql: true
  })
)
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
