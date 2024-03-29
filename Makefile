install:
	npm ci

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

link:
	npm link

setup: install link
