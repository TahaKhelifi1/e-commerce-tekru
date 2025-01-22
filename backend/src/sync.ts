import {sequelize} from './config/connection';
import User from './User/models/User.models';
import Product from './Product/models/Product.model';
import Order from './Order/models/Order.models';

const syncDatabase = async () => {
  const models = [
    { name: 'users', model: User },
    { name: 'products', model: Product },
    { name: 'orders', model: Order }
  ];

  const table = await sequelize.getQueryInterface().showAllTables();
  console.log('Starting database synchronization...');

  try {
    for (const { model } of models) {
      if (table.includes(model.tableName)) {
        console.log(`Table ${model.tableName} already exists.`);
      } else {
        await model.sync(); // Sync each model individually
        console.log(`Table ${model.tableName} created successfully.`);
      }
    }
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

export default syncDatabase;
