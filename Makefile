# Variables
NODE_BIN = node_modules/.bin
TEST_DIR = tests

install:
	@npm install

format:
	@npm run format

lint:
	@npm run lint

test-unit:
	@npm run test:unit

test-int:
	@npm run test:int

test-e2e:
	@npm run test:e2e

release:
	@npm run release

check-release:
	@npm run release --dry-run

tree:
	@tree -I 'node_modules/|coverage/|.git/|.tmp/|dist/|var/' -a -c -r
