// Main process
const { app, BrowserWindow, Notification } = require('electron')

function createMainWindow() {
  // Browser Window <-- Renderer process
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createMainWindow()
  const notification = new Notification({ title: 'Hello World', body: 'My test message'})
  notification.show()
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