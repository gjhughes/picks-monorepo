/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const currentDir = __dirname;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [
    // To allow finding files outside native
    path.resolve(currentDir, '..'),
  ],

  resolver: {
    extraNodeModules: {
      react: path.resolve(currentDir, 'node_modules/react'),
      'react-native': path.resolve(currentDir, 'node_modules/react-native'),
      '@babel/core': path.resolve(currentDir, 'node_modules/@babel/core'),
      '@babel/runtime': path.resolve(currentDir, 'node_modules/@babel/runtime'),
    },
  }

};