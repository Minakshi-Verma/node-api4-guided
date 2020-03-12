const server = require('./api/server.js');
//make the post be assigned by the server
//heroku will place the .PORT environment value on their server
const port = process.env.PORT || 4000

// const port = 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


//Add astart script to package.json, heroku default run on start script which uses node to run the server(API) and not nodemon