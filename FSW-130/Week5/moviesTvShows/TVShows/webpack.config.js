module.exports = {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    public: "http://localhost:8080"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/
      }
    ]
  }
};
