import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//Now make this schema to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;