import User from './models/User.models';

interface UserInput {
  name: string; // Changed `nom` to `name` for consistency with the model
  email: string;
  password: string;
  role: string; // Added `role` to match the model
  address: string; // Added `address` to match the model
  phone_number: string; // Added `phone_number` to match the model
}


//getUser function
export const getUser = async (_: any, { id }: { id: string }) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error: any) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};


//getUsers function
export const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error: any) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

//createUser function
export const createUser = async (_: any, { input }: { input: any }) => {
  try {
   const existingUser = await User.findOne({ where: { email: input.email } });
    if (existingUser) {
      throw new Error('Email already in use');
    }
    return await User.create(input);
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
      // Provide detailed validation error messages
      const messages = error.errors.map((e: any) => e.message).join(', ');
      throw new Error(`Validation error: ${messages}`);
    }
    throw new Error(`Error creating user: ${error.message}`);
  }
};


//updateUser function
export const updateUser = async (_: any, { id, input }: { id: string; input: UserInput }) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.update(input);
    return user;
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
      throw new Error(`Validation error: ${error.errors.map((e: any) => e.message).join(', ')}`);
    }
    throw new Error(`Error updating user: ${error.message}`);
  }
};


//deleteUser function
export const deleteUser = async (_: any, { id }: { id: string }) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return user; // Return the deleted user's data
  } catch (error: any) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
