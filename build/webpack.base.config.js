const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板生成器
const utils = require("./utils.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// 获得js的主文件
const entryNames = Object.keys(utils.getEntry("./src/js/*.js"));
const entry = {};
entryNames.forEach(item => {
  entry[item] = path.resolve(__dirname, `../src/js/${item}.js`);
});

const baseConfig = {
  entry,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "img:data-src"]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader?cacheDirectory" } //开启 babel-loader 缓存 ?cacheDirectory
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10,
              name: "static/images/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "static/media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 1000,
          name: "static/media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "static/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  resolve: {
    // 该项配置能够在加载资源的时候省略后缀名
    extensions: [".js", ".json", ".css", ".scss"],
    // 配置路径别名
    alias: {
      "@src": path.resolve(__dirname, "../src"),
      "@assets": path.resolve(__dirname, "../src/assets/"),
      "@js": path.resolve(__dirname, "../src/js/"),
      "@sass": path.resolve(__dirname, "../src/sass/")
    }
  },
  plugins: [
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: "static",
        ignore: [".*"]
      }
    ])
  ]
};

// 获得html的主文件
const pages = Object.keys(utils.getEntry("./src/template/*.html"));
//生成HTML模板
pages.forEach(pathname => {
  var conf = {
    env: process.env.NODE_ENV,
    filename: pathname + ".html", //生成的html存放路径，相对于path
    template: path.resolve(__dirname, "../src/template/" + pathname + ".html"), //html模板路径
    favicon: path.resolve(__dirname, "../static/favicon.ico"),
    hash: false, //是否添加hash值
    minify: {
      //压缩HTML文件
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    }
  };
  conf.chunks = ["mainifest", "vendor", pathname];
  baseConfig.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = baseConfig;
