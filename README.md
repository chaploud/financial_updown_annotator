# Financial UpDown Annotator

金融時系列データを表示し、機械学習用のラベルとして上がるか下がるかのアノテーションを行うWebアプリケーション

## Task

- [ ] USD/JPYのOHLCVデータ(1分足: 2016/01/01～2023/12/14)をPostgreSQLに格納
- [ ] Prismaでデータ取得して表示
- [ ] EChartでローソク足描画
- [ ] ClerkによりXまたはGitHubアカウント認証
- [ ] non-annotatedとannotated
- [ ] 1時間ごとに区切ったリストを一覧から選ぶと、チャートが表示され、任意の場所で右クリックでUp/Downをつけられる
- [ ] Submitで結果をDBに保存する
- [ ] ログインしているユーザーはannotatedを見ることもできる
- [ ] 全期間のアノテーションが終わったら、Submit実績のあるユーザーの連絡先にアノテーションデータ(CSV)のダウンロードリンクを送る
- [ ] NextJS/TypeScript/Clerk/Prisma/EChart/PostgreSQLで作る
