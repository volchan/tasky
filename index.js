const path = require("path");
const electron = require("electron");

const TimerTray = require("./app/timer_tray");
const MainWindow = require("./app/main_window");

const { app, ipcMain } = electron;

let mainWindow, tray;

app.on("ready", () => {
  app.dock.hide();

  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

  const osx = process.platform === "darwin";
  const iconName = osx ? "iconTemplate.png" : "windows-icon@2x.png";
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  tray = new TimerTray(iconPath, mainWindow);
});

ipcMain.on("update-timer", (event, timeLeft) => {
  tray.setTitle(timeLeft);
});
