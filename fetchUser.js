const axios = require('axios');

const fetchUser = async () => {
  try {
    const userResponse = await axios.get('https://randomuser.me/api');
    const user = userResponse.data.results[0];
    return user;
  } catch (error) {
    return { error };
  }
}

module.exports = fetchUser;