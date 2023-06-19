const fs = require('fs');
const path = require('path');

const folderName = 'test'; // Replace with your desired default folder name

function createFilesFromPrompt(fileName) {
  if (!fileName) {
    console.log('Please provide a file name.');
    process.exit(1);
  }

  const jsFileName = `${fileName}.js`; // create at /dev
  const testFileName = `${fileName}.test.js`;
  const testFolderPath = path.join('test', folderName);

  fs.writeFile(jsFileName, '', (err) => {
    if (err) {
      console.log('An error occurred while creating the JavaScript file.');
      console.error(err);
      process.exit(1);
    }
    console.log(`JavaScript file "${jsFileName}" created successfully.`);

    fs.mkdir(testFolderPath, { recursive: true }, (err) => {
      if (err) {
        if (err.code === 'EEXIST') {
          console.log(`Test folder "${testFolderPath}" already exists.`);
        } else {
          console.log('An error occurred while creating the test folder.');
          console.error(err);
          process.exit(1);
        }
      } else {
        const testFilePath = path.join(testFolderPath, testFileName);

        fs.writeFile(testFilePath, '', (err) => {
          if (err) {
            console.log('An error occurred while creating the test file.');
            console.error(err);
            process.exit(1);
          }
          console.log(`Test file "${testFilePath}" created successfully.`);
        });
      }
    });
  });
}

const fileName = process.argv[2];

createFilesFromPrompt(fileName);
