# saleor-platform
All Saleor services started from a single repository

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)


## How to run it?

1. Clone the repository:

```
$ git clone git@github.com:mirumee/saleor-platform.git
```

2. We are using shared folders to enable live code reloading. Without this, Docker Compose will not start:
    - Windows/MacOS: Add the cloned `saleor-platform` directory to Docker shared directories (Preferences -> Resources -> File sharing).
    - Windows/MacOS: Make sure that in Docker preferences you have dedicated at least 5 GB of memory (Preferences -> Resources -> Advanced).
    - Linux: No action required, sharing already enabled and memory for Docker engine is not limited.

3. Go to the cloned directory:
```
$ cd saleor-platform
```

4. Fetch the submodules:
```
$ git submodule update --init --jobs 3
```

5. Build the application:
```
$ docker-compose build
```

6. Apply Django migrations:
```
$ docker-compose run --rm web python3 manage.py migrate
```

7. Collect static files:
```
$ docker-compose run --rm web python3 manage.py collectstatic
```

8. Populate the database with example data and create the admin user:
```
$ docker-compose run --rm web python3 manage.py populatedb --createsuperuser
```

9. Run the application:
```
$ docker-compose up
```


## How to update the subprojects to the newest versions?
By default, this repository contains newest current (stable) versions. When new release appear, pull new version of this repository.
In order to update all of them to their newest (unstable) master versions, run:
```
$ git submodule update --remote
```

You can find the latest version of Saleor, storefront and dashboard in their individual repositories:

- https://github.com/mirumee/saleor
- https://github.com/mirumee/saleor-dashboard
- https://github.com/mirumee/saleor-storefront


## How to run application parts?
  - `docker-compose up web celery` for backend services only
  - `docker-compose up` for backend and frontend services


## Where is the application running?
- Saleor backend - http://localhost:8000
- Saleor storefront - http://localhost:3000
- Saleor dashboard - http://localhost:9000


If you have any questions or feedback, do not hesitate to contact us via Spectrum or Gitter:

- https://spectrum.chat/saleor
- https://gitter.im/mirumee/saleor


## License

Disclaimer: Everything you see here is open and free to use as long as you comply with the [license](https://github.com/mirumee/saleor-platform/blob/master/LICENSE). There are no hidden charges. We promise to do our best to fix bugs and improve the code.

Some situations do call for extra code; we can cover exotic use cases or build you a custom e-commerce appliance.

#### Crafted with ❤️ by [Mirumee Software](http://mirumee.com)

hello@mirumee.com
