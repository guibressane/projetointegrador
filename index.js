const { router } = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express')
// const knex = require('./config/knex')

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app = router(app);

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => console.log(`Application running on port: ${port}`));
