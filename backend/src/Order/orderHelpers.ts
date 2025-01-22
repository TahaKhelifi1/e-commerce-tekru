import Order from './models/Order.models';

interface OrderInput {
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  status: string;
}

export const getOrder = async (_: any, { id }: { id: number }) => {
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }
    return order;
  } catch (error: any) {
    throw new Error(`Failed to get the order with id ${id}: ${error.message}`);
  }
};

export const listOrders = async () => {
  try {
    return await Order.findAll();
  } catch (error: any) {
    throw new Error(`Failed to get the list of orders: ${error.message}`);
  }
};

export const createOrder = async (_: any, { OrderInput }: { OrderInput: any }) => {
  try {
    return await Order.create(OrderInput);
  } catch (error: any) {
    throw new Error(`Failed to add new order: ${error.message}`);
  }
};

export const updateOrder = async (_: any, { id, input }: { id: number, input: OrderInput }) => {
  try {
    const [affectedRows, updatedOrder] = await Order.update(input, {
      where: { id },
      returning: true,
    });

    if (affectedRows === 0) {
      throw new Error(`Order with id ${id} not found`);
    }

    return updatedOrder[0];
  } catch (error: any) {
    throw new Error(`Failed to update the order with id ${id}: ${error.message}`);
  }
};

export const deleteOrder = async (_: any, { id }: { id: number }) => {
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }

    await Order.destroy({ where: { id } });
    return order;
  } catch (error: any) {
    throw new Error(`Failed to delete the order with id ${id}: ${error.message}`);
  }
};
