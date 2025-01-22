import { Model, DataTypes } from 'sequelize';
import {sequelize}  from '../../config/connection';

class User extends Model {
    public id!:number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public adress!: string;
    public phone_number!: string;
}
User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
