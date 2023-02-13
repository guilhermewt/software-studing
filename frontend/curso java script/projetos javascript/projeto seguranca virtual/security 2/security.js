const jhonatan = ['pedro','lucas'];
const miguel = ['santana','guilherme'];

function fazerVerificacao(){
	convidadorPor = document.getElementById('convidadoPor').value;
	nomeConvidado = document.getElementById('nome').value;
	

    if(convidadorPor === 'jhonatan'){
    	if(jhonatan.includes(nomeConvidado)){
		  document.getElementById('permissao').innerText = 'autorizado'	
	    }
	    else{
		  document.getElementById('permissao').innerText = 'convidado de jhonatan nao identicado'
	    }
    }

    else if(convidadorPor === 'miguel'){
    	if(miguel.includes(nomeConvidado)){
		  document.getElementById('permissao').innerText = 'autorizado'	
	    }
	    else{
		  document.getElementById('permissao').innerText = 'convidado de miguel nao identicado'
	    }
    }

    else{
    	document.getElementById('permissao').innerText = 'convidadorPor nao identificado'
    }

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


	
}