// import axiosInstance from './axios-instance';
import axios from 'axios';

// export default function getActivities() {
//   return axiosInstance.get('/users/recommandations?lat=-73.582&lng=45.511&sports=175');
// }

export function getUser() {
  return axios.get('http://ndlinfo.herokuapp.com/users/1.json');
}
