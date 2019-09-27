module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layouts/index.tsx")
      }
    }
  ]
};
