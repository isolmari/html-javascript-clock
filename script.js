function reloj() {
    let ahora = new Date();
    let hour = String(ahora.getHours()).padStart(2, '0');
    let min = String(ahora.getMinutes()).padStart(2, '0');
    let sec = String(ahora.getSeconds()).padStart(2, '0');
    document.getElementById('reloj').textContent = `${hour}:${min}:${sec}`;
}

function registro() {
    let ahora = new Date();
    let hour = String(ahora.getHours()).padStart(2, '0');
    let min = String(ahora.getMinutes()).padStart(2, '0');
    let sec = String(ahora.getSeconds()).padStart(2, '0');
    let momento = `${hour}:${min}:${sec}`;
    document.getElementById('momento').textContent = `Momento registrado: ${momento}`;
}

setInterval(reloj, 1000);

document.getElementById('registrarBtn').addEventListener('click', registro);

