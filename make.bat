@ECHO off

CALL :%1
IF ERRORLEVEL 1 CALL :DEFAULT_CASE

EXIT /B

:init
  git submodule update --init --remote
  GOTO END_CASE
:update
  git submodule update --remote
  GOTO END_CASE
:build:
  cd saleor-storefront
  docker image build -f Dockerfile.dev -t saleor-storefront .
  cd ../saleor-dashboard
  docker image build -f Dockerfile.dev -t saleor-dashboard .
  cd ../saleor
  docker-compose build
  docker-compose run --rm web python3 manage.py migrate
  docker-compose run --rm web python3 manage.py collectstatic --noinput
  docker-compose run --rm web python3 manage.py populatedb --createsuperuser
  cd ..
  GOTO END_CASE
:run_saleor
  cd saleor
  docker-compose up -d
  cd ..
  GOTO END_CASE
:run_storefront
  cd saleor-storefront
  docker container run -d -p 3000:3000 --mount source=%CD%/src,target=/app/src,type=bind,consistency=cached saleor-storefront
  cd ..
  GOTO END_CASE
:run_dashboard
  cd saleor-dashboard
  docker container run -d -p 9000:9000 --mount source=%CD%/src,target=/app/src,type=bind,consistency=cached saleor-dashboard
  cd ..
  GOTO END_CASE
:run
  if not exist saleor/README.md (
    CALL :init
    CALL :build
  )
  CALL :run_saleor
  CALL :run_storefront
  CALL :run_dashboard
  GOTO END_CASE
:start
  CALL :run
  GOTO END_CASE
:DEFAULT_CASE
  ECHO Unknown command
  GOTO END_CASE
:stop
  ECHO killing all docker containers...
  FOR /f "tokens=*" %%i IN ('docker ps -a -q') DO docker kill %%i
  GOTO END_CASE
:END_CASE
  GOTO :EOF
