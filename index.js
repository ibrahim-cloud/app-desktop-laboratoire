const { app, BrowserWindow } = require("electron");
const path = require("path");
// const fs = require("fs");
const fetch = require('node-fetch');

if (require("electron-squirrel-startup")) {
 
    app.quit();
  }


  const createWindow = () => {
   
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  
  
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
      
    })
  };


  fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(json => console.log(json));
   

  app.whenReady().then(createWindow);
