import express from "express";
import { executeSQL } from "../data/connection/index.js";
import {
  create,
  getAll,
  getPost,
  remove,
  updatePost,
} from "../data/repository/post/index.js";

const routes = express.Router();

routes.post("/post/new", async (req, res) => {
  const data = req.body;

  const dataPromise = create(data);
  const post = await executeSQL(dataPromise);

  res.status(200).json({ ...post });
});

routes.get("/post/new", async (req, res) => {
  const dataPromise = getAll();
  const posts = await executeSQL(dataPromise);

  res.status(200).json({ posts });
});

routes.delete("/post/new/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const dataPromise = remove(id);
    const result = await executeSQL(dataPromise);

    res.status(200).json({ ...result });
  } catch {
    res.status(400).json({ message: "error" });
  }
});

routes.get(`/post/new/:id`, async (req, res) => {
  const id = req.params.id;

  const dataPromise = getPost(id);
  const result = await executeSQL(dataPromise);

  res.status(400).json(result);
});

routes.put(`/post/new/:id`, async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const dataPromise = updatePost(id, body);

  const result = await executeSQL(dataPromise);

  res.status(400).json(result);
});

export default routes;
