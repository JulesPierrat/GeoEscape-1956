var Pseudo;
var Time;


function RecupLeTempsMis(){
	fetch('MyTime.php')
	.then(resultat => resultat.json())
  	.then(resultat => {
  		console.log(resultat);
  		Time = resultat[0].time
  		document.getElementById('tempsrealise').innerHTML = Math.trunc(Time/60) +"m" + Time%60 + "s";
  	})

}

function RetourAuMenu(){
	Pseudo = document.getElementById('pseudo').value;
	if (Pseudo == 'You' || Pseudo == ''){
		document.getElementById('erreurPseudo').innerHTML = 'Veuillez rentrer un autre pseudo';
		document.getElementById('erreurPseudo').setAttribute('style' , 'text-align: center; color: red;');
	} else {
		fetch('ChangerPseudo.php?pseudo='+Pseudo , {
			method: 'POST',
			header: {'Content-Type': 'application/json'}
		}).then(a => {
			window.location.href='index.php';
		})
		
	}
}

RecupLeTempsMis();