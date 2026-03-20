# Note: Ensure all repos are cloned into the same root directory.

# Frontend Applications
member: cd member-web && bun run dev
platform: cd platform-web && bun run dev
# mobile: cd react-native && bun run android

# Backend Services
core-backend: cd core-backend && bun run dev
core-backend-jobs: cd core-backend && jobs:dev

# Payments
payments-backend: cd payments-backend && bun run dev
payments-jobs: cd payments-backend && jobs:dev
payments-css-dev: cd payments-backend && dev:css

proxy:sudo caddy run --config ./caddy/local.caddyfile
