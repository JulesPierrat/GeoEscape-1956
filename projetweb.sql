-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 06, 2021 at 01:03 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projetweb`
--
CREATE DATABASE IF NOT EXISTS `projetweb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `projetweb`;

-- --------------------------------------------------------

--
-- Table structure for table `lieu`
--

CREATE TABLE `lieu` (
  `ID` int(11) NOT NULL,
  `NAME` text NOT NULL,
  `LONGITUDE` double NOT NULL,
  `LATITUDE` double NOT NULL,
  `ZOOMMIN` int(11) NOT NULL,
  `CHAPITRE` int(11) NOT NULL,
  `ICON` text NOT NULL,
  `ICON2` text NOT NULL,
  `STATUT` int(1) NOT NULL,
  `HTML0` text NOT NULL,
  `HTML1` text NOT NULL,
  `HTML2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lieu`
--

INSERT INTO `lieu` (`ID`, `NAME`, `LONGITUDE`, `LATITUDE`, `ZOOMMIN`, `CHAPITRE`, `ICON`, `ICON2`, `STATUT`, `HTML0`, `HTML1`, `HTML2`) VALUES
(1, '24 place Dauphine', 2.3420555951519573, 48.85686729621233, 15, 1, 'media/coffrefort_ferme.png', 'media/coffrefort_ouvert.png', 0, '<div id=\"marker_txt\">Ce coffre semble avoir été malmené, comme si quelqu’un avait tenté de l’ouvrir de force, essayez de l’ouvrir </div>\r\n<input id=\"codeChap1\" type=\"number\" step=\"1\" maxlenght=\"4\" minlenght=\"4\" style=\"background-color: #E9F7EF;margin-top:10px;margin-bottom: 10px;\">\r\n<div id = \"codeFauxChap1\"></div>\r\n<button id=\"openChapitre1\" style=\"margin-left: 25%\" onclick=\"VerificationCodeChap1()\">OUVRIR</button>', '<div id=\"marker_txt\">vous etes déja passer par là</div>', ''),
(2, 'Librairie Montmartre', 2.3409632655304424, 48.88894922764191, 15, 2, 'media/librairie.png', 'media/librairie.png', 0, ' <div id=\"marker_txt\">La librairie est fermée...</div>\r\n<div id=\"keyLibrairie\" style = \"color: red; text-align: center;\"></div>\r\n<button onclick=\"OuvrirLibrairie()\" style=\"margin-left: 20%;\">Ouvrir avec la clé</button>', '<div id=\"marker_txt\">Vous etes déja passé par ici</div>', ''),
(3, 'Cousin, 32 rue des Saules', 2.3402196230810635, 48.889457584952446, 15, 2, 'media/cousin.png', 'media/cousin.png', 0, '<div id=\"marker_txt\">Tu cherches le libraire ? Je le connais bien, c’est un ami, il est chez l’imprimeur aujourd’hui, tu devrais le rejoindre, je ne connais pas l’adresse, je sais juste que l’imprimeur s’appelle Marc.</div>', '<div></div>', ''),
(4, 'Imprimerie Champs-de-Mars', 2.29536054357792, 48.85498022013467, 15, 2, 'media/libraire.png', 'media/libraire.png', 0, '<div id=\"marker_txt\">Bonjour ! Vous cherchez M.XXXXX ? J’ai un coli à son nom dans ma librairie. Tenez, prenez la clé, et allez voir.</div>\r\n<button style=\"margin-left: 25%;\" onclick=\"PrendreLaClef()\">PRENDRE LA CLEF</button>', '<div id=\"marker_txt\">vous etes déja passer par là</div>', ''),
(5, '77 b Boulevard Lefebvre', 2.2946055017405076, 48.83103755886254, 15, 3, 'media/porte.png', 'media/perso.png', 0, '<div id=\"marker_txt\">La porte est fermée</div>\r\n<button  onclick =\"OuvrirLaPorte()\" style=\"margin-left: 25%;\">Utiliser la clé</button>', '<div id=\"marker_txt\">Je détient M.XXXXXX, donnez moi le livre et je le libère</div>\r\n<button onclick =\"Fin()\" style=\"margin-left: 25%;\">Donner le livre</button>', '');

-- --------------------------------------------------------

--
-- Table structure for table `objets`
--

CREATE TABLE `objets` (
  `ID` int(11) NOT NULL,
  `NAME` text NOT NULL,
  `ICON` text NOT NULL,
  `CHAPITRE` int(11) NOT NULL,
  `Disponible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objets`
--

INSERT INTO `objets` (`ID`, `NAME`, `ICON`, `CHAPITRE`, `Disponible`) VALUES
(1, 'Contrat', 'media/lettre1.png', 0, 1),
(2, 'Facture', 'media/facture_imprimmerie.png', 0, 1),
(3, 'Carte postale', 'media/carte-postal-cousin.png', 0, 1),
(4, 'Clé', 'media/clé.png', 1, 0),
(5, 'Envelope', 'media/envelope.png', 1, 0),
(6, 'Deuxième clé', 'media/cléb.png', 2, 0),
(7, 'Livre', 'media/livre.png', 3, 0),
(8, 'Deuxième envelope', 'media/envelopeb.png', 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `pseudo` text NOT NULL,
  `time` int(11) DEFAULT NULL,
  `date` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `pseudo`, `time`, `date`) VALUES
(1, 'JPIERRAT', 600, '15/12/2020'),
(2, 'PIER-ALBAN', 550, '16/12/2020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lieu`
--
ALTER TABLE `lieu`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `objets`
--
ALTER TABLE `objets`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
