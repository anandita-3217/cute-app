const {contextBridge,ipcRenderer } = require("electron");
contextBridge.executeInMainWorld("electronAPI",{
    loadPage: (page) => ipcRenderer.send("load-page",page),
    minimizeWindow: () => ipcRenderer.send("minimize-window"),
    minimizeWindow: () => ipcRenderer.send("maximize-window"),
    closeWindow: () => ipcRenderer.send("close-window"),
});