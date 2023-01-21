var textInput = document.querySelector ("#input-texto");
var outInput = document.querySelector ("#output");

textInput.addEventListener("keypress", function(e) {
        if(!checkChar(e)) {
            e.preventDefault();
            alert("Digite apenas letras minúsculas e sem acento.");
        }
    });

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z]';
    
        if(char.match(pattern) || e.keyCode == 32 || e.keyCode == 13) {
            return true;
        }
}

function textoVazio(texto) {

        if(texto.length === 0) {
            return false; 
        }
        else 
        return true;

}
function criptografar() {
 
    var textoCriptografar = textInput.value;

        if(!textoVazio(textoCriptografar)) {
            alert("O campo de texto está vazio!!")
            return; 
        }

    var resultCripto = 
    textoCriptografar.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat"); 


    document.getElementById ('output').innerHTML = '<textarea readonly id="input-resultado">'
    + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar () {

    var textoDescriptografar = textInput.value; 

        if(!textoVazio(textoDescriptografar)) {
            alert("O campo de texto está vazio!!")
            return; 
        }

    var resultDescripto = 
    textoDescriptografar.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u"); 

    document.getElementById ('output').innerHTML = '<textarea readonly id="input-resultado">'
    + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {

    var textoCop = document.getElementById('input-resultado'); 

    textoCop.select();
    document.execCommand('copy');
    alert ("Texto copiado para a área de transferência")
}

