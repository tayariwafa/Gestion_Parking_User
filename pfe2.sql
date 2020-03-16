-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 25 Juin 2018 à 00:08
-- Version du serveur :  10.1.16-MariaDB
-- Version de PHP :  5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pfe2`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrations`
--

CREATE TABLE `administrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `email_ad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Num_tel` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom_ad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nom_ad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NomUtilisateur_ad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdp_ad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `administrations`
--

INSERT INTO `administrations` (`id`, `email_ad`, `Num_tel`, `Prenom_ad`, `Nom_ad`, `NomUtilisateur_ad`, `mdp_ad`) VALUES
(1, 'tayariwafa6@gmail.com', '50087794', 'tayari', 'wafa', 'tayariwafa', 'wafawafa');

-- --------------------------------------------------------

--
-- Structure de la table `appel`
--

CREATE TABLE `appel` (
  `id` int(11) NOT NULL,
  `Nom_C` varchar(50) NOT NULL,
  `Num_C` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `appel`
--

INSERT INTO `appel` (`id`, `Nom_C`, `Num_C`) VALUES
(0, 'Samu', 190),
(1, 'Police', 197),
(2, 'Protection civile', 198);

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `police` int(11) NOT NULL,
  `ambulance` int(11) NOT NULL,
  `protectionCivile` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `contact`
--

INSERT INTO `contact` (`id`, `police`, `ambulance`, `protectionCivile`) VALUES
(1, 197, 125, 458),
(2, 201, 894, 789);

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

CREATE TABLE `favoris` (
  `id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `id_Parking` int(11) NOT NULL,
  `etat` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `favoris`
--

INSERT INTO `favoris` (`id`, `id_utilisateur`, `id_Parking`, `etat`) VALUES
(1, 259, 148520, 'n');

-- --------------------------------------------------------

--
-- Structure de la table `gardiens`
--

