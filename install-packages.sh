#!/bin/bash

# 1. Configuration (Matching your folder names)
REPOS=("member-web" "platform-web" "react-native" "core-backend" "payments-backend")

echo "Starting Bun Installation for all Clanflare repos..."

# 3. Loop through and Install
for NAME in "${REPOS[@]}"; do
  if [ -d "$NAME" ]; then
    echo "------------------------------------------------"
    echo "📦 Installing packages in: $NAME"
    echo "------------------------------------------------"

    # Navigate into the directory, run bun install, and return
    (cd "$NAME" && bun install)

    if [ $? -eq 0 ]; then
      echo "✅ $NAME: Success"
    else
      echo "❌ $NAME: Failed to install"
    fi
  else
    echo "⚠️  Directory $NAME not found. Please run the setup script first."
  fi
done

echo ""
echo "All installations finished!"
echo "Run 'nf start' to begin development."
