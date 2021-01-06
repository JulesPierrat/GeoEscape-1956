<!DOCTYPE html>
<html lang = fr>
	<head>
		<meta charset="UTF-8">
		<title>GeoEscape - 1956</title>
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

		<header> <!-- Page de garde -->
			<nav> <!-- Barre de navigation au début -->
				<ul>
					<li id = "home"><a href="#">GeoEscape - 1956</a></li> 
					<li id = "contact"><a href="#problemes_sec">Hall of fame</a></li>
					<li id = "regles"><a href="#regles_du jeu_sec">Règles du jeu</a></li>
					<li id = "jouer_nav"><a href='jeu.php'>JOUER !</a></li>
				</ul>
			</nav>
			<div id="ImagePrincipale"> <!-- Photo / titre / phrase d'accroche -->
				 <h1> GeoEscape - 1956 </h1>
				 <div id = "premier_trait"></div>
				 <h3>Un escape game réalisé par Pier-Alban ORAIN et Jules PIERRAT</h3>
			</div>
		</header>
		<section id="regles_du jeu_sec"> <!-- Présentation du principe et des règles du jeu -->
			<div id = "regles_du_jeu">
				<h2>
					Principes et règles du jeu:
				</h2>
				<div id = "text_regles_du_jeu">
					<p id = "text_regles_du_jeu_1">
						Cet escape-game vous plonge dans le Paris des années 50, vous y incarnez un détective privé au service d’une grande entreprise, la BNT, vous êtes habitué à travailler pour eux. Cependant la mission qu’ils vous ont donnée aujourd’hui est particulièrement inhabituelle et dangereuse. En effet vous devez retrouver le fils d’une personne haut placé dans l’entreprise, qui a disparu il y a quelques jours. De plus vous devez faire ça de manière discrète, sans l’aide de la police. Plus de détails vous seront donné par l'intermédiaire d'une lettre que la BNT vous auras envoyez au début du jeu. 
					</p>
					<p id = "text_regles_du_jeu_2">
						Le principe du jeu est simple, vous devez réussir à retrouver M.XXXXXXX. Vous allez donc devoir résoudre plusieurs énigmes, dans tout Paris, qui vous menerons jusqu'à lui. Pour résoudre ces énigmes vous allez pouvoir stocker des objets dans l'onglet objet situer en haut à droite de l'écran. L'onglet info quand à lui vous permet d'afficher une nouvelle fois la lettre donné en début de partie. Vous allez donc pouvoir vous déplacer sur une carte de paris et allez devoir résoudre toutes les enigmes, en moins de dix minutes.
					</p>
				</div>
			</div>
		</section>
		<section id = "jouer_sec"> <!-- Section dans laquelle il y a le bouton jouer et la phrase de teasing -->
			<div id = "jouer">
				<h2>
					Commencez à jouer maintenant !
				</h2>
				<p id = "text_commencer_a_jouer">
					Maintenant que vous avez toutes les informations vous pouvez commencez à jouer, notez que votre score (temps que vous avez mis pour résoudre les enigmes) sera retenu et qu'il apparaitra s'il fait partie des meilleurs, Bonne Chance !
				</p>
				<button id = "jouer_button" onclick ="window:location.href='jeu.php'">
					JOUER !
				</button>
			</div>
		</section>
		<section id = "problemes_sec">
			<footer id="contactmail">
				<h2>Hall of Fame:</h2>
				<table id = "records">
					<tr>
						<th>Rang</th>
						<th>Pseudo</th>
						<th>Temps</th>
						<th>Date</th>
					</tr>
					<tbody id="records_liste"></tbody>
				</table>
				
				<div id="secondtrait"></div>
				<div id="copyright">
					<span>©Pier-Alban ORAIN & Jules PIERRAT, tous droits réservés - 2020</span>
				</div>
				</div>
			</footer>
		</section>
		<script>
					//call ajax
					var ajax = new XMLHttpRequest();
					var method = "GET";
					var url = "records.php";
					var asynchronous = true;

					ajax.open(method, url, asynchronous);

					//sending request

					ajax.send();

					//receiving response from records.php

					ajax.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
							// converting JSON to array
							var data = JSON.parse(this.responseText);
							console.log(data); //for debuggin

							// html value for <tbody>
							var html = "";
							for(var i = 0 ; i < data.length ; i++){
								var pseudo = data[i].pseudo;
								var time = data[i].time;
								var date = data[i].date;

								// storing in html

								html+= "<tr>";
									html+="<td>"+(i+1)+"</td>";
									html+= "<td>" + pseudo + "</td>";
									html+= "<td>" + Math.trunc(time/60) +"m" + time%60 + "s</td>";
									html+= "<td>" + date + "</td>";
								html+= "</tr>";
							}

							// replacing tbody

							document.getElementById("records_liste").innerHTML = html;
						}
					}
				</script>
	</body>