// Main process
const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const isDev = !app.isPackaged

function createMainWindow() {
  // Browser Window <-- Renderer process
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      // is a feature that ensures that, 
      //your preload scripts and Electron internal logics, run in separate context
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
  })
  mainWindow.loadFile('index.html')
  isDev && mainWindow.webContents.openDevTools()
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })

}

app.whenReady().then(createMainWindow)

ipcMain.on('notify', (e, message) => {
  new Notification({ title: 'Notification', body: message }).show()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('active', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})