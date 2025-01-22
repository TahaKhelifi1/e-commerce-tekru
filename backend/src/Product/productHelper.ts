import Product from './models/Product.model';

interface ProductInput {
  name: string;
  price: string;
  description: string;
  stock: number;
  category: string;
}

export const getProduct = async (_: any, { id }: { id: number }) => {
  try {
    return await Product.findByPk(id);
  } catch (error: any) {
    throw new Error(`Failed to get the product with id ${id}: ${error.message}`);
  }
};

export const listProduct = async () => {
  try {
    return await Product.findAll();
  } catch (error: any) {
    throw new Error(`Failed to get the list of products: ${error.message}`);
  }
};

export const createProduct = async (_: any, { ProductInput }: { ProductInput: any }) => {
  try {
    return await Product.create(ProductInput);
  } catch (error: any) {
    throw new Error(`Failed to add new product: ${error.message}`);
  }
};

export const updateProduct = async (_: any, { id, input }: { id: number, input: ProductInput }) => {
  try {
    await Product.update(input, { where: { id } });
    return await Product.findByPk(id);
  } catch (error: any) {
    throw new Error(`Failed to update the product with id ${id}: ${error.message}`);
  }
};

export const deleteProduct = async (_: any, { id }: { id: number }) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await Product.destroy({ where: { id } });
      return product;
    } else {
      throw new Error(`Product with id ${id} not found.`);
    }
  } catch (error: any) {
    throw new Error(`Failed to delete the product with id ${id}: ${error.message}`);
  }
};
