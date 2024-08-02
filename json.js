// SEM ARROW FUNCTION

// console.log('antes do fetch');

// fetch('https://jsonplaceholder.typicode.com/users', console.log('executando o fetch'))
//     .then(function(response) {
//         console.log('pegando o response', response);
//         return response.json();
//     }) 
//     .then(function(json) {
//         console.log('pegando o json', json);
//         // return console.log(json);
//     });

// console.log('finalizando o fetch');





// COM ARROW FUNCTION
console.log('antes do fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error.message));

console.log('finalizando o fetch');