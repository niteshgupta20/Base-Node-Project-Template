const express = require('express');

const { serverConfig } = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${serverConfig.PORT}`);
});
