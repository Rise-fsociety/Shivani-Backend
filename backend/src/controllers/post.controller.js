import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({ message: "All field are required" });
    }

    const post = await Post.create({ name, description, age });
    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPost = async (req, res) => {
  try {
    const user = await Post.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const uptadePost = async (req, res) => {
  try {
    // {}, {key:value} => [key, key] === 0 => return error
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Plz fill all field" });
    }

    const uptade = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!uptade) return res.status(400).json({ message: "Plz fill all field" });

    res.status(200).json({ message: "All uptaded successfully" });
  } catch (error) {
     res.status(500).json({ message: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
try {
    const user = await Post.findByIdAndDelete(req.params.id, req.body, {new: true})
        
    res.status(200).json({message:'User successfully deleted'})
} catch (error) {
    res.status(500).json({ message: "Internal server error" });
}
}

export { createPost, getPost, uptadePost, deletePost };
