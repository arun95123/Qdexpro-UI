const axios = require('axios');

const isPortAvailable = (port) => axios.get('/',{baseURL: `http:localhost:${port}`})
  .then((res) => false)
  .catch((err) => err.code === 'ECONNREFUSED');

const startServer = (name,port) => isPortAvailable(port).then(isAvailable => {
  if(isAvailable) {
    require(`./${name}`).listen(port);
    console.info(`Started ${name} fake service on port ${port}`);
  }
});

startServer('qdex',2323);
