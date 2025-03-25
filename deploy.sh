#!/usr/bin/env sh

set -e

# сборка
npm run build

# переход в каталог сборки
cd dist


git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kharlaienko/calendar-test-app.git master:gh-pages

cd -