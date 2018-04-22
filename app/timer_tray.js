const electron = require("electron");
const { Tray } = electron;
class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.mainWindow = mainWindow;
    this.setTooltip("Time App");

    this.on("click", this.onClick.bind(this));
  }

  onClick(event, bounds) {
    const { x, y } = bounds;
    const { height, width } = this.mainWindow.getBounds();
    const osx = process.platform === "darwin";

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: osx ? y + 30 : y - height,
        height,
        width
      });
      this.mainWindow.show();
    }
  }
}

module.exports = TimerTray;
