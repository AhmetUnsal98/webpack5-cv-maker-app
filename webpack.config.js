const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i, // (1)
        type: "asset/resource",
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack & React App",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
