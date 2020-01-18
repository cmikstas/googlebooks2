const router = require("express").Router();
const searchRoutes = require("./search");
const bookRoutes = require("./books");

router.use("/search", searchRoutes);
router.use("/books", bookRoutes);

module.exports = router;