const { app, BrowserWindow } = require("electron");

let win = null;

function createWindow(){
    win = new BrowserWindow({
        width:1024,
        height:768,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
        },
    });
   
    win.loadFile("index.html");
    //win.setFullScreen(true);
    //win.maximize();
}

function initBot(){
    const { DiscordBotRobot } = require('./DiscordBotRobot');
    new DiscordBotRobot("ODE1ODYyNzgyMjE3NDIwODAw.YDylbQ.Pva3Zj7SpUkrnIuLHBvqZMWOjpQ",
    win
    );
}
app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow).then(initBot);

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});