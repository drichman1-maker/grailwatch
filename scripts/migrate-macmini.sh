#!/bin/bash
# migrate-macmini.sh
# Simple macOS migration helper to copy user data and essential configs
# Usage: sudo ./migrate-macmini.sh <SOURCE_PATH> <DEST_PATH>
# Example: sudo ./migrate-macmini.sh /Volumes/OldMac/Data /Volumes/NewMac/Data
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <SOURCE_PATH> <DEST_PATH>" >&2
  exit 1
fi
SOURCE="$1"
DEST="$2"

# Basic sanity checks
if [[ ! -d "$SOURCE" ]]; then
  echo "SOURCE directory not found: $SOURCE" >&2
  exit 1
fi
if [[ ! -d "$DEST" ]]; then
  echo "DEST directory not found: $DEST" >&2
  exit 1
fi

# Common exclusions for macOS data migration
EXCLUDES=(
  --exclude "$SOURCE/Library/Caches/*"
  --exclude "$SOURCE/Library/Logs/*"
  --exclude "$SOURCE/Private/var/*/log/*"
  --exclude "$SOURCE/Private/var/vm/*"
  --exclude "$SOURCE/Private/var/folders/*/CodeSign/*"
  --exclude "$SOURCE/Applications/*/App.clipboard*"
  --exclude "$SOURCE/Users/Shared/*/.Trashes"
  --exclude "$SOURCE/Users/*/.Trashes"
)

echo "Starting migration from $SOURCE to $DEST"

# Ensure destination exists and we have a clean shell
rsync -aAXv --delete ${EXCLUDES[@]} "$SOURCE/" "$DEST/"

echo "Migration complete."

# Optional post-migration steps (informational only, disable if not desired)
# - Regenerate SSH keys on the new host if this is a fresh machine
# - Reinstall Brew packages from Brewfile (if you maintain one)
# - Re-link apps and permissions as needed

