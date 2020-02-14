init:
	git submodule update --init --remote

update:
	git submodule update --remote

run-saleor:
	cd saleor && docker-compose up -d

run-storefront:
	cd saleor-storefront && docker container run -d -p 3000:3000 --mount source=$(shell pwd)/saleor-storefront/src,target=/app/src,type=bind,consistency=cached saleor-storefront

run-dashboard:
	cd saleor-dashboard && docker container run -d -p 9000:9000 --mount source=$(shell pwd)/saleor-dashboard/src,target=/app/src,type=bind,consistency=cached saleor-dashboard

build:
	cd saleor-storefront;\
	docker image build -f Dockerfile.dev -t saleor-storefront .;\
	cd ../saleor-dashboard;\
	docker image build -f Dockerfile.dev -t saleor-dashboard .;\
	cd ../saleor;\
	docker-compose build;\
	docker-compose run --rm web python3 manage.py migrate;\
	docker-compose run --rm web python3 manage.py collectstatic --noinput;\
	docker-compose run --rm web python3 manage.py populatedb --createsuperuser

run:
	@if ! test -f "./saleor/README.md"; then\
		make init;\
		make build;\
	fi
	make run-saleor
	make run-storefront
	make run-dashboard

start:
	make run

stop:
	docker ps | tail -n +2 | awk '{print $$1}' | xargs -P 8 -I {} docker kill {}
