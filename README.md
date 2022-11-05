<h1 align="center">
  <br>
  <a href="https://www.automotics.be"><img src="https://user-images.githubusercontent.com/20838072/200111877-fe190ba3-a31e-4817-b252-43e6959ac29e.png" alt="Automotics"/>
</a>
  <br>
</h1>
<p>
Diagnostics products and services webshop built on top of Saleor.
</br>
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" />
<img src="https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white" />
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
<img src="https://img.shields.io/badge/redis-CC0000.svg?&style=for-the-badge&logo=redis&logoColor=white" />
</p>

## Requirements
1. [Docker](https://docs.docker.com/install/)
2. [Docker Compose](https://docs.docker.com/compose/install/)

## How to clone the repository?

To clone the repository, run the following command

```
git clone https://github.com/Automotics/automotics-platform.git --recursive --jobs 3
```

## How to run it?

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

