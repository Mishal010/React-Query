import express from "express";
import mongoose from "mongoose";
import Post from "./models/Post.js"; // your mongoose model

const app = express();

// GET /posts?start=0&limit=10
app.get("/posts", async (req, res) => {
  try {
    const start = parseInt(req.query.start) || 0; // offset
    const limit = parseInt(req.query.limit) || 10; // page size

    const posts = await Post.find()
      .skip(start) // skip "start" number of records
      .limit(limit); // fetch "limit" records

    // optional: total count for pagination UI
    const total = await Post.countDocuments();

    res.json({
      data: posts,
      total,
      limit,
      start,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
