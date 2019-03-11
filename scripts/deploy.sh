#!/bin/sh


ssh root@120.79.48.68 -i /Users/lrliang/Downloads/aliyun.pem <<EOF
 cd ~/node-app
 git pull
 npm install
 pm2 restart all
 exit
EOF
