// import { number, string } from "joi";
// import mongoose from "mongoose";

import { ObjectId } from "mongodb";
import { client } from "../index.js";

const project = new mongoose.Schema({
    title: {
        type: String,
        unique: true // `email` must be unique
    },
    description: String,
    task: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            index: Number,
            attachment: [
                { type: String, url: String }
            ],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true })


export default mongoose.model('Project', project);


export async function addProject(data) {
  return await client
      .db("PMT")
      .collection("projects")
      .insertMany(data);
}