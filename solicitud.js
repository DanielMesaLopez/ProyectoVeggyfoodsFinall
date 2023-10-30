document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let servicio = document.getElementById('servicio').value;

    // You can now use the nombre, email, and servicio variables for whatever purpose you need
    console.log(`nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`servicio: ${servicio}`);
});