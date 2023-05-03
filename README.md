# prefecture-population-trends
株式会社ゆめみのフロントエンドコーディング試験

## 開発環境
- macOS v12.3.1
- node v16.19.0
- npm v8.19.3
- Next.js v13.3.1
- react v18.2.0

## 環境構築
```
git clone リポジトリURL
npm install highcharts highcharts-react-official
npm run dev
```

※rootディレクトリに.envファイルを作成し、RESAS　APIのAPI KEYを設定する

## デザインルール
padding, marginは基本的に4px単位で管理する

## コーディングルール
基本的にコンポーネントそのものにはmarginをつけない(汎用性を高めるため)

## ディレクトリ構成

src配下

conponents - atmicデザインに則ったコンポーネントの振り分けをしているディレクトリ

pages - ページを管理するディレクトリ(atomicデザインのpagesの役割も果たしている)

styles - cssファイルが格納されているディレクトリ

## メモ
今回はpropsにてバケツリレーを行い状態管理を行ったがrecoil等のフレームワークを使用すると可読性や拡張性が向上する

