const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: String!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        me: [User]
    }

    type mutations {
        addUser(username: String!, email: String!, password: String!) : Auth
        login(email: String!, password: String!) : Auth
        saveBook(input: SavedBookInput): User
        removeBook(bookId: String!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;