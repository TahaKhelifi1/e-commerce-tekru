import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } from './UserHelper';
  
  const userResolvers = {
    Query: {
      getUser: (_: any, args: { id: string }, context: any, info: any) => getUser(_, args),
      getUsers: (_: any, args: any, context: any, info: any) => getUsers(),
    },
    Mutation: {
      createUser: (_: any, args: { input: any }, context: any, info: any) => createUser(_, args),
      updateUser: (_: any, args: { id: string, input: any }, context: any, info: any) => updateUser(_, args),
      deleteUser: (_: any, args: { id: string }, context: any, info: any) => deleteUser(_, args),
    },
  };
  
  export default userResolvers;
  