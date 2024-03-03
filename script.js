function changeName(){
    let name = prompt("¿Cúal es tu nombre?");
    document.getElementById("name").textContent = "Hola " + name;
    document.title = "Saludos " + name;


}