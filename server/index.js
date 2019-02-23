const { ApolloServer, gql } = require('apollo-server')
const resolvers = require('./resolvers.js')

const typeDefs = gql`
type Query {
  songsFromNotes (notes: String!): [song]!
  songsFromName (name: String!): [song]!
}

type song {
  name: String
}
`

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log('Server ready at', url)
})
