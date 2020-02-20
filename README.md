# saleor-platform
All Saleor services started from a single repository

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)


## How to run it?

1. Clone the repository `git clone git@github.com:mirumee/saleor-platform.git`
2. To enable live code reload:
    - Windows/Mac: Add the cloned `saleor-platform` directory into docker shared directories (Preferences -> Resources -> File sharing).
    - Linux: Already enabled
3. Go inside cloned directory `cd saleor-platform`
4. Fetch the submodules `git submodule update --init --jobs 3`
5. Build the application `docker-compose build`
6. Apply django migrations `docker-compose run --rm web python3 manage.py migrate`
7. Collect staticfiles `docker-compose run --rm web python3 manage.py collectstatic`
8. Populate the DB with example data and create admin user `docker-compose run --rm web python3 manage.py populatedb --createsuperuser`
9. Run the application `docker-compose up`


## How to update the subprojects into newest versions?
By default, each of the subprojects is bound to particular commit.
In order to update all of them to their newest master versions, run `git submodule update --remote`

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
