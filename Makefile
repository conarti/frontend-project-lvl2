install:
	npm ci
	npm link

test:
	clear
	node bin/gendiff.js /Users/conarti/Desktop/file1.json file2.json
