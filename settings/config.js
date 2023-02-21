require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN || "YOUR_TOKEN",
    EMBED_COLOR: process.env.EMBED_COLOR || "#000001",
    OWNER_ID: process.env.OWNER_ID || "YOUR_CLIENT_ID",
    DEV_ID: ["YOUR ID"],
}
