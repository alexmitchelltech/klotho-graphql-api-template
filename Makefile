local: node_modules/
	yarn start

clean:
	- rm -rf node_modules/
	- rm -rf dist/
	- rm -rf compiled/

deploy: clean compiled/node_modules/
	PULUMI_CONFIG_PASSPHRASE= pulumi up --cwd ./compiled --stack graphql-api-tutorial --non-interactive --yes

compiled/node_modules/: compiled/
	cd compiled && npm install

compiled/: dist/
	klotho ./dist -p aws --app graphql-api-tutorial -o compiled/
	PULUMI_CONFIG_PASSPHRASE= pulumi config set aws:region us-west-2 --cwd ./compiled --stack graphql-api-tutorial --non-interactive

dist/: node_modules/
	yarn tsc

node_modules/:
	yarn install

.PHONY: deploy clean
