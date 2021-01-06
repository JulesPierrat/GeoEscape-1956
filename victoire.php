<!DOCTYPE html>
<!--Page qui s'affiche lorsque le joueur perd-->
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>GeoEscape - 1956</title>
        <link rel="stylesheet" href = "style.css">
    </head>
    <body>
        <!--Texte qui s'affiche-->
        <div id="victoire">Vous avez gagné !!!</div>
        <div id="victoire_retour">Bravo, vous avez gagné, pour faire cet escape game, vous avez mis:</div>
        <h4 id="tempsrealise"></h4>
        <div id="victoire_retour">Vous pouvez enregistrer votre temps en entrant un pseudo puis en cliquant sur retour, sinon cliquez directement sur retour</div>
        <!--Bouton qui renvoie à la page d'accueil lorsqu'on clique dessus-->
        <p></p>
        <h4> </h4>
        <input id="pseudo" placeholder="Pseudo">
        <div id = "erreurPseudo"></div>
        <button id = "defaite_button" onclick ="RetourAuMenu()">
            RETOUR !
        </button>
        <!--<script src ="defaite.js"></script>-->
        <script src = "victoire.js"></script>
    </body>   
</html>