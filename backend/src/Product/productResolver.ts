import { getProduct,listProduct,createProduct,updateProduct,deleteProduct } from "./productHelper";

const productResolvers = {
  Query: {
    getProduct: (_: any, args: { id: number }) => getProduct(_, args),
    listProduct: (_: any) => listProduct(),
  },
  Mutation: {
    createProduct: (_: any, args: { ProductInput: any }) => createProduct(_, args),
    updateProduct: (_: any, args: { id: number, input: any }) => updateProduct(_, args),
    deleteProduct: (_: any, args: { id: number }) => deleteProduct(_, args),
  },
};

export default productResolvers;
