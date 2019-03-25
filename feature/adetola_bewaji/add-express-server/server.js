const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() =>{
    const server = express();
    server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    const showRoutes = require('./routes/server.js')
    server.use("/api", showRoutes);

    server.get("/api/shows", ( req, res) => {
      return res.end('We made it');
    });

    server.get("*", ( req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on ${PORT}');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1)
  })
