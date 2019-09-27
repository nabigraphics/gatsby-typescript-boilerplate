const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [SRC_DIR, "node_modules"]
    }
  });
};
