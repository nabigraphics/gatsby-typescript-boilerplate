const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const config = getConfig();

  // fix react-hot-loader issue with use react v16.8.0^
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [SRC_DIR, "node_modules"]
    }
  });
};
