function guardar(){
    let d=document.getElementById("dni").value
    let n=document.getElementById("nombre").value
    let a=document.getElementById("apellido").value
    let e=document.getElementById("email").value
    let c =document.getElementById("categoria").value
    let i=document.getElementById("imagen").value



let usuario = {
    dni:d,
    nombre:n,
    apellido:a,
    email:e,
    tipo:c,
    foto:i

}

let url= "https://mlmh3113.pythonanywhere.com/usuarios"

let options = {
    body:JSON.stringify(usuario),
    method: "POST",
    headers:{'Content-Type':'application/json'}
}

fetch(url, options)
.then(function(){
    alert("success");
    window.location.href='usuarios.html'
})
.catch(error=>{
    alert("no se pudo crear el usuario");
    console.error(error);
})
}