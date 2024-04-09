import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // reference to the user who sent this message
      ref: "User", // name of the model in which it is referenced
      required: true, // field is required in order for validation to pass
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    // createdAt, updatedAt
  },
  { timestamps: true }
); // adds createdAt and updatedAt fields with default values

const Message = mongoose.model("Message", messageSchema);

export default Message;
