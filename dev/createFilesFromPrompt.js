const fs = require('fs');
const path = require('path');

const folderName = '_tests_';

function createFilesFromPrompt(fileName) {
  if (!fileName) {
    console.log('Please provide a file name.');
    process.exit(1);
  }

  const jsFileName = `${fileName}.js`;
  const testFileName = `${fileName}.test.js`;
  const devFolderPath = 'dev';
  const testFolderPath = path.join('test', folderName);

  // template js file
  const jsContent = `const ${fileName} = (w, h) => {
  return w * h;
};
export default ${fileName};`;

  // template test file

  const testContent = `import { expect } from 'chai';
import ${fileName} from '../../dev/${fileName}.js';

describe('Testing functions using JavaScript syntax', () => {
  // problem setup test
  
  const module = ${fileName};

  describe('Test the input based on the arguments', () => {
    it('Should be a function using two parameters', () => {
      expect(module).to.be.a('function');
      expect(module.length).to.equal(2);
    });
  });

  // program test
  describe('Run test on the main program', () => {
    // Add your test cases here
  });
});`;

  const devFilePath = path.join(devFolderPath, jsFileName);
  const testFilePath = path.join(testFolderPath, testFileName);

  fs.mkdir(devFolderPath, { recursive: true }, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.log(`Dev folder "${devFolderPath}" already exists.`);
      } else {
        console.log('An error occurred while creating the dev folder.');
        console.error(err);
        process.exit(1);
      }
    } else {
      fs.writeFile(devFilePath, jsContent, (err) => {
        if (err) {
          console.log('An error occurred while creating the JavaScript file in the dev directory.');
          console.error(err);
          process.exit(1);
        }
        console.log(`JavaScript file "${devFilePath}" created successfully.`);
      });
    }
  });

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
      fs.writeFile(testFilePath, testContent, (err) => {
        if (err) {
          console.log('An error occurred while creating the test file.');
          console.error(err);
          process.exit(1);
        }
        console.log(`Test file "${testFilePath}" created successfully.`);
      });
    }
  });
}

const fileName = process.argv[2];

createFilesFromPrompt(fileName);
