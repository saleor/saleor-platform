bootstrap:
	docker-compose build
	docker-compose run --rm api python3 manage.py migrate
	docker-compose run --rm api python3 manage.py collectstatic --noinput
	docker-compose run --rm api python3 manage.py populatedb --createsuperuser
run:
	docker-compose up
run-backend:
	docker-compose up api worker
upgrade:
	git submodule update --remote