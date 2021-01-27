const { TestScheduler } = require('jest');
const fetchUser = require('./fetchUser');

test('fetch user object from api', async () => {
  const user = await fetchUser();
  awaitexpect(user).toHaveProperty('name');
})