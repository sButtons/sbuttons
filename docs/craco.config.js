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
      configure: {
        watch: true
      }
    },
    devServer: {
      writeToDisk: true
    }
}