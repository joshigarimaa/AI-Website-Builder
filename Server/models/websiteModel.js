const { default: mongoose } = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["ai", "user"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const websiteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "Untitled Website",
    },
    latestCode: {
      type: String,
      required: true,
    },
    conversation: [messageSchema],
    deployed: {
      type: Boolean,
      default: false,
    },
    deployURL: {
      type: String,
    },
    slug: {
      type: String,
      unique:true
    },
  },
  { timestamps: true },
);

module.exports=mongoose.model("Website",websiteSchema)