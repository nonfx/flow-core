SHELL:=/bin/bash

ifeq ($(shell which bun),)
$(error bun is not installed.)
endif

.PHONY: install
install:
	bun install

.PHONY: build-lib
build-lib: install
	cp README.md packages/flow-core
	bun run --cwd packages/flow-core-config build
	bun run --cwd packages/flow-core build
	bun run --bun --filter "!flow-core" --elide-lines 0 build
	bun run tsc -b
	bun generate-types.ts

.PHONY: build-storybook
build-storybook: install
	bun run --bun build-storybook

.PHONY: build
build: build-lib build-storybook

.PHONY: test
test: build-lib
	bun run --bun --filter "*" --elide-lines 0 test
