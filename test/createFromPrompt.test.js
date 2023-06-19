const fs = require('fs');
const { expect } = require('chai');
const { exec } = require('child_process');

describe('File creation script', (options) => {
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
    
    describe('Run test', () => {
    });
})