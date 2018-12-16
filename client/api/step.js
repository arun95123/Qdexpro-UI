import axios from 'axios';

export const getSeleniumScript = () => {
  return axios.get('http://localhost:4444/api/step')
    .then(res => {
      console.log('In Client API');
      return res.data})
    .catch(err => console.log('Error in step call'));
}
