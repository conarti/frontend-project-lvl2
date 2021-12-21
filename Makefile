install:
	npm ci
	npm link

test:
	npx jest

test-coverage:
	npx jest --coverage
