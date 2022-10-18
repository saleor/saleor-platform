# saleor-platform
All Saleor services started from a single repository

*Keep in mind this repository is for local development only and is not meant to be deployed in any production environment! If you're not a developer and just want to try out Saleor you can check our [live demo](https://demo.saleor.io/).*

## Breaking changes

This project contains several projects that are connected. The `main` branch is always stable, but if modules were updated individually, it's possible they will not work correctly.

In case of problems, fetching new saleor-platform is recommended. If local repository must be kept, consider updating to commit hashes that are pointed from `main` branch of saleor-platform.

To fetch fresh repository, follow [section below](#how-to-clone-the-repository)

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)

## How to clone the repository?

To clone the repository, run the following command

```
git clone https://github.com/saleor/saleor-platform.git --recursive --jobs 3
```

## How to run it?

### With Makefile

#### Bootstrap app
```shell
make
```

#### Run all services
```shell
make run
```

#### Run only backend services
```shell
make run-backend 
```

See [Makefile](Makefile) for all commands 

### With Docker steps

1. We are using shared folders to enable live code reloading. Without this, Docker Compose will not start:
    - Windows/MacOS: Add the cloned `saleor-platform` directory to Docker shared directories (Preferences -> Resources -> File sharing).
    - Windows/MacOS: Make sure that in Docker preferences you have dedicated at least 5 GB of memory (Preferences -> Resources -> Advanced).
    - Linux: No action is required, sharing is already enabled and memory for the Docker engine is not limited.

2. Go to the cloned directory:
```shell
cd saleor-platform
```

3. Build the application:
```shell
docker-compose build
```

4. Apply Django migrations:
```shell
docker-compose run --rm api python3 manage.py migrate
```

5. Collect static files:
```shell
docker-compose run --rm api python3 manage.py collectstatic --noinput
```

6. Populate the database with example data and create the admin user:
```shell
docker-compose run --rm api python3 manage.py populatedb --createsuperuser
```
*Note that `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.*

7. Run the application:
```shell
docker-compose up
```
*Both Storefront and Dashboard are quite big frontend projects and it might take up to a few minutes for them to compile depending on your CPU. If nothing shows up on port 3001 or 9000, please wait until `Compiled successfully` shows in the console output.*

## Where is the application running?
- Saleor Core (API) - http://localhost:8000
- Saleor React Storefront - http://localhost:3001
- Saleor Dashboard - http://localhost:9000
- Jaeger UI (APM) - http://localhost:16686
- Mailhog (Test email interface) - http://localhost:8025 

## How to update the subprojects to the newest versions?
This repository contains the newest stable versions.
When a new release is published, pull a new version of this repository.
In order to update all of the subprojects to their newest versions, run:
```shell
git submodule update --remote
```

You can find the latest version of Saleor, Storefront and Dashboard in their individual repositories:

- https://github.com/saleor/saleor
- https://github.com/saleor/saleor-dashboard
- https://github.com/saleor/react-storefront

## How to solve issues with lack of available space or build errors after an update

Most of the time both issues can be solved by cleaning up space taken by old containers. After that, we build again whole platform. 


1. Make sure docker stack is not running
```shell
docker-compose stop
```

2. Remove existing volumes

**Warning!** Proceeding will remove also your database container! If you need existing data, please remove only services that cause problems! https://docs.docker.com/compose/reference/rm/
```shell
docker-compose rm
```

3. Build fresh containers 
```shell
docker-compose build
```

4. Now you can run a fresh environment using commands from `How to run it?` section. Done!

### Still no available space

If you are getting issues with lack of available space, consider pruning your docker cache:

**Warning!** This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache 
  
  More info: https://docs.docker.com/engine/reference/commandline/system_prune/
  
<details><summary>I've been warned</summary>
<p>

```shell
docker system prune
```

</p>
</details>

### Issues with migrations after changing the versions - resetting the database

Please submit an issue ticket if you spot issues with database migrations during the version update. 

When testing developer releases or making local changes, you might end up in a state where you would like to reset the database completely. Since its state is persisted in the mounted volume, you'll need to use a dedicated command.

**Warning!** This command will remove all data already stored in the database.

<details><summary>I've been warned</summary>
<p>

```shell
docker-compose down --volumes db
```

</p>
</details>
   
## How to run application parts?
  - `docker-compose up api worker` for backend services only
  - `docker-compose up` for backend and frontend services

## Feedback

If you have any questions or feedback, do not hesitate to contact us via [GitHub Discussions](https://github.com/saleor/saleor/discussions).

## License

Disclaimer: Everything you see here is open and free to use as long as you comply with the [license](https://github.com/saleor/saleor-platform/blob/main/LICENSE). There are no hidden charges. We promise to do our best to fix bugs and improve the code.

Some situations do call for extra code; we can cover exotic use cases or build you a custom e-commerce appliance.

#### Crafted with ❤️ by [Saleor Commerce](https://saleor.io/)

hello@saleor.io
