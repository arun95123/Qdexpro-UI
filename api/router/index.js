const express = require('express');
const router=express.Router();
const axios = require('axios');

const gameData = 'http://localhost:3000/game_data';

router.get('/game_data',(req,res) => {
  return (
    axios.get(gameData)
      .then(response => res.json(response.data))
      .catch(err => console.log('Error in request'))
  )
});

module.exports = router;
