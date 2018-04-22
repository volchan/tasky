const path = require("path");
const electron = require("electron");

const TimerTray = require("./app/timer_tray");

const { app, BrowserWindow, Tray } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
    show: false
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const osx = process.platform === "darwin";

  const iconName = osx ? "iconTemplate.png" : "windows-icon@2x.png";
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

  new TimerTray(iconPath, mainWindow);
});
