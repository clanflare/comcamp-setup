// prettier-ignore
const concurrently = require('concurrently');

const payments_path = "/home/saketv/projects/clanflare/cf-payments";

const services = [
  // Frontend Applications
  { name: 'member',   command: 'cd member-web && bun run dev',     color: 'cyan' }, // prettier-ignore
  { name: 'platform', command: 'cd platform-web && bun run dev',   color: 'magenta' }, // prettier-ignore
  // { name: 'mobile',   command: 'cd react-native && bun run android', color: 'blue' }, // prettier-ignore

  // Backend Services
  { name: 'core',     command: 'cd core-backend && bun run dev',   color: 'yellow' }, // prettier-ignore
  { name: 'jobs',     command: 'cd core-backend && bun run jobs:dev', color: 'white' }, // prettier-ignore

  // Payments
  // { name: 'pay-api',  command: 'cd payments-backend && bun run dev', color: 'red' }, // prettier-ignore
  { name: 'pay-api',  command: `cd ${payments_path} && bun run dev`, color: 'red' }, // prettier-ignore
  // { name: 'pay-jobs', command: 'cd payments-backend && bun run jobs:dev', color: 'red.dim' }, // prettier-ignore
  { name: 'pay-css',  command: `cd ${payments_path} && bun run dev:css`, color: 'red.underline' }, // prettier-ignore

  // Infrastructure
  { name: 'proxy',    command: 'sudo caddy run --config ./caddy/local.caddyfile', color: 'green' }, // prettier-ignore
];

const { result } = concurrently(services, {
  prefix: "name",
  killOthers: ["failure", "success"],
  restartTries: 3,
});

result.then(
  () => console.log("All services exited successfully"),
  (err) => console.error("One or more services failed", err),
);
