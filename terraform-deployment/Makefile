help:
	grep --extended-regexp '^[a-zA-Z]+:.*#[[:space:]].*$$' $(MAKEFILE_LIST) \
	| awk 'BEGIN { FS = ":.*#[[:space:]]*" } { printf "\033[1;32m%-12s\033[0m%s\n", $$1, $$2 }'

init: # terraform init
	terraform init

validate: # terraform format then validate
	terraform fmt -recursive
	terraform validate

apply: # terraform plan then apply with auto approve + create rekognition collection
	terraform plan -out=terraform.plan
	terraform apply -auto-approve terraform.plan

.SILENT: