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
