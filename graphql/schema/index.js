const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String
  createdEvents: [Event!]
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    events: [Event!]!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
