#!/usr/bin/env bash

id=$(docker ps | grep mongo | awk '{print $1}')

if [ -z "$id" ]
then 
  echo "Mongo is not running"
  exit 0
fi

echo "Mongo with $(docker stop $id) id has been stopped"
exit 0


