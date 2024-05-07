import App from "./App";

console.log(`app version: ${APP_VERSION}`);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
