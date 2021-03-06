const common = {
  // Important! Do not remove ''. If you do, imports without
  // an extension won't work anymore!
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}


var path = require("path");
module.exports = {
  entry: {
    app: ["./main.js"]
  },
  module : {
  loaders: [{
      test: /\.jsx?$/,
      // Enable caching for improved performance during development
      // It uses default OS directory by default. If you need
      // something more custom, pass a path to it.
      // I.e., babel?cacheDirectory=<path>
      loaders: ['babel?cacheDirectory']
      // Parse only app files! Without this it will go through
      // the entire project. In addition to being slow,
      // that will most likely result in an error.
  }]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
