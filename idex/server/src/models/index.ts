import sequelize from '../config/connection.js';
import { CommodityFactory } from './commodity.js';
import { UserFactory } from './user.js'
import { SectorFactory } from './sector.js'

const Commodity = CommodityFactory(sequelize);
const User = UserFactory(sequelize);
const Sector = SectorFactory(sequelize);

export { Commodity, User, Sector }