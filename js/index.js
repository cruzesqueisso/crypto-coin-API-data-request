fetch(api.url()).then(response => {
    if ( ! response.ok)
        throw new Error(`Falha ao realizar requisição a API, código "${response.status} e status "${response.statusText}"`);
    return response.json();
}).then(api => {
    let html = '';
    console.log(api);
    for(let i = 0; i < 10; i++) {
        html += `
            <div class="media mb-3 shadow p-3">
                <img src="./img/cryptocurrency-logo.png" class="align-self-center mr-3" alt="coin" width="100">
                <div class="media-body">
                    <h5 class="mt-2">#${i + 1} ${api.data[i].name}</h5>
                    <p>Abreviação: ${api.data[i].symbol}</p>
                </div>
            </div>`;
    }
    document.getElementById('coins-container').innerHTML = html;
}).catch(error => {
    let el = document.querySelector('#error-alert .modal-content');
    el.innerHTML = `
        <div style="background-color: red; color: white;"><h1>Erro</h1></div>
        <p>O seguinte erro foi disparado "${error.message}"</p>
        <p>Verifique se CORS no seu navegador esteja habilitado, pois não foi desenvolvido um backend para fazer roteamento das chamadas da API (coinmarketcap), onde a mesma funciona exclusivamente assim para proteger a chave da API no backend e não utiliza-la no frontend como esta sendo feito neste exercício</p>`;
    document.getElementById('error-alert').style.display = 'block';
    console.error(error.message);
});