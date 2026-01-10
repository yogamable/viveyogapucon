

const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

document.querySelector('.boton-inscribirme').addEventListener('click', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombreyapellido').value;
    const email = document.getElementById('email').value;
    const pack = document.getElementById('packElegido').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email) {
        alert("Por favor completa nombre y email");
        return;
    }

    // 👉 mostrar mensaje primero
    const mensajeEnvio = document.getElementById('mensaje-envio');
    mensajeEnvio.classList.remove('d-none');

    const destinatario = "info@viveyogapucon.com";
    const asunto = `Nueva inscripción ${nombre} - Vive Yoga Pucón`;

    const cuerpo = `
Nombre: ${nombre}
Email: ${email}
Pack seleccionado: ${pack}

Mensaje:
${mensaje}
    `;

    // 👉 esperar un poco y recién abrir el mail
    setTimeout(() => {
        window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    }, 300);
});
