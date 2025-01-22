import User from './models/User.models';

interface UserInput {
  nom: string;
  email: string;
  password: string;
}

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

export const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error: any) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

export const createUser = async (_: any, { input }: { input: any }) => {
  try {
    const existingUser = await User.findOne({ where: { email: input.email } });
    if (existingUser) {
      throw new Error('Email already in use');
    }
    return await User.create(input);
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const updateUser = async (_: any, { id, input }: { id: string, input: UserInput }) => {
  try {
    const [affectedCount, [updatedUser]] = await User.update(input, {
      where: { id },
      returning: true,
    });
    if (affectedCount === 0) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
      throw new Error(`Validation error: ${error.errors.map((e: any) => e.message).join(', ')}`);
    }
    throw new Error(`Error updating user: ${error.message}`);
  }
};

export const deleteUser = async (_: any, { id }: { id: string }) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await User.destroy({ where: { id } });
    return user;
  } catch (error: any) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
