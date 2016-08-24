Vue.js Dinner #3 範例
---

# Commit #1

事前準備：

* 安裝 Nodejs 環境(npm/nvm)

```
$ mkdir vuedinner && cd vuedinner
$ npm init -y
$ npm i webpack -D
$ webpack sandbox.js bundle.js
$ webpack e1.js e2.js bundle.js
$ webpack andy=./e1.js you=./e2.js "[name].bundle.js"
$ ls -al |grep bundle

# 移除產生的檔案
$ find . -type 'f' | grep  bundle | xargs rm
```

# Commit #2 起手式

1. 加入 `index.html`
2. 組織目錄架構
3. 加入 `main.js` 與使用模組化概念(`components/app.js`)
4. 使用 webpack 指令

```
$ webpack ./src/main.js bundle.js
$ python -m SimpleHTTPServer
# 瀏覽器開啟 http://localhost:8000/
```

# Commit #3 Loaders

重點在於 `loaders` 使用 `!`

```
$ npm i css-loader style-loader file-loader -D
# 1. 準備幾張圖片置放於 images 目錄
# 2. 撰寫簡單的測試 css (styles/base.css)
# 3. 撰寫元件 (components/app.js)
# 4. 更新 main.js
$ webpack src/main.js bundle.js
$ python -m SimpleHTTPServer

# CTRL + D 停止 Server
```

# Commit #4

* 修改 `!` 語法，使用指令搭配參數
* 將輸出整理到 `dist/`

```
$ webpack src/main.js dist/bundle.js --module-bind 'css=style!css' --module-bind 'png=file' --output-public-path='/dist/'
```

# Commit #5

1.加入 `webpack.config.js` 設定檔

```
$ rm -rf dist
$ webpack
$ python -m SimpleHTTPServer
```

# Commit #6

* 使用 `webpack-dev-server` 協助開發
* 加入 `npm scripts`

```
$ npm i webpack-dev-server -D
$ webpack-dev-server

$ npm run build
$ npm run dev
```

# Commit #7

導入 `babel`

1. 安裝 babel 所需的套件
2. 更新 `webapck.config.js`
3. 加入 `.babelrc`

```
$ npm i babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-runtime -D
# 更新 config 與使用 ES2015 語法
$ npm run dev
```

# Commit #8

安裝與使用 `vue.js`

```
$ npm i vue -S
# 更新 main.js 與 app.js
$ npm run dev
```

# Commit #9

使用 `vue-loader`

1. 補上 `webpack.config.js`
2. 更新 `main.js` 與 `app.vue`

```
$ npm i vue-loader vue-html-loader vue-style-loader vue-hot-reload-api@1 -D
# 記得 app.js -> app.vue 和 main.js 載入路徑

$ webpack-dev-server
$ webpack-dev-server --inline --hot
```

# Commit #10

於 `webpack.config.js` 加上 `devServer` 設定

```
$ webpack-dev-server
```

旨於說明我們可以使用

```
devServer: {
  historyApiFallback: true,
  hot: true,
  inline: true,
  progress: true,
  stats: 'errors-only'
},
plugins: [
  new webpack.HotModuleReplacementPlugin()
]
```

或者

```
$ webpack-dev-server --inline --hot
```
