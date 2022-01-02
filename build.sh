#!/bin/bash

if [[ -z $1 ]]; then
  echo "Missing script parameter - docker tag"
  exit 1
fi

echo ">> Building npm files"
npm run build

imageName=krzysioooo/livescore-football-frontend:$1

echo ">> Building docker image: ${imageName}"
docker build -t ${imageName} .

docker push imageName

echo ">> Creating tag: ${1} on local git repository"
git tag $1

echo ">> Now you need to push created git tag to origin repository"