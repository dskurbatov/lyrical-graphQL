#!/usr/bin/env bash

MYMONGO=$(docker images | grep mongo)

if [ -z "$MYMONGO" ]
then
  echo "Getting mongo"
  $(docker build .)
fi

echo "Mongo is running $(docker run -p 27017:27017 -v $(pwd)/data/db:/data/db -d mongo)"
exit 0