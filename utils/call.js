const axios = require('axios');
exports.callExample = async(token, url) => {
  return await axios.get(url, {
    headers: { 
        'Authorization': `Bearer ${token}`,
        'User_Agent': `Nathan UF`
    }
  })
  .catch (err => {
    console.log('Error', err.message);
  })
  .then(res => {
    return res.data;
  });
}