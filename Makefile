# Variables
NODE_BIN = node_modules/.bin
TEST_DIR = tests

install:
	npm install

format:
	npm run format

lint:
	npm run lint

test-unit:
	npm run test:unit

test-int:
	npm run test:int

tree:
	tree -I 'node_modules/|coverage/|.git/|.tmp/' -a -c -r
