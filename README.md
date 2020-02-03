# saleor-platform

All Saleor services started from a single repository

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)

## How to run it?


### Mac OS
1. Clone the repository `git clone git@github.com:mirumee/saleor-platform.git`
2. Add the cloned `saleor-platform` directory into docker shared directories (Preferences -> Resources -> File sharing).
3. Run the command `cd saleor-platform && make run`

    *`make run` invokes pulling subprojects, building their docker images and starting them.*


### Linux
1. Clone the repository `git clone git@github.com:mirumee/saleor-platform.git`
2. Run the command `cd saleor-platform && make run`

You can find the latest version of Saleor, storefront and dashboard in their individual repositories:

- https://github.com/mirumee/saleor
- https://github.com/mirumee/saleor-dashboard
- https://github.com/mirumee/saleor-storefront


### Windows
TBD

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
