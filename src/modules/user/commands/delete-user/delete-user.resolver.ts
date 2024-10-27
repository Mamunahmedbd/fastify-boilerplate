import {
  deleteUserCommand,
  DeleteUserCommandResult,
} from './delete-user.handler';
import { NotFoundException } from '@/shared/exceptions';
import { ErrorWithProps } from 'mercurius';

export default async function createUserResolver(
  fastify: FastifyRouteInstance,
) {
  fastify.graphql.defineResolvers({
    Mutation: {
      deleteUser: async (_, arg) => {
        try {
          console.log({ id: arg.id });
          const userId = arg.id as string;
          const id = await fastify.commandBus.execute<DeleteUserCommandResult>(
            deleteUserCommand({ id: userId || '' }),
          );

          if (!id) {
            throw new NotFoundException();
          }

          return { id: userId };
        } catch (error) {
          console.log({ error });
          if (error instanceof NotFoundException) {
            throw new ErrorWithProps(error.message, {
              code: 'USER_NOT_FOUND',
              timestamp: Math.round(Date.now() / 1000),
            });
          }
          throw error;
        }
      },
    },
  });
}
