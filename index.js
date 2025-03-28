const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const { contextIsolated } = require("process");


let win;

function createWindow(){
    win = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname,"preload.js"),
        },
        transparent: false,
        frame: false,
        roundedCorners: true,
        backgroundColor: '#fef8ff'
    });
    win.removeMenu();
    win.loadFile("index.html");


    ipcMain.on("load-page",(event,page) => {
        win.loadFile(page);
    });
}
app.whenReady().then(() =>{
    createWindow();
    app.on("activate",() =>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});
app.on("window-all-closed",() =>{
    if(process.platform !== "darwin"){
        app.quit();
    }
});
ipcMain.on("minimize-window", () => {
    win.minimize();
  });
ipcMain.on("maximize-window", () => {
    win.maximize();
  });
  
  ipcMain.on("close-window", () => {
    win.close();
  });