#!/usr/bin/env bash
# Deploy the app to the gh-pages branch.
# This script builds the app and pushes the built files to gh-pages.
# It is called by orchestrator/worker agents - no workflow file needed.
#
# Usage: bash .genesis/scripts/deploy-pages.sh
#
# Requirements:
# - git must be configured with push access (uses the token from remote URL)
# - node/npm must be available

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
APP_DIR="$REPO_ROOT/app"
DIST_DIR="$APP_DIR/dist"
DEPLOY_DIR="/tmp/gh-pages-deploy-$$"

echo "==> Building app..."
cd "$APP_DIR"
npm ci --silent
npm run build

echo "==> Preparing deploy directory..."
mkdir -p "$DEPLOY_DIR"
cp -r "$DIST_DIR/." "$DEPLOY_DIR/"
touch "$DEPLOY_DIR/.nojekyll"

echo "==> Deploying to gh-pages branch..."
cd "$DEPLOY_DIR"

git init
git config user.email "claude[bot]@users.noreply.github.com"
git config user.name "claude[bot]"

# Use GIT_REMOTE_OVERRIDE if set (e.g. from CI with an app token),
# otherwise fall back to the remote URL from the main repo checkout.
if [[ -n "${GIT_REMOTE_OVERRIDE:-}" ]]; then
  REMOTE_URL="$GIT_REMOTE_OVERRIDE"
else
  REMOTE_URL=$(git -C "$REPO_ROOT" remote get-url origin)
fi
git remote add origin "$REMOTE_URL"

git checkout -b gh-pages
git add -A
git commit -m "Deploy app to GitHub Pages ($(date -u '+%Y-%m-%d %H:%M UTC'))"

git push origin gh-pages --force

echo "==> Deploy complete!"
echo "    App will be live at: https://Sayfan-AI.github.io/ronny-learns-ai/"

# Cleanup
rm -rf "$DEPLOY_DIR"
