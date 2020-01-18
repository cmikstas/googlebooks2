const router = require("express").Router();
const axios = require("../../client/node_modules/axios");

require("../../client/node_modules/dotenv").config();
const keys = require("../../keys");

router.get("/:search", (req, res, next) =>
{
    //console.log(keys);
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search  + "&key=" + keys.google.key)
    .then(data => res.json(data.data))
    .catch(err => next(err));
})

module.exports = router;