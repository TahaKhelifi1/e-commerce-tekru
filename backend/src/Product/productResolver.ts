import { getProduct,listProduct,createProduct,updateProduct,deleteProduct } from "./productHelper";

const productResolvers = {
  Query: {
    getProduct: (_: any, args: { id: number }) => getProduct(_, args),
    listProduct: (_: any) => listProduct(),
  },
  Mutation: {
    createProduct:(_: any, args: { input: any }, context: any, info: any) => createProduct(_, args),
    updateProduct: (_: any, args: { id: string, input: any }, context: any, info: any) => updateProduct(_, args),
    deleteProduct:(_: any, args: { id: string }, context: any, info: any) => deleteProduct(_, args),
  },
};

export default productResolvers;
