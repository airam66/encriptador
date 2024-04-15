
const btn_encrypt = document.getElementById("btn-encrypt");
const btn_decrypt = document.getElementById("btn-decrypt");
const btn_copy = document.getElementById("btn-copy");

function encrypt() {
  let textUser = document.getElementById('input_text').value;

  if (textUser != "") {
    let newText = textUser.replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    //mostrar el texto enciptado y ocultar la imagen
    removeClass('.hidden', 'hidden');
    addClass('.text-initial', 'hidden');
    document.querySelector('#show_text').innerHTML = newText;
  } else {
    removeClass('.hidden', 'hidden');
    addClass('.text-encrypt', 'hidden');
  }

}

function addClass(element, clas) {
  document.querySelector(element).classList.add(clas);
}

function removeClass(element, clas) {
  document.querySelector(element).classList.remove(clas);
}

function decrypt() {
  let textUser = document.getElementById('input_text').value;

  if (textUser != "") {
    let newText = textUser.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    removeClass('.hidden', 'hidden');
    addClass('.text-initial', 'hidden');
    document.querySelector('#show_text').innerHTML = newText;
  } else {
    removeClass('.hidden', 'hidden');
    addClass('.text-encrypt', 'hidden');

  }
}

async function copy() {
  try {
    let textEncrypt = document.getElementById('show_text').innerHTML;
    await navigator.clipboard.writeText(textEncrypt);

  } catch (err) {
    console.error('Error al copiar: ', err);

  }
}

function clean() {
  document.querySelector('#input_text').value = '';
}

btn_encrypt.addEventListener("click", encrypt);
btn_decrypt.addEventListener("click", decrypt);
btn_copy.addEventListener("click", copy);


function checkKey(key) {
  return (key >= 'a' && key <= 'z') || [' ','Backspace','Enter'].includes(key);
}


