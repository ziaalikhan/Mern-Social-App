import express from 'express';
import mongoose from 'mongoose';
import Post from '../models/mongooseSchema.js';
const route = express.Router();

route.get("/get", async (req, res) => {
    const response = await Post.find({});
    res.status(200).send(response);
});


route.post("/post", async (req, res) => {
    const response = await new Post({
        title: req.body.title,
        message: req.body.message,
        creator: req.body.creator,
        tags: req.body.tags,
        selectedFile: req.body.selectedFile,
    }).save();
    res.status(200).send(response);
});

route.post("/delete", async (req, res) => {
    const filter = { _id: req.body._id };
    await Post.deleteOne(filter);
    res.status(200).send(req.body);
});


export default route;

