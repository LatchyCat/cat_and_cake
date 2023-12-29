console.log('This bitch is running oh o ok')

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('closed', () => {
        win = null;
    });

    // Open Dev tools in the browser window when the app is open
    win.webContents.openDevTools();
}

app.on('ready', createWindow);

// This is for mac users
// If the platform is not equal to macOS 'darwin' then close app (When clicking x to close)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
