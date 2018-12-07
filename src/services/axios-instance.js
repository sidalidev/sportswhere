import axios from 'axios';

export default axios.create({
  baseURL: 'http://ndlinfo.herokuapp.com',
  headers: { 'Access-Control-Allow-Origin': '*' },
});
