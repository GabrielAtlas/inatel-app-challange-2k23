const { app, ipcMain, BrowserWindow } = require('electron')

const isDev = require('electron-is-dev')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 960,
    height: 640,
    resizable: false,
    frame: false,
    roundedCorners: true,
    backgroundColor: 'transparent',
    title: 'iMeeter',
    titleBarStyle: 'hidden',
    maximizable: false,
    darkTheme: false,
    webPreferences: {
      preload: path.join(__dirname, 'preloader.js'),
      webSecurity: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  })

  let appUrl = 'http://localhost:3000'

  if (!isDev) {
    appUrl = `file://${path.join(__dirname, '../build/index.html')}`
  }

  win.loadURL(appUrl)

  ipcMain.on('window:minimize', event => {
    const browserWindow = BrowserWindow.fromWebContents(event.sender)
    browserWindow?.minimize()
  })

  ipcMain.on('window:close', event => {
    const browserWindow = BrowserWindow.fromWebContents(event.sender)
    browserWindow?.close()
  })
}

app.on('ready', () => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      return createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    return app.quit()
  }
})
