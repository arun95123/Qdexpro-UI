const express = require('express');
const router=express.Router();
const axios = require('axios');

const scenarioData = 'http://localhost:2323/check';
const saveScenario = 'http://qdexproapp-env.phkgkyj2e2.us-east-2.elasticbeanstalk.com/insertScenarioDetails'

router.get('/scenario',(req,res) => {
  return (
    axios.get(scenarioData)
      .then(response => res.json(response.data))
      .catch(err => console.log('Error in request'))
  )
});

router.post('/saveScenario', (req,res) => {
  return (
    axios.post(saveScenario,req.body)
      .then(response => {
        console.log('post request to service')
        return response;
      })
      .catch(err => console.log('Error in request',err))
    )
});

module.exports = router;
