#!/bin/bash
# 1. Configuration
declare -A REPOS=(
  ["member-web"]="git@github.com:clanflare/cf-comcamp-app-web.git"
  ["platform-web"]="git@github.com:clanflare/cf-comcamp-platfrom.git"
  ["react-native"]="git@github.com:clanflare/cf-comcamp-app-mobile.git"
  ["core-backend"]="git@github.com:clanflare/cf-comcamp-backend.git"
  ["payments-backend"]="git@github.com:clanflare/cf-payment-gateway.git"
  ["caddy"]="git@github.com:clanflare/caddy-config-comcamp.git"
)

echo "🚀 Starting Multi-Repo Setup..."

# 2. Clone and Install
for NAME in "${!REPOS[@]}"; do
  if [ ! -d "$NAME" ]; then
    echo "Cloning $NAME..."
    git clone "${REPOS[$NAME]}" "$NAME"
  else
    echo "✔ $NAME already exists."
  fi
done

echo "✅ Setup Complete! Run 'nf start' to launch."
echo "Run ./install-packages.sh to install packages."
