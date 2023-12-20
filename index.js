// modulos importados
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// solicitação de entrada
inquirer.prompt([
    {
        name: 'url',
        message:'Digite um site:',
    },
]).then((answer) => {

    const url = answer.url;

    // utilização do modulo qr-image para gerar o qr code
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('url.png'));

    // modulo fs para a geração de arquivo txt
    fs.writeFileSync('./sites.txt', url, function(err){
        if(err){
            console.log(err)
        }
        console.log("Arquivo salvo com sucesso")
    })

 
}).catch(err => console.log(err))