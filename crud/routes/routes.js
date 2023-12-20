import express from "express";
import executeQuery from "../data/repository.js";
import { create, executeSQL, getAll, remove } from "../data/connection _new.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).json({ message: "hello from the otherside" });
});

routes.post("/post", (req, res) => {
  const data = req.body;

  executeQuery(data);

  res.status(200).json({ ...data });
});

routes.post("/post/new", async (req, res) => {
  const data = req.body;

  const post = await executeSQL(create, data);

  res.status(200).json({ ...post });
});

routes.get("/post/new", async (req, res) => {
  const posts = await executeSQL(getAll);
  console.log(posts);

  res.status(200).json({ posts });
});

routes.delete("/post/new/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await executeSQL(remove, id);
    res.status(200).json({ ...result });
  } catch {
    console.log("catch 400");

    res.status(400).json({ message: "error" });
  }
});

export default routes;
