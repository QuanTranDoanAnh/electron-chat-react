// Main process
const { app, BrowserWindow } = require('electron')

function createMainWindow() {
  // Browser Window <-- Renderer process
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      // is a feature that ensures that, 
      //your preload scripts and Electron internal logics, run in separate context
      contextIsolation: false
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(createMainWindow)

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