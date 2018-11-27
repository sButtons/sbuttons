[![Build Status](https://travis-ci.org/jonycheung/deadsimple-less-watch-compiler.svg?branch=master)](https://travis-ci.org/jonycheung/deadsimple-less-watch-compiler) [![npm version](https://badge.fury.io/js/less-watch-compiler.svg)](https://badge.fury.io/js/less-watch-compiler) [![Dependencies](https://david-dm.org/jonycheung/deadsimple-less-watch-compiler.svg)](https://david-dm.org/jonycheung/less-watch-compiler) [![devDependency Status](https://david-dm.org/jonycheung/deadsimple-less-watch-compiler/dev-status.svg)](https://david-dm.org/jonycheung/less-watch-compiler#info=devDependencies) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Dead Simple LESS CSS Watch Compiler
===================

A command that watches folders(and subfolders) for file changes and automatically compile the less css files into css. This is a file system watcher and compiler. It also keep track of a dependency tree and recompiles the parent if an imported (child) LESS file is changed.

Parts of this script is modified from Mikeal Rogers's watch script (https://github.com/mikeal/watch)


## Prerequisites
>The commands below may need to be prefixed with `sudo` depending upon your system

Install [LESS](http://www.lesscss.org/) and make sure the `lessc` binary is accessible to the script. Installing LESS with the `-g`(global) flag will make the binary accessible to your system.

### [yarn](https://yarnpkg.com/) 
```bash
yarn global add less
```

### [npm](https://www.npmjs.com/)
```bash
npm install -g less
```

## Installation
>The commands below may need to be prefixed with `sudo` depending upon your system

Install the `less-watch-compiler` command globally. 

### [yarn](https://yarnpkg.com/) 
```bash
yarn global add less-watch-compiler
```

### [npm](https://www.npmjs.com/) 
```bash
npm install -g less-watch-compiler
```

## Usage
### With no main file 
You need to pass in the minimum 2 parameters - <source_dir> and <destination_dir> . First parameter is the source folder to watch for changes and second is the output folder in which the css files will be compiled

Usage: 
```bash
less-watch-compiler [options] <source_dir> <destination_dir>
```

### With main file
If you pass in the 3rd optional parameter, Any file change will trigger only to compile the main file specified in the 3rd parameter.
Assuming the 3rd is "main.less" 

Usage: 
```bash
less-watch-compiler [options] <source_dir> <destination_dir> [main-file]
```

## Basic example
```		
 root 
 └──src
 │    └── main.less
 │    └── aux.less
 └──dist
      └── main.css
```

The project can be compiled with the following command:
```bash
less-watch-compiler src dist main.less
```

## Configuration File
By default the the configuration file is loaded from ./less-watch-compiler.config.json but can also be specified by the --config <file> option.

#### Example using the project tree laid out in the previous example

less-watch-compiler.config.json
```json
{
    "watchFolder": "src",
    "outputFolder": "dist",
    "mainFile": "main.less"
}
```
The project can be compiled with the following command:
```bash
less-watch-compiler
```

## All configuration file options
```json
{
    "watchFolder": "<input_folder>",   
    "outputFolder": "<output_folder>",
    "mainFile": "<main-file>",   
    "sourceMap": false,
    "plugins": "plugin1,plugin2",
    "less-args": "option1=1,option2=2",
    "runOnce": false,
    "enableJs": true
}
```

## Options:

    -h, --help                                                               output usage information
    -V, --version                                                            output the version number
    --main-file <file>                                                       Specify <file> as the file to always re-compile e.g. '--main-file style.less'.
    --config <file>                                                          Custom configuration file path. (default: "less-watch-compiler.config.json")
    --run-once                                                               Run the compiler once without waiting for additional changes.
    --enable-js                                                              Less.js Option: To enable inline JavaScript in less files.
    --source-map                                                             Less.js Option: To generate source map for css files.
    --plugins <plugin-a>,<plugin-b>                                          Less.js Option: To specify plugins separated by commas.
    --less-args <less-arg1>=<less-arg1-value>,<less-arg1>=<less-arg2-value>  Less.js Option: To specify any other less options e.g. '--less-args math=strict,strict-units=on,include-path=./dir1\;./dir2'.

## Please note:
* By default, "minified" is turned on to always compress/minify output. You can set the minification to false by adding `"minified":false` in the config file.
* By default, "sourceMap" is turned off. You can generating sourcemap to true by adding `"sourceMap":true` in the config file.
* By default, this script only compiles files with `.less` extension. More file extensions can be added by modifying the `allowedExtensions` array in `config.json`.
* Files that start with underscores `_style.css` or period `.style.css` are ignored. This behavior can be changed in the `filterFiles()` function.
* When `--run-once` used, compilation will fail on first error

### Using the source files
Alternativelly, you can checkout the code and run things locally like this:

```bash
node less-watch-compiler.js [options]
```

To run unit tests: `yarn test` or `npm test` (see tests/test.js).
