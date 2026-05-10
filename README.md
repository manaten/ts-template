# ts-node-cli-template

manaten's ts-node cli script tempalate.

## Sync Template ワークフローについて

このテンプレートには、`ts-template` の更新を取り込む `sync-template` ワークフローが含まれています。

`.github/workflows/` 配下のファイル更新を含むテンプレート変更を取り込みたい場合、デフォルトの `GITHUB_TOKEN` ではワークフローファイルを変更できないため、別途 PAT (Personal Access Token) が必要です。

### セットアップ手順

1. GitHub の Settings > Developer settings > Personal access tokens から、`workflow` スコープを持つ Fine-grained または Classic PAT を作成
2. リポジトリの Settings > Secrets and variables > Actions で `SYNC_TEMPLATE_TOKEN` という名前で登録

`SYNC_TEMPLATE_TOKEN` が未設定の場合は `GITHUB_TOKEN` にフォールバックしますが、ワークフローファイルを含む変更時に push が失敗します。
