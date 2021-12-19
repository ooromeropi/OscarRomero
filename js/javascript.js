function enviar() {
    let Nombres,Correo,NumContacto,Edad

    Nombres = document.getElementById('Nombres').value
    Correo = document.getElementById('Correo').value
    NumContacto = document.getElementById('NumContacto').value
    Edad = document.getElementById('Edad').value

    if (Edad >= 18) {
    ValEdad = "Usted es mayor de Edad"
    }else {
    ValEdad = "Usted es menor de edad"   
    } 

    alert(Nombres + " " + Correo + " " + NumContacto + " " + ValEdad)  
}


