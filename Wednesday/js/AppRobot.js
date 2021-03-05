const { ipcRenderer, globalShortcut } = require("electron");
const robot = require("robotjs");
class AppRobot {
  constructor() {
    console.log("log depuis la page HTML Robot");
    this.initListener();

    const screenSize = robot.getScreenSize();
    this.height = screenSize.height;
    this.width = screenSize.width;
  }

  initListener() {
    ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
  }

  draw() {
    this.angle += 0.2;
    const x = this.width / 2 + Math.cos(this.angle) * this.radius;
    const y = this.height / 2 + Math.sin(this.angle) * this.radius;
    robot.moveMouse(x, y);
    if (this.angle < Math.PI * 2) {
        requestAnimationFrame(this.draw.bind(this));
    }
  }

  onMessage(event, message) {
    if (message == "😵‍💫") {
      robot.setMouseDelay(2);

      this.radius = this.height / 2 - 10;
      this.counter = 0;

      this.draw();
    }
  }

}

window.onload = () => {
  new AppRobot();
};
