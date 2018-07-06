#!/usr/bin/env bash

MYMONGO=$(docker images | grep mongo)
exist=$(docker ps | grep mongo)
STRINGARRAY=($exist)

if [ ! -z ${STRINGARRAY[0]} ]
then
  echo "Mongo is already running"
  exit 0
fi

if [ -z "$MYMONGO" ]
then
  echo "Building mongo from Dockerfile..."
  $(docker build .)
fi

id=$(docker run -p 27017:27017 -v $(pwd)/data/db:/data/db -d mongo)

COUNTER=0
while !(nc -z localhost 27017) && [[ $COUNTER -lt 60 ]] ; do
    sleep 2
    let COUNTER+=2
    echo "Waiting for mongo to initialize... ($COUNTER seconds so far)"
done
exit 0