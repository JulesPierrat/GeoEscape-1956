/*function init() {
	const coord_init = {
		lat : 48.840254, 
		lon : 2.350557 
	}
	const zoomLevel = 18;

	const map = L.map('mapid',{minZoom: 0 , maxZoom: 18}).setView( [coord_init.lat , coord_init.lon] , zoomLevel );

	const fond_carte = {
		normal : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ,
		black_and_white : 'http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
		thunderforest : 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=<283f43515b8e422b88b1b31f2f88a42d>'
	}

	const main_layer = L.tileLayer(fond_carte.normal, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
	
	main_layer.addTo(map);*/
	// initialise le chronomètre 
    countdownManager.initialise();
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
