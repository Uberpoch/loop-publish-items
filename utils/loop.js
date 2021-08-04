import { callExample } from './call';

exports.loopExample = async(token) => {
  let url = 'https://v2.api.uberflip.com/items?limit=100&page=1';
  let page = 0;
  let totalPages = 0;
  let array = [];

  do{
    let res = await callExample(token, url);
    totalPages = res.meta.total_pages;
    page++;
    url = url + `?page=${page}`;
    console.log(`called: page ${page} of ${totalPages}`);
    array = array.concat(res.data);
    console.log(`array length: ${array.length}`);

  } while (page < totalPages)
  return array;
}