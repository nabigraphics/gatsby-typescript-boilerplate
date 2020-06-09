module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layouts/index.tsx"),
      },
    },
  ],
};
