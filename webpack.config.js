var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  resolve: {
      alias: [
        {'angular-chart': '../angular-chart.js'}
      ],
      extensions: ['', '.js', '.css'],
      modulesDirectories: ['web_modules', 'node_modules', 'bower_components']
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9]|\?[a-z0-9]+)?$/, loader: 'url-loader' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' }, 
       { test: /\.(jpe?g|png|gif|mp3)$/, loader: 'url?limit=25000' },
       { test: /\.json$/, loader:'json'},
       { test: /\.csv$/, loader:'csv'},
       { test: /\.txt$/, loader:'dsv-loader'}
    ]
  },
  externals: {
    jQuery: 'jQuery',
    $: 'jQuery'
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    }),

    

    // For bower
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),

    // for third party libraries that require jquery
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }), 

    // copies over static assets(json, images, etc) to static folder
    new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/
            { from: 'client/**/*', to: 'static/', flatten: true },
        ], {
            ignore: [
                // Doesn't copy any files with the following extensions    
                '*.txt',
                '*.js',
                '*.html',
                '*.css',
                '*.styl'
            ],
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true,

        })
        
  ]
};
