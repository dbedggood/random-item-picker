import App from "./App";

console.log(`v${APP_VERSION}`);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
