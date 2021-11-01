const { ipcRenderer } = require('electron');

const select = selector => document.querySelector(selector)

let container = select('#messages')
let progressBar = select('#progressBar')
// Display the current version
let version = window.location.hash.substring(1);
document.getElementById('version').innerText = version;


ipcRenderer.on('message', function(event, text) {
  var container = document.getElementById('messages');
  var message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
})


ipcRenderer.on('version', (event, text) => {
  version.innerText = text
})

ipcRenderer.on('download-progress', (event, text) => {
    console.log(text)
    progressBar.style.width = `${text}%`
  })