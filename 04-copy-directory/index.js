const fs = require('fs');
const path = require('path');

const oFolder = path.join(__dirname, 'files');
const cFolder = path.join(__dirname, 'files-copy'); 

fs.promises.mkdir(cFolder, {recursive: true}, () => {});
fs.readdir(cFolder,{withFileTypes: true}, (err, items) => {
  items.forEach((item) => {fs.unlink(path.join(cFolder, item.name), () => {});
  });
  fs.readdir(oFolder,{withFileTypes: true}, (err, items) => {
    items.forEach((item) => {
      fs.copyFile(path.join(oFolder, item.name), path.join(cFolder, item.name),() => {});});
  });
});