const axios = require('axios');
exports.call = async(token, item) => {
  let url = `https://v2.api.uberflip.com/items/${item.item_id}/publish`;
  let body = {published_at: item.published_at};

  return await axios.post(url, body, {
    headers: { 
        'Authorization': `Bearer ${token}`,
        'User_Agent': `Nathan UF`
    }
  })
  .catch (err => {
    console.log('Error', err.message);
    // console.log(`error on ${url}, ${body.published_at}`);
    return err;
  })
  .then(res => {
    return res;
  });
}