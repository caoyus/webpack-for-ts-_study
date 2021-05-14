## about typescript

### 基本数据类型

### 接口 interface,枚举 enum

### class

### 多态

### 类的修饰符

package.json

```json
{
  "name": "01-webpack-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve --config build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^3.5.5",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.3",
    "html-webpack-plugin": "^4.5.1",
    "ts-loader": "^8.0.14",
    "typescript": "^4.1.3",
    "webpack": "^5.19.0",
    "webpack-cli": "^4.4.0",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "jquery": "^3.6.0"
  }
}
```

webpack 相关配置:

```jsx
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    app: "./src/main.ts",
  },

  output: {
    path: resolve("dist"),
    filename: "[name].[contenthash:8].js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [resolve("src")],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  devtool: isProd ? "cheap-module-source-map" : "eval-cheap-source-map",

  devServer: {
    contentBase: "./dist",
    host: "localhost",
    stats: "errors-only", // 打包日志输出输出错误信息
    port: 3000,
    open: true,
  },
};
```
