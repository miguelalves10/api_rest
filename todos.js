// const listAllTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then(data => console.log(data))
// }

// 1 - Exibir um objeto com quantidada e data
// const listAllTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then(data => console.log({
//             qtd: data.length,
//             data: data
//         }))
// }

// listAllTodos();


// 2 - Exibir um objeto com quantidade e data somente de um usuário específico
// const listAllTodosByIdUser = (id) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then(data => {
//             let dataFiltered = data.filter(i => i.useId === id)
//             console.log({
//                 qtd: dataFiltered.length,
//                 data: dataFiltered
//             })
//         })
// }

// listAllTodosByIdUser(10);


// 3 - Exibir um objeto com quantidade e data somente de um id específico
// const listAllTodosById = id => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then((response) => response.json())
//         .then(data =>  console.log(data))
// }

// listAllTodosById(150);


// 4 - Criar um recurso utilizando o REST API do jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // id: 12
        userId: 2,
        title: 'titulo qualquer',
        body: 'teste'
    })
})
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json, null, 4)))