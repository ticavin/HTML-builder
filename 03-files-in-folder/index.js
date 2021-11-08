const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');

async function info(item) {
  const fp = path.join(folder, item);
  const name = path.basename(item, path.extname(item));
  const ext = path.extname(item);
  fs.stat(fp, (error, data) => {
    const size =Math.floor((data.size / 1024) * 100) / 100;
    console.log(`${name} - ${ext.slice(1)} - ${size}KB`);
  });
}
fs.promises.readdir(folder, {withFileTypes: true}).then(
  items => {
    for (let item of items) {
      if (item.isFile()) {
        info(item.name);
      }
    }
  });

