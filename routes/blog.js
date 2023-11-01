const express = require("express");

const mongodb = require("mongodb");

const db = require("../data/database");

const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", function (req, res) {
  res.render("posts-list");
});

router.get("/new-posts", async function (req, res) {
  const authors = await db.getDb().collection("authors").find().toArray();
  // console.log(authors);
  res.render("create-posts", { authors: authors });
});
router.post("/posts", async function (req, res) {
  const authorId = new ObjectId(req.body.author);
  const author = await db
    .getDb()
    .collection("authors")
    .findOne({ _id: authorId });
  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };
  const result = await db.getDb().collection("posts").insertOne(newPost);
  console.log(result);
  res.redirect("/posts");
});

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
