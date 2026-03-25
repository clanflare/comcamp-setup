dev:
	npx concurrently -n member,platform,core,caddy \
  "cd member-web && bun run dev | sed 's/^/[member] /' " \
  "cd platform-web && bun run dev | sed 's/^/[platform] /' " \
  "cd core-backend && bun run dev | sed 's/^/[core] /' " \
  "sudo caddy run --config ./caddy/local.caddyfile | sed 's/^/[caddy] /' "
