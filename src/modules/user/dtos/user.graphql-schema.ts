export const userBaseSchema = `
    email: String!
    country: String!
    postalCode: String!
    street: String!
`;

const userSchema = `

  enum UserRole {
    admin
    moderator
    guest
  }

  type Users {
    id: ID!
    role: UserRole!
    ${userBaseSchema}
  }
`;

export default userSchema;
