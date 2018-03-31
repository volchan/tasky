const path = require("path");
const electron = require("electron");

const { app, BrowserWindow, Tray } = electron;

let mainWindow, trayIcon;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === "darwin" ? "iconTemplate.png" : "windows-icon@2x.png";
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  trayIcon = new Tray(iconPath);
});
