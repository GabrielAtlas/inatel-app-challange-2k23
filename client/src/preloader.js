const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  onClose: () => ipcRenderer.send('window:close'),
  onMinimize: () => ipcRenderer.send('window:minimize')
})

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) {
      element.innerText = text
    }
  }

  const dependencies = ['chrome', 'node', 'electron']

  for (const dependency of dependencies) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
