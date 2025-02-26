#!/bin/bash

HERE=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$HERE"

bun run analyze

# echo "synchronizing colors from figma..."
# bun run sync-colors

echo "building library..."
bun vite build --emptyOutDir
bun vite build --emptyOutDir --config vite.umd.config.ts
