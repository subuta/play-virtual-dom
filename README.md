# play-virtual-dom
virtual-domで遊んでみた

1. `webapp/app.js`の中の`update`関数をいじってみる。
2. `webapp/components/counter.js`の中の`render`をいじってみる。

Safariの開発者コンソール上げながらボタン押してみると、
どこの部分が描画しなおされてるかが分かりやすいですよ💓

# Installation
```
npm install jspm@beta -g
brew install caddy
NODE_ENV=development npm i
jspm i
```

# How to start
```
npm run serve
open http://localhost:3000
```