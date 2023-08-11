const linkDestino = document.querySelector('.destino');
const linkPromocoes = document.querySelector('.promocoes');

const urlDestino = '/index.html';
const urlPromocoes = '/promocoes.html';


linkDestino.addEventListener('click', () => window.location.href = urlDestino);
linkPromocoes.addEventListener('click', () => window.location.href = urlPromocoes);
