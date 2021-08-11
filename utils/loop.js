const { call } = require('./call');

exports.loop = async(token, ogItems) => {
  let array = [];
  let errArray = [];
  
  for(let i = 0; i < ogItems.length; i++) {
    let res = await call(token, ogItems[i]);
    let status = res.request.res.statusCode;
    let obj = {path: res.config.url,
              status: res.status}
    if(status !== 200 && status !== 204 && status !== 201) {
      errArray.push(obj);
    } else {
      array.push(obj);
    }
    console.log(`${array.length} of ${ogItems.length} responses`);
  }
  return [array, errArray];
}