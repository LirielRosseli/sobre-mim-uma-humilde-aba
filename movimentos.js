function imprimirMensagem(resposta){
	let mensagensDiv = document.getElementById("mensagens");
  let imagem = document.getElementById("girl");
 
 mensagensDiv.innerHTML = "";
  
  if (resposta==='Sim'){
  	mensagensDiv.innerHTML += "\n Maravilha! <br>" + 
    "Gosto... <br>" +
    "<ul>" +
    "<li>🌷 ...da natureza - as flores, as plantas, os animais, o céu, o mar, a chuva, o sol, a lua e as estrelas...</li><br>" +
    "<li>💻🧩 ...de programar, de ser desafiada, de explorar o novo...</li><br>" +
    "<li>🎨 ... de criar, desenhar, pintar, decorar e organizar...</li><br>" +
    "<li>🎀 ... de presentear e transmitir alegria!...</li><br>" +
    "<li>💁‍♀️💁‍♂️ ... da minha família, de conversar e interagir com a sociedade...</li><br>" +
    "<li>🙏 ... ficar mais pertinho de Jesus e adora-Lo...</li><br>" +
    "<li>🎈 ... de ficar sozinha as vezes, para relaxar e pensar melhor.</li><br><br>" +
    "E você, o que te deixa feliz? 😊";
    imagem.src = "https://i.postimg.cc/NFKw7wCP/girl2.png"
    
     let gummybear = document.getElementById("gummybear");
     gummybear.style.display = "block";
     gummybear.style.visibility = "visible";
  }
  else {
  	mensagensDiv.innerHTML += "<br> Ah, tudo bem! Se mudar de ideia, estou aqui.";
    imagem.src = "https://i.postimg.cc/Jn8KmcWr/girl3.png"
    
     let gummybear = document.getElementById("gummybear");
     gummybear.style.display = "block";
     gummybear.style.visibility = "visible";
  }
  
  document.getElementById("amarelinho").style.pointerEvents = "none";
  document.getElementById("azuzinho").style.pointerEvents = "none";
  
}

function tentarNovamente(){
	location.reload() //recarrega a página
}