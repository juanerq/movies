/* Implementar un menú de navegación que cuente con logo, página de inicio y registro.

En la página de inicio se debe visualizar un slider de imágenes de las películas.

Debajo del slider se deben cargar la tarjeta de las películas con su respectivo nombre e imagen (esta configuración se debe realizar desde JavaScript). 

En la página de Registro, debe de cargar un formulario que contenga los campos mostrados en la imagen. 

Al momento de hacer clic en el botón “Enviar” esta información debe ser almacenadas en el local storage */

let card = document.getElementById('card');

const movies = {
    movie_1: {name: 'It', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/it.jpg'},
    movie_2: {name: 'Poltergeist',description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!',  image: './img/poltergeist.jpg'},
    movie_3: {name: 'Halloween', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/halloween.jpg'},
    movie_4: {name: 'Freddy Krueger', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/freddykrueger.jpg'},
    movie_5: {name: 'Alien Covenant', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/alien.jpg'},
    movie_6: {name: 'Venom', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/venom.jpg'},
    movie_7: {name: 'La monja', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/monja.jpg'},
    movie_8: {name: 'El titere', description: 'numquam temporibus iure voluptas at minima aliquam non vitae, voluptatem sint quaerat quo ipsam nesciunt quasi explicabo! Laudantium, vitae veritatis!', image: './img/titere.jpg'},
}


card.style.display = 'flex';
card.style.width = '90%';
card.style.flexWrap = 'wrap'
card.style.margin = '20px auto'


for(const element in movies){

    const container = document.createElement('div');
    container.className = element;
    card.appendChild(container);
    // Style container
    container.style.backgroundColor = '#ffba66';
    container.style.borderRadius = '8px';
    container.style.width = '280px'
    container.style.margin = ' 15px 10px'
    container.style.padding = '10px'
    container.style.boxShadow = '5px 5px 0 #b96600';

    const name = document.createElement('h2');
    name.textContent = movies[element].name;
    container.appendChild(name);
    // Style name
    name.style.textAlign = 'center';
    name.style.color = '#fff';
    name.style.border = '3px solid #fff';
    name.style.backgroundColor = 'darkorchid';
    name.style.padding = '5px'
    name.style.width = '100%'
    name.style.borderRadius = '8px';
    name.style.margin = '10px 0';

    const image = document.createElement('img')
    image.setAttribute('src', movies[element].image);
    container.appendChild(image);
    // Style image
    image.style.width = '100%';
    image.style.height = '320px';
    image.style.objectFit = 'cover';
    image.style.borderRadius = '8px';

    const description = document.createElement('p');
    container.appendChild(description);
    description.style.textAlign = 'center';

    let showDescription = true;

    image.addEventListener('click', ()=>{
        if(showDescription){
            image.style.height = '220px'
            description.innerHTML = movies[element].description;
            showDescription = false;
        }else{
            image.style.height = '320px';
            description.innerHTML = '';
            description.style.height = '0'
            showDescription = true;
        }
    })
}

