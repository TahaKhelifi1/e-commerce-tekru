import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/connection';

class User extends Model {
    static find(arg0: { where: { email: any; }; }) {
      throw new Error('Method not implemented.');
    }
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public address!: string; // Fixed typo: 'adress' -> 'address'
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
        unique: true, // Add unique constraint for email
        /*validate: {
            isEmail: true, // Ensure valid email format
        },*/
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        /*validate: {
            is: /^[0-9]{10,15}$/, // Example regex for phone number validation
        },*/
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
