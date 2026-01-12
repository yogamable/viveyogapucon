

const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))


const btnInscribirme = document.querySelector(".boton-inscribirme");
const mensajeEnvio = document.querySelector("#contenedor-mensaje");

btnInscribirme.addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombreyapellido").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const autorizacion = document.querySelector("#autorizacion").checked;
    const pack = document.querySelector("#packElegido").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();

    if (
        nombre &&
        email &&
        telefono &&
        autorizacion &&
        pack &&
        mensaje
    ) {
        mensajeEnvio.classList.remove("d-none");
    } else {
        mensajeEnvio.classList.add("d-none");
        alert("Por favor completa todos los campos.");
    }
});


