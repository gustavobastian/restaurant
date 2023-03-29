const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'development', 
  entry: {
    index:{
      import:'./src/index.js',
      dependOn: 'home',}
      ,
    home:{
      import:'./src/home.js',
    }
    ,
    menu:{
      import:'./src/menu.js',
    },
    contact:{
      import:'./src/contact.js',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    //filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};