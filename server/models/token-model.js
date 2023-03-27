const { Schema, model } = require("mongoose");

const TokenChema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

module.exports = model("Token", TokenChema);
