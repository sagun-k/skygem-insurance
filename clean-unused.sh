#!/bin/bash

echo "🔍 Running depcheck to find unused dependencies..."

# Run depcheck and capture unused dependencies and devDependencies
unused=$(pnpx depcheck --json)

# Define ignored packages
ignoreDeps=("expo-build-properties")
ignoreDevDeps=()

# Function to filter ignored packages
filter_ignored() {
  local input=$1[@]
  local ignore_list=$2[@]
  grep -vFx -e "$(IFS=$'\n'; echo "${!ignore_list}" | tr ' ' '\n')" <<< "${!input}"
}

# Parse and filter dependencies
rawDeps=$(echo "$unused" | node -pe "JSON.parse(require('fs').readFileSync(0)).dependencies.join('\n')")
rawDevDeps=$(echo "$unused" | node -pe "JSON.parse(require('fs').readFileSync(0)).devDependencies.join('\n')")

deps=$(filter_ignored rawDeps ignoreDeps)
devDeps=$(filter_ignored rawDevDeps ignoreDevDeps)

# No unused packages
if [ -z "$deps" ] && [ -z "$devDeps" ]; then
  echo "✅ No unused dependencies or devDependencies found."
  exit 0
fi

# Echo full lists before uninstalling
echo "----------------------------------"
echo "🔎 Unused dependencies found:"
echo "$deps"
echo
echo "🔧 Unused devDependencies found:"
echo "$devDeps"
echo "----------------------------------"

# Uninstall dependencies
if [ -n "$deps" ]; then
  echo "📦 Uninstalling unused dependencies..."
  echo "$deps" | xargs pnpm remove
fi

# Uninstall devDependencies
if [ -n "$devDeps" ]; then
  echo "🛠️  Uninstalling unused devDependencies..."
  echo "$devDeps" | xargs pnpm remove --save-dev
fi

echo "✅ 🧹 Cleanup complete!"
