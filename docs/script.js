var jogador = 'x';
var html = 'x';
var jogada = 0;
function chkJogo(id){
	var src = chkSrc(id);
	var cpu = document.getElementById('cpu').checked;
	if(src == "branco.png"){
		document.getElementById(id).src = jogador + ".png";
		jogada++;
		if(chkVitoria() == true){
			location.href = html+"vencedor.html";
			
		}
		if(chkVitoria() == false && jogada == 9){
			location.href = "empate.html";
			
		}
		if(jogador == 'x'){
			jogador = 'o';
			html = 'o';
		}else{
			jogador = 'x';
			html = 'x';
		}
	}
	if(cpu&&jogador=='o'){
		chkJogo(jogadaDoComputador());
		
	}
}
function jogadaDoComputador(){
	if(chkVitoria()==true){
		html = 'x';
	}
	if(chkSrc('cel5')=='branco.png'){
		return'cel5';
	}
	return'cel'+Math.floor((Math.random()*9)+1);
	
}

function chkSrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length -10, src.length);
}


function chkVitoria(){
	if(chkSrc('cel1') == chkSrc('cel2')&& chkSrc('cel1') == chkSrc('cel3') && chkSrc('cel1') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel4') == chkSrc('cel5')&& chkSrc('cel4') == chkSrc('cel6') && chkSrc('cel4') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel7') == chkSrc('cel8')&& chkSrc('cel7') == chkSrc('cel9') && chkSrc('cel7') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel1') == chkSrc('cel4')&& chkSrc('cel1') == chkSrc('cel7') && chkSrc('cel1') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel2') == chkSrc('cel5')&& chkSrc('cel2') == chkSrc('cel8') && chkSrc('cel2') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel3') == chkSrc('cel6')&& chkSrc('cel3') == chkSrc('cel9') && chkSrc('cel3') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel1') == chkSrc('cel5')&& chkSrc('cel1') == chkSrc('cel9') && chkSrc('cel1') != 'branco.png'){
		return true;
	}
	else if(chkSrc('cel3') == chkSrc('cel5')&& chkSrc('cel3') == chkSrc('cel7') && chkSrc('cel3') != 'branco.png'){
		return true;
	}else{
		return false;
	}
}

function reiniciaJogo(){
	location.href = "index.html";
}












