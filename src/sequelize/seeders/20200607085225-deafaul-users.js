import bcrypt from 'bcrypt';
import 'dotenv/config';

const userPass = bcrypt.hash(process.env.USER_PASS, 10);

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    job_id: 'M001',
    name: 'Musinda Kadhuwa',
    email: 'justinemsinda@gmail.com',
    password: await userPass,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
