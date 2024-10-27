import { userBaseSchema } from '@/modules/user/dtos/user.graphql-schema';

const userCreateSchema = `
  input PutUserPayload {
    ${userBaseSchema}
  }

  type PutUserResponse {
    id: ID!
  }

  type Mutation {
    putUser(input: PutUserPayload!): PutUserResponse!
  }
`;

export default userCreateSchema;
