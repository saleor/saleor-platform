.PHONY: build apply diff superuser delete dry-apply dry-delete

build:
	kustomize build .

apply:
	kustomize build . | kubectl apply -f -

diff:
	kustomize build . | kubectl diff -f -

superuser:
	POD=$$(kubectl get pods -n saleor | grep -v -E 'mailhog|jaeger|db|redis|checkout|dashboard|storefront|worker' | tail -n 1 | cut -d ' ' -f 1); kubectl exec -i -t $${POD} -c saleor-api -n saleor -- python manage.py createsuperuser

delete:
	kustomize build . | kubectl delete -f -

dry-apply:
	kustomize build . | kubectl apply -f - --dry-run=client

dry-delete:
	kustomize build . | kubectl delete -f - --dry-run=client
