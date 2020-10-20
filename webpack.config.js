const HTMLWebPackPlugin=require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

var path = require('path');
module.exports={
    entry: [
        './src/js/index.js'
      ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
      },
    module:{
    
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",               
                }
            },
            {
                test:/\.html$/,
                    use:[
                        {
                            loader:'html-loader',
                            options:{minimize:true}
                        }
                    ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        publicPath: 'images',
                        outputPath: 'images',
                        esModule: false
                      }
                  },
                ],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
        ]
    },
    plugins:[
        new HTMLWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
}