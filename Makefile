# Variables
NODE_BIN = node_modules/.bin
TEST_DIR = tests

.PHONY: install
install:
	@npm install
	@npx husky install

.PHONY: format
format:
	@npm run format

.PHONY: lint
lint:
	@npm run lint

.PHONY: start
start: install
	@npm run start:dev

.PHONY: test-unit
test-unit:
	@npm run test:unit

.PHONY: test-int
test-int:
	@npm run test:int

.PHONY: test-e2e
test-e2e:
	@npm run test:e2e

.PHONY: release
release:
	@npm run release

.PHONY: check-release
check-release:
	@npm run release --dry-run

.PHONY: tree
tree:
	@tree -I 'node_modules/|coverage/|.git/|.tmp/|dist/|var/' -a -c -r

.PHONY: clean
clean:
	@git clean -X -f -d
