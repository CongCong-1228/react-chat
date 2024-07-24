#!/usr/bin/env bash

rm -rf dist
yarn build

cd dist
git init
git add .
git commit -m depoly
git remote add origin git@github.com:CongCong-1228/react-chat-preview.git
git push -f origin master:master


cd -
