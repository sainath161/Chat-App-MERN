import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      // select: false, //hides the password field when we query a document
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
