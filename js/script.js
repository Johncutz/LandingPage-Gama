const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let form = document.getElementById('form');

    let loader = document.getElementById('loader');
    loader.style.visibility = "visible";
    form.innerHTML = loader;

    let pronto = `<p>Pronto! Cadastro feito com Sucesso!</p>`;


    setTimeout(() => {
        loader.style.visibility = 'hidden';
        form.innerHTML = pronto;
    }, 1250)
});