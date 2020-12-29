#!/bin/bash
set -e
TARGET_HOST="hamburgcodingschool.com"
TARGET_DIR="/var/www/coding-music"
export NODE_ENV=production

echo Deploying...
webpack --config ./webpack.config.js --mode production &&
gtar czf bundle.tgz -C dist . &&
scp bundle.tgz $TARGET_HOST:/tmp/ &&
rm bundle.tgz &&
ssh $TARGET_HOST 'bash -s' <<ENDSSH
  mkdir -p $TARGET_DIR && rm -rf $TARGET_DIR/*
  tar xfzom /tmp/bundle.tgz -C $TARGET_DIR
  rm /tmp/bundle.tgz
ENDSSH
echo Done.
