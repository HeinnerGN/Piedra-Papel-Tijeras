function registrarusuario() {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("password").value;

    if (!nombre || !contraseña) {
        alert("Por favor ingrese todos los campos.");
        return;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

    if (usuario[nombre]) {
        alert("El nombre de usuario ya existe. Por favor, ingrese otro.");
    } else {
        usuario[nombre] = contraseña;
        localStorage.setItem('usuario', JSON.stringify(usuario));

        alert('El usuario ha sido registrado con éxito.');

        document.getElementById("Registro").classList.add('hidden');
        document.getElementById("Login").classList.remove('hidden');
    }
}

function iniciarsesion() {
    const nombre = document.getElementById('nombrelogin').value;
    const contraseña = document.getElementById('passwordlogin').value;

    if (!nombre || !contraseña) {
        alert("Por favor ingrese todos los campos.");
        return;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

    if (usuario[nombre] === contraseña) {
        alert("¡Bienvenido " + nombre + "!");
        document.getElementById('Login').classList.add('hidden');
        document.getElementById('Juego').classList.remove('hidden');
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
class jugar {
    constructor() {
        this.resultado = document.getElementById('resultado');
        this.opciones = ['piedra', 'papel', 'tijera'];
        this.asignarEventos();
    }

    asignarEventos() {
        document.getElementById('piedra').addEventListener('click', () => this.jugarjuego('piedra'));
        document.getElementById('papel').addEventListener('click', () => this.jugarjuego('papel'));
        document.getElementById('tijera').addEventListener('click', () => this.jugarjuego('tijera'));
    }

    jugarjuego(opcUsuario) {
        const opcionComputadora = this.opciones[Math.floor(Math.random() * this.opciones.length)];

        opcUsuario = opcUsuario.toLowerCase();
        const opcionComputadoraLower = opcionComputadora.toLowerCase();

        if (opcUsuario === opcionComputadoraLower) {
            this.resultado.textContent = "Empate";
        } else if (
            (opcUsuario === "piedra" && opcionComputadoraLower === "tijera") ||
            (opcUsuario === "papel" && opcionComputadoraLower === "piedra") ||
            (opcUsuario === "tijera" && opcionComputadoraLower === "papel")
        ) {
            this.resultado.textContent = `¡Has Ganado! ${opcUsuario} vence a ${opcionComputadoraLower}`;
        } else {
            this.resultado.textContent = `Has Perdido ${opcionComputadoraLower} vence a ${opcUsuario}`;
        }
    }
}

const user = new jugar();
