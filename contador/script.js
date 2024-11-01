
const dataInicio = new Date(2023, 6, 12); 
const anosElement = document.getElementById('anos');
const mesesElement = document.getElementById('meses');
const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

function atualizarContador() {
    const dataAtual = new Date();
    const diferenca = dataAtual - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    anosElement.innerText = `${anos} anos`;
    mesesElement.innerText = `${meses} meses`;
    diasElement.innerText = `${dias} dias`;
    horasElement.innerText = `${horas} horas`;
    minutosElement.innerText = `${minutos} minutos`;
    segundosElement.innerText = `${segundos} segundos`;
}


setInterval(atualizarContador, 1000);


let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const bolinhas = document.querySelectorAll('.bola');
const totalImages = images.length;

function mostrarProximaImagem() {
    images[currentIndex].classList.remove('active'); 
    bolinhas[currentIndex].classList.remove('active'); 

    currentIndex = (currentIndex + 1) % totalImages; 
    images[currentIndex].classList.add('active'); 
    bolinhas[currentIndex].classList.add('active'); 
}


setInterval(mostrarProximaImagem, 3000);
