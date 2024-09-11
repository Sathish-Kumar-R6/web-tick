import path from "path";
import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import commonConfig from "./webpack.common";

const prodConfig: Configuration = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js", // Use content hashes for caching
    clean: true, // Clean the output directory before each build
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Split vendor code into separate bundles
    },
  },
});

export default prodConfig;
