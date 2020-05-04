const bcrypt = require('bcryptjs');

const { User } = require('../../src/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });
  
  it("should encrypt user password", async () => {
    const user = await User.create({
      name: 'Thales',
      email: 'thalestestoni@gmail.com',
      password: '12354'
    });
  
    const compareHash = await bcrypt.compare('12354', user.password_hash);
  
    expect(compareHash).toBe(true);
  });
});
