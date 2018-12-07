import axios from 'axios';

export function getActivities(lat, lng) {
  return axios.get(
    `http://ndlinfo.herokuapp.com/users/recommandations?lat=${lat}&lng=${lng}&sports=175`,
  );
}

export function getUser() {
  return axios.get('http://ndlinfo.herokuapp.com/users/1.json');
}
