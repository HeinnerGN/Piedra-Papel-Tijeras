function registrarusuario(){
    const nombre=document.getElementById("nombre").value;
    const contraseña=document.getElementById("password").value;
    if (!nombre||!contraseña){
        alert("Ingrese los requisitos por favor.");
        return;
    }
    const usuario=JSON.parse(localStorage.getItem('usuario')) || {};
    if('usuario'[nombre]){
        alert("Ingrese el nombre de usuario y la contraseña.");
    }
    else{
        usuario[nombre]=contraseña;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('El usuario ha sido registrado con éxito.');
        document.getElementById("Registro").classList.add('hidden');
        document.getElementById("Login").classList.remove('hidden');
    }
}

function iniciarsesion(){
    const nombre=document.getElementById('nombrelogin').value
    const contraseña=document.getElementById('passwordlogin').value

    if(!nombre||!contraseña){
        alert("Ingrese los requisitos por favor.");
        return;
    }
    const usuario=JSON.parse(localStorage.getItem('usuario')) ||{};

    if(usuario[nombre] === contraseña){
        alert("Bienvenido " + nombre + '!');
        document.getElementById('Login').classList.add('hidden');
        document.getElementById('Juego').classList.remove('hidden');
    }
    else{
        alert("Usuario o contraseña incorrectos.")
    }
}

function jugar(opcUsuario){
    const opciones=['Piedra', 'Papel', 'Tijeras'];
    const Computadora=opciones[Math.floor(Math.random() * opciones.length)];

    let resultado=' ';
    
    if(opcUsuario === Computadora){
        resultado="Empate" + "Ambos eligieron" `${opcUsuario}`;
    }
    else if(
        (opcUsuario === 'Piedra' && Computadora === 'Tijeras') ||
        (opcUsuario === 'Papel' && Computadora === 'Piedra') ||
        (opcUsuario === 'Tijeras' && Computadora === 'Papel')
    ){
        resultado= `¡Has Ganado! ${opcUsuario} vence a ${Computadora}`;
    }
    else{
        resultado= `Has perdido ${Computadora} vence a ${opcUsuario}`;
    }

    document.getElementById('resultado').innerText=`La computadora ha elegido ${Computadora}\n${resultado}`;
}
