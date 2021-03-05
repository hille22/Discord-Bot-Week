const { app, BrowserWindow } = require("electron");

let win = null;

function createWindow(){
    win = new BrowserWindow({
        width:1024,
        height:768,
        transparent:true,
    frame: false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
        },
    });
    
    win.loadFile("index.html");
    win.setFullScreen(true);
    win.maximize();
    setTimeout(()=>win.reload(), 1000);
    //win.setOpacity(0.5);
}

function initBot(){
    const { DiscordBot } = require('./DiscordBot');
    new DiscordBot("ODE3MzE5MTI2MzIxNTk0Mzg5.YEHxwA.bG1Z-hyMOouDGPGPHaCfxUFya0M",
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