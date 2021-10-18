const path = require('path');

const resolvePath = relativePath => path.resolve(__dirname, relativePath) 

module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('src/')
    },
  },
};
