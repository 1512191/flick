import axios from 'axios';
const key = '5834f5544beee04349ef10bf9b7af424';
const getList = (page, key) => axios.get(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${key}&extras=url_s%2Cowner_name%2Cviews&per_page=20&page=${page}&format=json&nojsoncallback=1`)
const getTag = (tag, page, key) => axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&extras=url_s&per_page=20&page=${page}&format=json&nojsoncallback=1`)
//  const key = '71bb3dc2fc4e572f5613d03922bf5d44';
const getphotoItem = (id, secret) => axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${key}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`);
export default { getList, key, getTag, getphotoItem };