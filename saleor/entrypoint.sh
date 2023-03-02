#!/bin/bash

# Redirect connections coming in on a container port to a host
if [ -v LOCAL_DEV_APP_PORT ]
then
    echo "Redirecting localhost:$LOCAL_DEV_APP_PORT to host.docker.internal:$LOCAL_DEV_APP_PORT"
    redir localhost:$LOCAL_DEV_APP_PORT host.docker.internal:$LOCAL_DEV_APP_PORT
fi

# Forward command
exec "$@"