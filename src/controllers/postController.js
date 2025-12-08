import Post from "../models/postModel.js";

// Create a new post

export const createPost =async (req,res) =>{
try{
if(!req.body.title || !req.body.content){
    return res.status(400).json({message:"Title and Content are required"});
};

const post = await Post.create(req.body);
res.status(201).json(post);
}
catch(err){
    res.status(500).json({message:err.message});
}
};
 
// Get all posts
export const getPost = async (req,res) =>{
    try{
    const posts = await Post.find({});
    res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
 //delete post

 export const deletePost = async (req,res)=>{
    try{
const postId = await Post.findByIdAndDelete(req.params.id);
if(!postId){
    return res.status(404).json({message:"post not found"});
}
 res.status(200).json({message:"post deleted successfully"});     }
    catch(err){
        res.staus(500).json({message:err.message})
    }
 }

 //update post

 export const updatePost =async(req,res)=>{
    try{
const post = await Post.findByIdAndUpdate(req.params.id, req.body,{new:true});
 if(!post){
    return res.status(404).json({message:"post not found"});
 }
res.status(200).json(post);
    }
    catch(err)
    {
res.status(500).json({ error: err.message });
    }
 }
