// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenido a mi página con el mapa personalizado de Google My Maps!");

    // Botón de inicio
    const inicioBtn = document.getElementById('inicio-btn');
    inicioBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Botón de unirse
    const joinBtn = document.getElementById('join-btn');
    joinBtn.addEventListener('click', function() {
        window.location.href = "https://forms.gle/tu_formulario_de_google_forms";
    });
});
