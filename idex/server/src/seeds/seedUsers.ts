import { User } from "../models/index.js";

export const seedUsers = async () => {
    await User.bulkCreate([
        {username: 'alex', password: '1234', email: 'alex@gmail.com'},
        {username: 'luis', password: '1234', email: 'luis@gmail.com'}
], { individualHooks: true })
}