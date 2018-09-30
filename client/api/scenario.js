import axios from 'axios';

export const getScenarioData = () => {
  return axios.get('http://localhost:4444/api/scenario')
    .then(res => res.data)
    .catch(err => console.log('Error in scenario call'));
}

export const postScenarioData = (data) => {
  return axios.post('http://localhost:4444/api/saveScenario', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
