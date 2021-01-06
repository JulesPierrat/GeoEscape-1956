function init() {
	const coord_init = {
		lat : 48.840254, 
		lon : 2.350557 
	}
	const zoomLevel = 18;

	map = L.map('mapid',{minZoom: 0 , maxZoom: 18}).setView( [coord_init.lat , coord_init.lon] , zoomLevel );

	const fond_carte = {
		normal : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ,
		black_and_white : 'http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
		thunderforest : 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=<283f43515b8e422b88b1b31f2f88a42d>'
	}

	const main_layer = L.tileLayer(fond_carte.normal, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});
	
	main_layer.addTo(map);

}

function Progression (chapitre , nom){
	var paragraphe = document.getElementById("progression");
	paragraphe.innerHTML = "Chapitre " + chapitre + ":  " + nom ;
}

function AddObject(n , nom){

	var lien_image = document.getElementById('lim'+n);
	var image = document.getElementById('obj'+n);

	lien_image.setAttribute('class' , 'obj-t');
	lien_image.setAttribute('href' , 'media/'+nom);
	lien_image.setAttribute('target' , '_blank');

	image.setAttribute('src','media/obj/obj'+n+'.png');
}

function MissionName(n , chapitre , name){
	var titre = document.getElementById("titre-modal1")
	var sous_titre = document.getElementById("stitre-modal1");
	
	titre.innerHTML = "Chapitre " + n + " : " + chapitre;
	sous_titre.innerHTML = name;

}

function MissionContenu(n){
	var contenu = document.getElementById("mission"+n).innerHTML;
	document.getElementById("contenu-modal1").innerHTML = contenu;
}

function getMarker(){
	liste_marker = [];
	fetch('getMarker.php')
	.then(resultat => resultat.json())
  	.then(resultat => {
  		console.log(resultat);
    	for (var i = 0; i < resultat.length; i++) {
    		var name = resultat[i].NAME;
    		var longitude = resultat[i].LONGITUDE;
    		var latitude = resultat[i].LATITUDE;
    		var zoomMin = resultat[i].ZOOMMIN;
    		var chap = resultat[i].CHAPITRE;
    		var statut = resultat[i].STATUT;
    		var contenuHTML0 = resultat[i].HTML0;
    		var contenuHTML1 = resultat[i].HTML1;
    		var icon;
    		if (mission == 3){

    		} 
    		if (chapitre <= chap) {
    			icon = resultat[i].ICON;
    		} else {
    			icon = resultat[i].ICON2;
    			statut = 1;
    		}
    		var logo = L.icon({
    			iconUrl: icon,
    			iconSize: [50,50],
    			iconAnchor: [25,25],
    			popupAnchor: [0,-30]
    		});

    		var marker = new L.Marker([latitude , longitude], {
          		icon: logo,
          		title: name
      		});

      		if (statut == 0){
				var content = "<h2>" + name + "</h2>" + contenuHTML0;
      		} else {
      			if (statut == 1) {
      				var content = "<h2>" + name + "</h2>" + contenuHTML1;
      			} else {
      				var content = "<h2>" + name + "</h2>" + contenuHTML2;
      			}
      		}
      		

      		marker.bindPopup(content, {
          		maxWidth: '500'
      		});

      		if (chap > chapitre){

      		} else {
      			if (zoomMin != 0){
      				lieuxZ.addLayer(marker);
      			} else {
      				lieux.addLayer(marker);
      			}
      		}
      		/*liste_marker.push(marker);
      		liste_icone.push(icon);*/


    	}
  	})
}

function Chapitre1(){
	var N = '1';
	var TITRE = 'Commencement';
	var Mission = 'Une lettre mystèrieuse';

	Progression(N , TITRE);
	MissionName('1' , TITRE , Mission);
	MissionContenu('1');
	AddObject('1' , 'lettre1.png');
	AddObject('2' , 'carte-postale-cousin.png');
	AddObject('3' , 'facture_imprimerie.png');
}

function Chapitre21(){
	chapitre = 2;
	var N = '2';
	var TITRE = 'La Librairie';
	var Mission = 'Une nouvelle piste';

	Progression(N , TITRE);
	MissionName('2' , TITRE , Mission);
	MissionContenu('2');
	AddObject('4' , 'obj4.png');
	AddObject('5' , 'obj5.png');
	document.getElementById("info_sub").click();
}

function VerificationCodeChap1(){
	code = document.getElementById("codeChap1").value;
	document.getElementById("codeChap1").value = "";
	if (code == '04111937'){
		document.getElementById("codeFauxChap1").innerHTML = "Code bon";
		document.getElementById("codeFauxChap1").setAttribute("style" , "color: green;text-align: center");
		document.querySelectorAll(".leaflet-popup-close-button").forEach(a => {a.click()});

		//recharger la liste des points
		chapitre = 2;
		var lieuxZ = new L.FeatureGroup();
		var lieux = new L.FeatureGroup();
		getMarker()

		Chapitre21();
	} else {
		document.getElementById("codeFauxChap1").innerHTML = "Code faux";
		document.getElementById("codeFauxChap1").setAttribute("style" , "color: red;text-align: center");
	}
}

function OuvrirLibrairie(){
	var haveKey = false;
	var test = document.getElementById("lim6").getAttribute('class')
	if (test == 'obj'){
		//Message d'erreur
		document.getElementById("keyLibrairie").innerHTML = "Vous n'avez pas la bonne clé";
	} else {
		//Ouvrir la librairie
		document.querySelectorAll(".leaflet-popup-close-button").forEach(a => {a.click()});
		chapitre = 3;
		var lieuxZ = new L.FeatureGroup();
		var lieux = new L.FeatureGroup();
		getMarker()
		var Mission = "Une drôle d'adresse";
		var TITRE = 'LIBERATION';
		Progression('3' , TITRE);
		MissionName('3' , TITRE , Mission);
		MissionContenu('4');
		AddObject('7','obj7.png');
		AddObject('8','obj8.png');
		document.getElementById("info_sub").click();
	}
}

