import axios from 'axios';

export const getScenarioData = () => {
  return axios.get('http://localhost:4444/api/scenario')
    .then(res => res.data)
    .catch(err => console.log('Error in scenario call'));
}
