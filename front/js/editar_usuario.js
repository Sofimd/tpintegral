let arguUrl= location.search.substring(1).split("&")



let data =[];

for (let i=0; i<arguUrl.length; i++){
    data[i]=arguUrl[i].split("=")
}

console.log(data)

document.getElementById("dni").value= decodeURIComponent(data[0][1])
document.getElementById("nombre").value=decodeURIComponent(data[1][1]) 
document.getElementById("apellido").value=decodeURIComponent(data[2][1]) 
document.getElementById("email").value=decodeURIComponent(data[3][1]) 
document.getElementById("categoria").setAttribute=decodeURIComponent(data[4][1]) 
document.getElementById("imagen").value=decodeURIComponent(data[5][1]) 


function modificar(){

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

let url= "https://mlmh3113.pythonanywhere.com/usuarios/"+d;

let options = {
    body:JSON.stringify(usuario),
    method: "PUT",
    headers:{'Content-Type':'application/json'}
}

    fetch(url, options)
    .then(function(){
alert("se modifico el producto");
window.location.href='usuarios.html'
    })
    .catch(error=>{
        alert("no se pudo modificar");
        console.error(error);
    })

}