CREATE TABLE `gardiens` (
  `id` int(10) UNSIGNED NOT NULL,
  `email_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nom_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cin_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salaire_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NbHeure_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TempsHoraire_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NomUtilisateur_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdp_g` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_park` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `gardiens`
--

INSERT INTO `gardiens` (`id`, `email_g`, `Prenom_g`, `Nom_g`, `cin_g`, `tel_g`, `salaire_g`, `NbHeure_g`, `TempsHoraire_g`, `NomUtilisateur_g`, `mdp_g`, `Id_park`) VALUES
(1, 'tayari@gmail.com', 'wafa', 'wafaxx', 'cin', '12346789', '1000', '10', 'matin', 'gardien1 ', '0000', 1),
(14, 'tayari@gmail.com', 'garma', 'jaweher', '12816631', '50145236', '700', '12', 'matin', 'garmajaweher', '123456789', 1);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_03_27_221546_create_utilisateurs_table', 1),
(2, '2018_03_27_222624_create_gardiens_table', 1),
(3, '2018_03_27_223121_create_responsables_table', 1),
(4, '2018_03_27_223553_create_administrations_table', 1),
(5, '2018_03_27_223835_create_voitures_table', 1),
(6, '2018_03_27_224432_create_parkings_table', 1),
(7, '2018_03_27_225409_create_places_table', 1),
(8, '2018_03_27_231002_create_reservations_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `parkings`
--

CREATE TABLE `parkings` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacite_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NbEtoil_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Rue_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ville_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Pays_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CodePostale_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Longitude_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Laltitude_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `parkings`
--

INSERT INTO `parkings` (`id`, `Nom_p`, `capacite_p`, `NbEtoil_p`, `Rue_p`, `Ville_p`, `Pays_p`, `CodePostale_p`, `Longitude_p`, `Laltitude_p`) VALUES
(1, 'mypark', '150', '4', '14 janvier', 'sousse', 'tunisie', '4000', '10.5836841', '35.8637842'),
(2, 'Parking 1', '500', '4', '', 'Tunis', '', '', '10.1502143', '36.8052863');

-- --------------------------------------------------------

--
-- Structure de la table `places`
--

CREATE TABLE `places` (
  `id` int(10) UNSIGNED NOT NULL,
  `Nom_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prix_p` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Etat_dispo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_park` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `places`
--

INSERT INTO `places` (`id`, `Nom_p`, `Prix_p`, `Etat_dispo`, `Id_park`) VALUES
(1, 'A1', '10.000', '1', 1),
(8, 'A8', '15.000', '1', 2);

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) UNSIGNED NOT NULL,
  `ModePaiement` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Montant_carte` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Montant_espece` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MontantPay` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Surplus` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateDeb` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DateFin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HeurDeb` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HeurFin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_Gard` int(10) UNSIGNED NOT NULL,
  `Id_ut` int(10) UNSIGNED NOT NULL,
  `Id_voiture` int(10) UNSIGNED NOT NULL,
  `Id_place` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `reservations`
--

INSERT INTO `reservations` (`id`, `ModePaiement`, `Montant_carte`, `Montant_espece`, `MontantPay`, `Surplus`, `DateDeb`, `DateFin`, `HeurDeb`, `HeurFin`, `Id_Gard`, `Id_ut`, `Id_voiture`, `Id_place`) VALUES
(1, 'creditcard', '24', '24', '24', '', '2018-5-27', '2018-5-28', '21:16:34', '21:17:37', 0, 76, 61, 0);

-- --------------------------------------------------------

--
-- Structure de la table `responsables`
--

CREATE TABLE `responsables` (
  `id` int(10) UNSIGNED NOT NULL,
  `email_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nom_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Paiement_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NomUtilisateur_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdp_resp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ad` int(10) UNSIGNED NOT NULL,
  `id_Park` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `responsables`
--

INSERT INTO `responsables` (`id`, `email_resp`, `Prenom_resp`, `Nom_resp`, `tel_resp`, `Paiement_resp`, `NomUtilisateur_resp`, `mdp_resp`, `id_ad`, `id_Park`) VALUES
(1, 'garma@gmail.com', 'garma', 'jaweher', '24657708', 'true', 'garma.jaweher', '123456789', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(10) UNSIGNED NOT NULL,
  `Prenom_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nom_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NomUtilisateur_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdp_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Solde_ut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `Prenom_ut`, `Nom_ut`, `NomUtilisateur_ut`, `Email_ut`, `mdp_ut`, `tel_ut`, `Solde_ut`) VALUES
(76, 'Nakbi', 'Haroun', 'test', 'arontn@hotmail.com', '098f6bcd4621d373cade4e832627b4f6', '55454545', '');

-- --------------------------------------------------------

--
-- Structure de la table `voitures`
--

CREATE TABLE `voitures` (
  `id` int(10) UNSIGNED NOT NULL,
  `Matricule` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Marque` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `couleur` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Id_ut` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `voitures`
--

INSERT INTO `voitures` (`id`, `Matricule`, `Marque`, `couleur`, `Id_ut`) VALUES
(61, 't 9965 123', 'Fiat', 'blue', 76);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `administrations`
--
ALTER TABLE `administrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `appel`
--
ALTER TABLE `appel`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `favoris`
--
ALTER TABLE `favoris`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `gardiens`
--
ALTER TABLE `gardiens`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `parkings`
--
ALTER TABLE `parkings`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `responsables`
--
ALTER TABLE `responsables`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `voitures`
--
ALTER TABLE `voitures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `administrations`
--
ALTER TABLE `administrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `gardiens`
--
ALTER TABLE `gardiens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `parkings`
--
ALTER TABLE `parkings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `places`
--
ALTER TABLE `places`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `responsables`
--
ALTER TABLE `responsables`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
--
-- AUTO_INCREMENT pour la table `voitures`
--
ALTER TABLE `voitures`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
