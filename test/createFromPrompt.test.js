const fs = require('fs');
const { expect } = require('chai');
const { exec } = require('child_process');

import createFromPrompt from '../dev/createFilesFromPrompt.js'

describe('File creation script', (options) => {
    const module = createFromPrompt;
    console.log(module);
    
    /**
     * input: Criar múltiplos arquivos e opções simultaneas
     * ex.: 
     * - Usar o FileName na pasta padrão, e o filename 
     *  padrão para o arquivo de testes.
     * entrada createFromPrompt {nomedoarquivo}
     * deve gerar 2 arquivos. 1 chamado {nomedoarquivo}.js
     * e outro chamado {nomedoarquivo}.test.js
     * o principal nesse mesmo diretorio
     * e o arquivo de testes no diretório de testes 
     */
    describe('Test this', () => {
        it('should create a file with the given name and content', (done) => {
            const fileName = 'testfile.txt';
            const content = 'This is the file content.';
            
            exec(`node createFile.js ${fileName} "${content}"`, (error, stdout, stderr) => {
              if (error) {
                done(error);
                return;
              }
        
              fs.readFile(fileName, 'utf8', (err, fileContent) => {
                if (err) {
                  done(err);
                  return;
                }
        
                expect(fileContent).to.equal(content);
                done();
              });
            });
          });
      });

    
    describe('Run test', () => {
    });
})