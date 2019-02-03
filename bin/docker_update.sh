#! /bin/sh
set -e
docker-compose -f ./bin/docker-compose.yml build --no-cache
docker-compose -f ./bin/docker-compose.yml up -d --force-recreate
exit
