import { Model, DataTypes } from 'sequelize';
import {sequelize}  from '../../config/connection';

class Order extends Model {
  public id!: number;
  public userId!: number;
  public productId!: number;
  public quantity!: number;
  public totalPrice!: number;
  public status!: string;
  public createdAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

//Order.beforeSync(() => console.log('Create table for Order'));
//Order.afterSync(() => console.log('Table created for Order'));

export default Order;
