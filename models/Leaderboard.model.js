const { Schema, model } = require("mongoose");

const leaderboardSchema = new Schema(
  {
    userPosition: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Leaderboard = model("User", leaderboardSchema);

module.exports = Leaderboard;
