const express = require("express");

// const dbase = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", function (req, res) {
  res.render("posts-list");
});

router.get("/new-posts", async function (req, res) {
  res.render("create-posts");
});

// router.post("/posts", async function (req, res) {
//   res.redirect("/posts");
// });

// router.get("/posts/:id", function (req, res) {
//   res.render("post-detail");
// });

// router.get("/posts/:id/edit", async function (req, res) {
//   res.render("update-post");
// });

// router.post("/posts/:id/edit", function (req, res) {
//   res.redirect("/posts");
// });

// router.post("/posts/:id/delete", async function (req, res) {
//   await dbase.query("DELETE FROM posts WHERE id=?", [req.params.id]);
//   res.redirect("/posts");
// });

module.exports = router;
