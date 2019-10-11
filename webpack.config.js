const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/lib/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist/lib"),
    filename: "index.js",
    library: "progressbar-ui",
    libraryTarget: "umd"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    "prop-types": {
      root: "PropTypes",
      commonjs2: "prop-types",
      commonjs: "prop-types",
      amd: "prop-types"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
