import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
 
dotenv.config();


// Configuration de la connexion à MySQL via Sequelize
const sequelize = new Sequelize("ecommerce_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, 
});

// Test de la connexion à la base de données
async function connection(){
    try {
        await sequelize.authenticate();
        console.log('\n🚀      Connection to Mysql Database was succesful');
       await sequelize.sync({force:true});
        console.log('\n🔄      Models synchronized with the database');
       
      } catch (error) {
        console.error('\n❌    Unable to connect to the database:', error);
      }
}

export { connection, sequelize };
