#!/bin/sh
#git clone https://github.com/kaocher82/saleor-platform.git --recursive --jobs 3 & cd saleor-platform
# install docker compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo apt-get update
# remove old docker and install new
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get update

sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common
sudo apt update
# install npm globaly
sudo apt install nodejs
sudo apt install npm & sudo apt update
npm install
npm install -g npm
# docker start
sudo docker-compose Build
#django migrations
sudo docker-compose run --rm api python3 manage.py migrate
# collect staticfiles
sudo docker-compose run --rm api python3 manage.py collectstatic --noinput

sudo docker-compose run --rm api python3 manage.py populatedb
#below line for admin user creation
#sudo docker-compose run --rm api python3 manage.py createsuperuser

sudo docker-compose up
