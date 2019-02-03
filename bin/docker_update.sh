#! /bin/sh
set -e
docker-compose -f docker-compose.yml build --no-cache
docker-compose -f docker-compose.yml up -d --force-recreate
exit
