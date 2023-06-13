const path = require("path");
const context = path.resolve(__dirname, "./pages/");
module.exports = {
    mode: "development",
    context,
    resolve: {
        extensions: [".js"],
        modules: [context, "node_modules"]
    },
    entry: {
        app: "index.js"
    }
}