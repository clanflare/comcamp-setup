// prettier-ignore
const concurrently = require('concurrently');

const services = [
  // Frontend Applications
  {
    name: "member",
    command: "bun run dev",
    cwd: "./member-web",
    color: "cyan",
  },
  {
    name: "platform",
    command: "bun run dev",
    cwd: "./platform-web",
    color: "magenta",
  },
  // {
  //   name: "mobile",
  //   command: "bun run android",
  //   cwd: "./react-native",
  //   color: "blue",
  // },

  // Backend Services
  {
    name: "core",
    command: "bun run dev",
    cwd: "./core-backend",
    color: "yellow",
  },
  {
    name: "jobs",
    command: "bun run jobs:dev",
    cwd: "./core-backend",
    color: "white",
  },

  // Payments
  {
    name: "pay-api",
    command: "bun run dev",
    cwd: "./payments-backend",
    color: "red",
  },
  {
    name: "pay-jobs",
    command: "bun run jobs:dev",
    cwd: "./payments-backend",
    color: "red.dim",
  }, // Restored
  {
    name: "pay-css",
    command: "bun run dev:css",
    cwd: "./payments-backend",
    color: "red.underline",
  },

  // Infrastructure
  // Note: sudo often needs a shell, so we keep the command string as is
  {
    name: "proxy",
    command: "sudo caddy run --config ./caddy/local.caddyfile",
    color: "green",
  },
];

const { result } = concurrently(services, {
  prefix: "name",
  killOthers: ["failure", "success"],
  restartTries: 3,
  // --- KILL & CLEANUP OPTIONS ---
  handleInput: true, // Forwards Ctrl+C to all children
  forceKillable: true, // Sends SIGKILL if SIGTERM is ignored
  sigterm: true, // Ensures graceful shutdown attempt first
});

result.then(
  () => {
    console.log("\n✅ All services exited successfully");
    process.exit(0);
  },
  (err) => {
    console.error("\n❌ Processes terminated");
    process.exit(1);
  },
);
