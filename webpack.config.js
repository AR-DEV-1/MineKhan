const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

const isDevelopment = process.env.NODE_ENV === "development";

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject: "body",
  }),
];

let outputPath = "./dist";

if (isDevelopment && __dirname.includes("willard/server/dev")) {
  outputPath = "../../public/minekhan/beta";
} else if (
  isDevelopment &&
  __dirname.includes("/home/willard/Desktop/MineKhan")
) {
  const vpsPath = "/home/willard/vps";
  if (fs.existsSync(vpsPath) && fs.readdirSync(vpsPath).includes("server")) {
    outputPath = path.join(vpsPath, "server", "public", "minekhan", "beta");
  }
}

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(txt|glsl)$|workers\//i,
        use: "raw-loader",
      },
    ],
  },
  plugins,
  watch: isDevelopment,
  watchOptions: {
    aggregateTimeout: 100,
    ignored: "**/node_modules",
  },
  devtool: isDevelopment ? "eval-source-map" : false,
  optimization: {
    minimize: !isDevelopment,
  },
  performance: {
    hints: isDevelopment ? "warning" : "error",
  },
  devServer: {
    contentBase: path.resolve(__dirname, outputPath),
    compress: true,
    port: 9000,
  },
};
