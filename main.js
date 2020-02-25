const { app, BrowserWindow } = require('electron');

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        show: false,
    });
    mainWindow.maximize();
    mainWindow.loadFile('index.html');
    mainWindow.show();
});