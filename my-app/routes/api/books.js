const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);
  

router.route("/:id")
    .delete(booksController.remove)
    .get(booksController.findByTitle);

module.exports = router;