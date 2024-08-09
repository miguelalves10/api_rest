// consumir a api de cep viacep e criar uma função 
// no qual eu passo o cep e retorno no console os dados do endereço


const retornoEnderecoDosCep = (cep) => {
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then(response => response.json())
    .then(data => console.log(data))

}

retornoEnderecoDosCep('60131000');