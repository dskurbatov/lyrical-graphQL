#!/usr/bin/env bash

MYMONGO=$(docker images | grep mongo)

if [ -z "$MYMONGO" ]
then
  echo "Getting mongo"
  $(docker pull mongo)
else
  $(docker run -p 27017:27017 -v $(pwd)/data/db:/data/db -d mongo)
  echo "Mongo is running"
fi

exit 0