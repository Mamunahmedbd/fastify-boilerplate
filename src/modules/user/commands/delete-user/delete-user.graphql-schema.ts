const userCreateSchema = `
  type DeleteUserResponse {
    id: ID!
  }

  type Mutation {
    deleteUser(id: ID!): DeleteUserResponse!
  }
`;

export default userCreateSchema;
