'use strict';
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var mainWindow = null;
const path = require('path');
const url = require('url');
let win;
// Enable live reload for all the files inside your project directory

require('electron-reload')(__dirname);

app.on('ready', function() {
  mainWindow = new BrowserWindow({
      resizable: true,
      height: 600,
      width: 800,
      webPreferences:{
        nodeIntegration:true,
        contextIsolation: false
      }
});

mainWindow.loadURL('file://' + __dirname + '/pages/index.html');
  mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
  });
});




  
 



