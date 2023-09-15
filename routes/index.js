var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/year", (req, res) => {
  const year = new Date().getFullYear().toString();
  res.json({ year: year });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
