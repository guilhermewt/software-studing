
guilherme = ['gabriel','silva','novais']
marcos = ['antonio','marcos','gabriel']

function fazerVerificacao(){
    nome = document.getElementById('nome').value;
    convidadorPor = document.getElementById('convidadoPor').value;

    guilherme.push(nome)

    let index = guilherme.indexOf('gabriel') //excluir
    guilherme.splice(index,1)

    console.log(guilherme)


    if(guilherme.includes(nome)){
        document.getElementById('permissao').innerText = guilherme
    }
    else if(nome === ''){
        document.getElementById('permissao').innerText = 'campo vazio'
    }
    else{
        document.getElementById('permissao').innerText = 'permissao negada'
    }

    showList()
}

function showList(){
    document.getElementById('list').innerText = guilherme
}