import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

const commonConfig: Configuration = {
  entry: "./src/index.tsx", // Entry point of your app
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolves JS, JSX, TS, and TSX files
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Regex to match TypeScript files
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // Use ts-loader for TypeScript
        },
      },
      {
        test: /\.(js|jsx)$/, // Regex to match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets for modern JS and React
          },
        },
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /(node_modules|\.module\.css$)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 8192, // or any other limit you prefer
            },
          },
        ],
      },

      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML file
      inject: true,
      favicon: "./public/favicon.ico",
    }),
  ],
};

export default commonConfig;
