このパターンは `api/idex.ts` というディレクトリ構成だと正しく動作する。
しかしビルド時に `api/index.js` を生成しても正しく動作しない。

{
"version": 2,
"rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}
