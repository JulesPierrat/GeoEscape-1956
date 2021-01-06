<!DOCTYPE html>
<html id="jeu"  lang = fr>
	<head>
		<meta charset="UTF-8">
		<title>GeoEscape - 1956</title>
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   		crossorigin=""/>
   		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   		crossorigin=""></script>
   		<link rel="stylesheet" href = "style.css">
   		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	</head>
	<body>

		<?php
			// lien vers la base de donnée
		try{
			$bdd = new PDO('mysql:host=localhost:3306;dbname=projetweb;charset=utf8' , 'root', 'root');
		}catch (Exception $e){
				die('Erreur : ' . $e->getMessage());
		}
		?>

		<div id = "en_tete">
			<div id = "titre_jeu"><a href ='index.php'>GeoEscape - 1956</a></div>
			<div id = "progression">Chapitre X - XXXXXXXXXXXXXX</div>
			<div id = "objets"><a href = "#modal2" class="openInfo">Objets</a></div>
			<div id = "info"><a id="info_sub" href = "#modal1" class="openInfo">Info</a></div>
		</div>
		<div id="mapid"></div>
		<aside id = "modal1" class="modal" aria-hidden="true" role="dialog" aria-labelledby ="titre-modal1" style="display:none;">
			<div id = "modal-wrapper" class="stopModal1">
				<h2 id ="titre-modal1">Chapitre 1 : Commencement</h2>
				<h2 id = "stitre-modal1">UNE MYSTERIEUSE LETTRE</h2>
				<div id = "contenu-modal1" style = "display: inline;">HTML A AFFICHER</div>
				<button id = "continuer-modal" class="closeInfo">CONTINUER</button>
			</div>
		</aside>
		<aside id = "modal2" class="modal" aria-hidden="true" role="dialog" aria-labelledby ="titre-modal2" style="display:none;">
			<div id = "modal-wrapper" class="stopModal1">
				<h2 id ="titre-modal2">INVENTAIRE DES OBJETS</h2>
				<div id = "contenu-modal2">
					<a id = 'lim1' class = 'obj'>  <img id = 'obj1'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim2' class = 'obj'>  <img id = 'obj2'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim3' class = 'obj'>  <img id = 'obj3'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim4' class = 'obj'>  <img id = 'obj4'  src="media/obj/obj0.png" width = "100%"></a>
				</div>
				<div id = "contenu-modal2">
					<a id = 'lim5' class = 'obj'>  <img id = 'obj5'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim6' class = 'obj'>  <img id = 'obj6'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim7' class = 'obj'>  <img id = 'obj7'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim8' class = 'obj'>  <img id = 'obj8'  src="media/obj/obj0.png" width = "100%"></a>

				</div>
				<div id = "contenu-modal2">
					<a id = 'lim9' class = 'obj'>  <img id = 'obj9'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim10' class = 'obj'>  <img id = 'obj10'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim11' class = 'obj'>  <img id = 'obj11'  src="media/obj/obj0.png" width = "100%"></a>
					<a id = 'lim12' class = 'obj'>  <img id = 'obj12'  src="media/obj/obj0.png" width = "100%"></a>

				</div>
				<button id = "continuer-modal" class="closeInfo">CONTINUER</button>
			</div>
		</aside>
		<div id='liste_mission' style="display:none;">
			<div id = "mission1" class = "mission">
				<img src="media/1_1.png" width = "100%">
			</div>
			<div id = "mission2" class = "mission">
				<img src="media/2_1.png" width = "100%">
				<h2>VOUS AVEZ OUVERT LE COFFRE ET RECU DE NOUVEAUX OBJETS</h2>
			</div>
			<div id = "mission3" class = "mission">
				<h2>VOUS AVEZ RECUPERE LA CLEF DE LA LIBRAIRIE</h2>
				<img src="media/2_2.png" width = "100%">
			</div>
			<div id = "mission4" class = "mission">
				<h2>VOUS ENTREZ DANS LA LIBRAIRIE ET RECUPEREZ LE COLI</h2>
				<img src="media/3_1.png" width = "100%">
				<h2>VOUS AVEZ RECUPERE DE NOUVEAUX OBJETS</h2>
			</div>
			<div id = "mission5" class = "mission">
				<h2>VOUS ENTREZ, DEUX HOMMES SONT A L'INTERIEUR</h2>
				<img src="media/3_2.png" width = "100%">
			</div>
			<div id = "mission6" class = "mission">
				<h2>EN ECHANGE DU LIVRE, LE KIDNAPPEUR VOUS REND M.XXXXXX</h2>
				<img src="media/4_1.png" width = "100%">
				<h2>VOUS RAMENEZ DONC M.XXXXX CHEZ LUI, VOTRE MISSION EST TERMINE</h2>
			</div>
		</div>
		<div id="countdown">
			<span id="countdown_min" >--</span>
		  <span> : </span>
			<span id="countdown_sec" >--</span>
		</div>
		
		<script src = "mod.js"></script>
		<script src = "story.js"></script>
	</body>
</html>