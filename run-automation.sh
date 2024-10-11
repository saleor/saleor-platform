#!/bin/bash
DIR="$( cd "$( dirname "$0" )" && pwd )"
SNAPSHOT=$DIR"/update-automation-snapshot.sql"
perl -pi -e 's/update_automation_snapshot_staging_saleor_cloud/public/' $SNAPSHOT
# please note that you should not use this password on production services
DB_URL="postgresql://saleor:saleor@localhost:5432/"
FULL_DB_URL=$DB_URL"e2e"
psql $DB_URL -c 'DROP DATABASE IF EXISTS e2e WITH(FORCE);'
psql $DB_URL -c 'CREATE DATABASE e2e;' 
psql $FULL_DB_URL -c 'CREATE EXTENSION IF NOT EXISTS btree_gin; CREATE EXTENSION IF NOT EXISTS pg_trgm;'
psql $FULL_DB_URL -f $SNAPSHOT
