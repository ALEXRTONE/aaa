import { seedCommodities } from './seedCommodities.js';
import { seedSector } from './seedSector.js';
import { seedUsers } from './seedUsers.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedCommodities();
    console.log('\n----- COMMODITIES SEEDED -----\n');

    await seedSector();
    console.log('\n----- SECTORS SEEDED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
