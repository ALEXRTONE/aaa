import sequelize from '../config/connection.js';
import { CommodityFactory } from './commodity.js';
import { UserFactory } from './user.js'

const Commodity = CommodityFactory(sequelize);
const User = UserFactory(sequelize);

export { Commodity, User }