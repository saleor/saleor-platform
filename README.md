# saleor-platform
All Saleor services started from a single repository

*Keep in mind this repository is for local development only and is not meant to be deployed on any production environment! If you're not a developer and just want to try out Saleor you can check our [live demo](https://demo.saleor.io/).*

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)


## How to run it?

1. Clone the repository:

```
$ git clone git@github.com:mirumee/saleor-platform.git --recursive --jobs 3
```

2. We are using shared folders to enable live code reloading. Without this, Docker Compose will not start:
    - Windows/MacOS: Add the cloned `saleor-platform` directory to Docker shared directories (Preferences -> Resources -> File sharing).
    - Windows/MacOS: Make sure that in Docker preferences you have dedicated at least 5 GB of memory (Preferences -> Resources -> Advanced).
    - Linux: No action required, sharing already enabled and memory for Docker engine is not limited.

3. Go to the cloned directory:
```
$ cd saleor-platform
```

4. Build the application:
```
$ docker-compose build
```

5. Apply Django migrations:
```
$ docker-compose run --rm api python3 manage.py migrate
```

6. Collect static files:
```
$ docker-compose run --rm api python3 manage.py collectstatic --noinput
```

7. Populate the database with example data and create the admin user:
```
$ docker-compose run --rm api python3 manage.py populatedb --createsuperuser
```
*Note that `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.*

8. Run the application:
```
$ docker-compose up
```
*Both storefront and dashboard are quite big frontend projects and it might take up to few minutes for them to compile depending on your CPU. If nothing shows up on port 3000 or 9000 wait until `Compiled successfully` shows in the console output.*


## How to update the subprojects to the newest versions?
This repository will contain newest stable versions. For now it contains unstable ones - with changes made after 2.9 due to some technical requirements that allows platform to work.
When new release appear, pull new version of this repository.
In order to update all of them to their newest (unstable) master versions, run:
```
$ git submodule update --remote
```

You can find the latest version of Saleor, storefront and dashboard in their individual repositories:

- https://github.com/mirumee/saleor
- https://github.com/mirumee/saleor-dashboard
- https://github.com/mirumee/saleor-storefront


## How to run application parts?
  - `docker-compose up api worker` for backend services only
  - `docker-compose up` for backend and frontend services


## Where is the application running?
- Saleor Core (API) - http://localhost:8000
- Saleor Storefront - http://localhost:3000
- Saleor Dashboard - http://localhost:9000
- Jaeger UI (APM) - http://localhost:16686


If you have any questions or feedback, do not hesitate to contact us via Spectrum or Gitter:

- https://spectrum.chat/saleor
- https://gitter.im/mirumee/saleor


## License

Disclaimer: Everything you see here is open and free to use as long as you comply with the [license](https://github.com/mirumee/saleor-platform/blob/master/LICENSE). There are no hidden charges. We promise to do our best to fix bugs and improve the code.

Some situations do call for extra code; we can cover exotic use cases or build you a custom e-commerce appliance.

#### Crafted with ❤️ by [Mirumee Software](http://mirumee.com)

hello@mirumee.com
