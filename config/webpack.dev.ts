import path from "path";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = merge(commonConfig, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map", // For easier debugging
  devServer: {
    static: path.join(__dirname, "../dist"),
    hot: true, // Enable Hot Module Replacement
    port: 3000,
    open: true, // Opens the browser after starting the server
  },
});

export default devConfig;
