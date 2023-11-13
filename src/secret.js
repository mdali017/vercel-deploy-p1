require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 4001;
const mongodbURL = process.env.MONGODB_ATLAS_URL;

module.exports = { serverPort, mongodbURL };
