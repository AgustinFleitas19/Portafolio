let boton = document.getElementById("primer")



boton.addEventListener("click", function(){
  alert("Gracias por hacer click");
});


const form =document.getElementById("form-id")


form.addEventListener('submit', function(event)
{
  event.preventDefault();
  validateForm();
})



function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
  const mensaje = document.getElementById("text").value;
  if (typeof mensaje != String) alert("Ingresa palabras o texto");
}

function validateText(){


} 



document.querySelector("button.button-menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });