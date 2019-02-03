#! /bin/sh

HOST_IP="${1:-80.211.227.136}"

ssh -o StrictHostKeyChecking=no -tt root@"${HOST_IP}" <<EOF_SSH
    cd ~/vagart/code/
    git status
	git stash || true
    git pull
    ./bin/update.sh
    exit
EOF_SSH

if [ $? -eq 0 ]; then
    echo 'deployed'
    exit 0
else
    echo 'problems encountered while deploying'
    exit 1
fi
1
