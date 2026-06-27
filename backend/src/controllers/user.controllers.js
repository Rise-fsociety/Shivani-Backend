import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are the most important" });
    }

    //check if user already exist
    const existing = await User.findOne({ email: email.toLowerCase() });

    if (existing) {
      return res.status(400).json({ message: "User already exists!" });
    }

    //create user

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });

    res.status(201).json({
      message: "User registered",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
   const {email, password} = req.body

  const user = await User.findOne({
    email: email.toLowerCase()
  });

  if(!user) return res.status(404).json({message: "User not found"})

  } catch (error) {
    
  }
}


export { registerUser };
