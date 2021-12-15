/* 
En la página de Registro, debe de cargar un formulario que contenga los campos mostrados en la imagen. 
Al momento de hacer clic en el botón “Enviar” esta información debe ser almacenadas en el local storage 
*/
const regiterDiv = document.querySelector('.register');
const loginDiv = document.querySelector('.login');

const nameR = document.getElementById('name'); 
const userR = document.getElementById('user'); 
const emailR = document.getElementById('emailr'); 
const passwordR = document.getElementById('passwordr'); 

function register(){
    if(nameR.value && userR.value && emailR.value && passwordR.value){
        regiterDiv.style.display = 'none';
        alert('¡Registro exitoso!');
        loginDiv.style.display = 'flex';

        localStorage.setItem('name', nameR.value)
        localStorage.setItem('user', userR.value)
        localStorage.setItem('email', emailR.value)
        localStorage.setItem('password', passwordR.value)

    }else{
        return alert('Por favor llene todos los campos.')
    }
}