function PrendreLaClef(){
	document.querySelectorAll(".leaflet-popup-close-button").forEach(a => {a.click()});
	mission = 3;
	var Mission = 'Retour à la librairie';
	var TITRE = 'La Librairie';
	AddObject('6','obj6.png');
	MissionName('2' , TITRE , Mission);
	MissionContenu('3');
	document.getElementById("info_sub").click();
}

function OuvrirLaPorte(){
	document.querySelectorAll(".leaflet-popup-close-button").forEach(a => {a.click()});
	chapitre = 4;
	var Mission = 'Le Kidnappeur';
	var TITRE = 'LIBERATION';
	MissionName('3' , TITRE , Mission);
	MissionContenu('5');
	var lieuxZ = new L.FeatureGroup();
	var lieux = new L.FeatureGroup();
	getMarker()
	document.getElementById("info_sub").click();
}

function Fin(){
	document.querySelectorAll(".leaflet-popup-close-button").forEach(a => {a.click()});
	var Mission = "Mission accomplie";
	var TITRE = "FIN"
	MissionName('4' , TITRE , Mission);
	MissionContenu('6');
	document.getElementById("continuer-modal").setAttribute('onclick','PageFinale()');
	document.getElementById("info_sub").click();
}

function PageFinale(){
	time = countdownManager.dateDiff(new Date , countdownManager.targetTime);
	var ladate = new Date();
	var dtime = 600 - (time.min*60 + time.sec);
	var jour = ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
	console.log(dtime);

	const insertTime = async function(data){
		let response = await fetch('addTime.php?time='+dtime.toString()+'&date='+jour , {
			method: 'POST',
			header: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
	}

	insertTime({
		name: 'time',
		value: dtime
	});

	window.location.href='victoire.php'
}

/***************           Compte à rebours            ***************/ 
countdownManager = {

	// Configuration
	targetTime: null, // Date cible du compte à rebours (00:00:00)
    jeuFini: false, //la variable qui dira si le jeu est fini ou non

    displayElement: { // Elements HTML où sont affichés les informations
        hour: null,
        min:  null,
        sec:  null

	},
	
	// Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
	initialise: function(x){
		this.targetTime = new Date();   // on initialise la date cible à chaque nouveau niveau. Pour mettre un temps global on peut initialiser la date dès sa création
		// Récupération des références vers les éléments pour l'affichage
		// La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
		this.displayElement.min  = document.getElementById('countdown_min');
		this.displayElement.sec  = document.getElementById('countdown_sec');
		// Lancement du compte à rebours
		this.tick(); // Premier tick tout de suite
		
		window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
		
	},
		// Met à jour le compte à rebours (tic d'horloge)
		tick: function(){
			if (this.jeuFini == false){
				// Instant présent
				var timeNow  = new Date();
				// Calcul du temps restant
				var diff = this.dateDiff(timeNow, this.targetTime);
				
				this.displayElement.min.innerHTML = diff.min;
				this.displayElement.sec.innerHTML = diff.sec;
				}
	
				// Si le temps est écoulé on affiche une fenêtre avec un bouton confirmer qui permet de recommencer
				// et un bouton annuler qui nous fait retourner à la page d'intro du jeu
				if (diff.min <= 0 && diff.sec <= 0){
					console.log(this.jeuFini);
					this.displayElement.min.innerHTML = 0;
					this.displayElement.sec.innerHTML = 0;
					this.jeuFini = true;
	
					window.location.href='defaite.html';
	
					window.onclick=function(){
						window.location.href='index.php';
					}
				}
		},
	
		// Calcul la différence entre 2 dates, en jour/heure/minute/seconde
		dateDiff: function(date1, date2){
			var diff = {}                           // Initialisation du retour
			var t = date2 - date1 + 600000 ; //600000 correspondent à 10 minutes
	
			t = Math.floor(t/1000);             // Nombre de secondes entre les 2 dates
			diff.sec = t % 60;                    // Extraction du nombre de secondes
			t = Math.floor((t-diff.sec)/60);    // Nombre de minutes (partie entière)
			diff.min = t % 60;                    // Extraction du nombre de minutes
	
			return diff;
		}
	};

// initialise le chronomètre 
countdownManager.initialise();

var time;

var map;
var chapitre = 1;
var mission = 1;

init();

var liste_marker = [];
var liste_icone = [];

var lieuxZ = new L.FeatureGroup();
var lieux = new L.FeatureGroup();
getMarker()	


map.on('zoomend' , function(){
	if (map.getZoom() < 17){
		map.removeLayer(lieuxZ);
		console.log("ça devrait pas s'afficher")
	}else{
		map.addLayer(lieuxZ);
		console.log("sa devrait s'afficher")
		console.log(lieuxZ);
	}
});

Chapitre1();

/*Chapitre21();*/
/*-------------------------------------------------------------CHAPITRE 1 COMENCEMENT-----------------------------------------------------------------*/






/*-------------------------------------------------------------CHAPITRE 2 LA BUTTE-----------------------------------------------------------------*/


/*var N = '2';
var TITRE = 'La Butte';
var Mission = 'Un libraire à MontMartre';
Progression(N , TITRE);
MissionName(Mission);
MissionContenu('2');*/


/*-------------------------------------------------------------CHAPITRE 2 LIBERER-----------------------------------------------------------------*/


/*var N = '3';
var TITRE = 'Libérer';
var Mission = 'Retrouvez M.XXXXX';
Progression(N , TITRE);
MissionName(Mission);
MissionContenu('3');*/