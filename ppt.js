function registrarusuario(){
    const nombre=document.getElementById("nombre"). value;
    const contraseña=document.getElementById("password"). value;
    if (!nombre||!contraseña){
        alert("Ingrese los requisitos por favor.");
        return;
    }
    const usuario=JSON.parse(localStorage.getItem('usuarios'));
    if('usuarios'[nombre]){
        alert("Este usuario ya está registrado.");
    }
    else{
        usuario[nombre]=contraseña;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('El usuario ha sido registrado con éxito.');
        document.getElementById("nombre").classList.add('hidden');
        document.getElementById("contraseña").classList.remove('hidden');
    }
}

function iniciarsesion(){
    const nombre=document.getElementById("nombre")
}

function jugar(){
    const opciones=['Piedra', 'Papel', 'Tijeras'];
    const opcionComputadora=opciones[Math.floor(Math.random() * opciones.length)];
    
}