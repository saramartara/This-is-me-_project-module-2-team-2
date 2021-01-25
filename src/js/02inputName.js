"user strict";

const nameElement = document.querySelector (".js-name");
const namePreviewElement = document.querySelector (".js-preview-name");

function handleName (event){
    const nameValue = event.target.value;
    if (nameValue === "") {
      /*   console.log ("estoy vacía"); */
        namePreviewElement.innerHTML = "Nombre Apellido";
    } else {
   /*  console.log ("estoy rellena"); */
    namePreviewElement.innerHTML = nameValue;
 }
}
   
nameElement.addEventListener ("keyup", handleName);

