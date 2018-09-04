const express = require('express');
const router=express.Router();
const axios = require('axios');

const scenarioData = 'http://localhost:2323/check';

router.get('/scenario',(req,res) => {
  return (
    axios.get(scenarioData)
      .then(response => res.json(response.data))
      .catch(err => console.log('Error in request'))
  )
});

module.exports = router;
