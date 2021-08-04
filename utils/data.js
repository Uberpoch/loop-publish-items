exports.dataExample = async(data) => {
  data.map(item => {
    //do some things
    let obj = {
      name: item.name,
      details: item.details,
    }
    return obj;
  })
}