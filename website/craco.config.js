module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
      configure: webpackConfig => {
        const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
          ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
        );
  
        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
        webpackConfig.watch = true;
        return webpackConfig;
      }
    },
    devServer: {
      writeToDisk: true
    }
}