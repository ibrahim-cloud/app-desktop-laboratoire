const { app, BrowserWindow } = require("electron");
const fs = require("fs");
function createWindow() {
  const win = new BrowserWindow({
    width: 1920 ,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("Login.html");
}


app.whenReady().then(createWindow);