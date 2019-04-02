-- MySQL dump 10.13  Distrib 8.0.13, for osx10.13 (x86_64)
--
-- Host: localhost    Database: madera
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `components`
--

DROP TABLE IF EXISTS `components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `components` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `id_units` int(11) DEFAULT NULL,
  `id_natures` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_units` (`id_units`),
  KEY `id_natures` (`id_natures`),
  CONSTRAINT `components_ibfk_1` FOREIGN KEY (`id_units`) REFERENCES `units` (`id`),
  CONSTRAINT `components_ibfk_2` FOREIGN KEY (`id_natures`) REFERENCES `natures` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components`
--

LOCK TABLES `components` WRITE;
/*!40000 ALTER TABLE `components` DISABLE KEYS */;
INSERT INTO `components` VALUES (1,'Lisses ou contreforts',1,1),(2,'Gougeons',4,1),(3,'Boulons',1,1),(4,'Montants en bois',2,1),(5,'Sabots métalliques',1,1),(6,'Panneaux d\'isolation',1,1),(7,'Pare-pluie',2,3),(8,'Planchers',3,2),(9,'Panneaux intermédiaires',3,1),(10,'Panneaux de couverture',3,4),(11,'Composant test',2,1);
/*!40000 ALTER TABLE `components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_per_provider`
--

DROP TABLE IF EXISTS `components_per_provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `components_per_provider` (
  `id_components` int(11) DEFAULT NULL,
  `id_providers` int(11) DEFAULT NULL,
  KEY `id_components` (`id_components`),
  KEY `id_providers` (`id_providers`),
  CONSTRAINT `components_per_provider_ibfk_1` FOREIGN KEY (`id_components`) REFERENCES `components` (`id`),
  CONSTRAINT `components_per_provider_ibfk_2` FOREIGN KEY (`id_providers`) REFERENCES `providers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_per_provider`
--

LOCK TABLES `components_per_provider` WRITE;
/*!40000 ALTER TABLE `components_per_provider` DISABLE KEYS */;
/*!40000 ALTER TABLE `components_per_provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_type_per_component`
--

DROP TABLE IF EXISTS `components_type_per_component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `components_type_per_component` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_type_per_component`
--

LOCK TABLES `components_type_per_component` WRITE;
/*!40000 ALTER TABLE `components_type_per_component` DISABLE KEYS */;
/*!40000 ALTER TABLE `components_type_per_component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_types`
--

DROP TABLE IF EXISTS `components_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `components_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_types`
--

LOCK TABLES `components_types` WRITE;
/*!40000 ALTER TABLE `components_types` DISABLE KEYS */;
INSERT INTO `components_types` VALUES (1,'Famille de composants souple'),(2,'Famille de composants bois'),(3,'Famille de composants métal'),(4,'Famille de composants acier');
/*!40000 ALTER TABLE `components_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `covers`
--

DROP TABLE IF EXISTS `covers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `covers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `covers`
--

LOCK TABLES `covers` WRITE;
/*!40000 ALTER TABLE `covers` DISABLE KEYS */;
INSERT INTO `covers` VALUES (1,'Tuiles'),(2,'Ardoises'),(3,'Briques'),(4,'Fibre');
/*!40000 ALTER TABLE `covers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'DUP','Martin','DUPONT','1 impasse des Bouleaux'),(2,'CRA','Christophe','CRAIG','1 impasse des Bouleaux'),(3,'DUP','Martin','DUPONT','1 impasse des Bouleaux'),(4,'DUP','Martin','DUPONT','1 impasse des Bouleaux'),(6,'JMT','Jean-Marc','Triste','97 avenue Bonsoir'),(7,'AMP','Anne-Marie','Patrick','97 avenue de la gare'),(8,'JPT','Jean-Pierre','Tristan','97 boulevard de la gare');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cut_per_module`
--

DROP TABLE IF EXISTS `cut_per_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cut_per_module` (
  `id_modules` int(11) NOT NULL,
  `id_cut` int(11) NOT NULL,
  PRIMARY KEY (`id_modules`,`id_cut`),
  KEY `id_cut` (`id_cut`),
  CONSTRAINT `cut_per_module_ibfk_1` FOREIGN KEY (`id_modules`) REFERENCES `modules` (`id`),
  CONSTRAINT `cut_per_module_ibfk_2` FOREIGN KEY (`id_cut`) REFERENCES `cuts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cut_per_module`
--

LOCK TABLES `cut_per_module` WRITE;
/*!40000 ALTER TABLE `cut_per_module` DISABLE KEYS */;
/*!40000 ALTER TABLE `cut_per_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuts`
--

DROP TABLE IF EXISTS `cuts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cuts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuts`
--

LOCK TABLES `cuts` WRITE;
/*!40000 ALTER TABLE `cuts` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frames`
--

DROP TABLE IF EXISTS `frames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `frames` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frames`
--

LOCK TABLES `frames` WRITE;
/*!40000 ALTER TABLE `frames` DISABLE KEYS */;
INSERT INTO `frames` VALUES (1,'Bois'),(2,'Métal'),(3,'Acier'),(4,'Fibre');
/*!40000 ALTER TABLE `frames` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insulations`
--

DROP TABLE IF EXISTS `insulations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `insulations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insulations`
--

LOCK TABLES `insulations` WRITE;
/*!40000 ALTER TABLE `insulations` DISABLE KEYS */;
INSERT INTO `insulations` VALUES (1,'Synthétique'),(2,'Naturel'),(3,'Biologique'),(4,'Bois');
/*!40000 ALTER TABLE `insulations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `models`
--

DROP TABLE IF EXISTS `models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `id_ranges` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ranges` (`id_ranges`),
  CONSTRAINT `models_ibfk_1` FOREIGN KEY (`id_ranges`) REFERENCES `ranges` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `models`
--

LOCK TABLES `models` WRITE;
/*!40000 ALTER TABLE `models` DISABLE KEYS */;
/*!40000 ALTER TABLE `models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `id_natures` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_natures` (`id_natures`),
  CONSTRAINT `modules_ibfk_1` FOREIGN KEY (`id_natures`) REFERENCES `natures` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules_per_model`
--

DROP TABLE IF EXISTS `modules_per_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `modules_per_model` (
  `id_modules` int(11) NOT NULL,
  `id_models` int(11) NOT NULL,
  PRIMARY KEY (`id_modules`,`id_models`),
  KEY `id_models` (`id_models`),
  CONSTRAINT `modules_per_model_ibfk_1` FOREIGN KEY (`id_modules`) REFERENCES `modules` (`id`),
  CONSTRAINT `modules_per_model_ibfk_2` FOREIGN KEY (`id_models`) REFERENCES `models` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules_per_model`
--

LOCK TABLES `modules_per_model` WRITE;
/*!40000 ALTER TABLE `modules_per_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `modules_per_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules_per_range_per_quote`
--

DROP TABLE IF EXISTS `modules_per_range_per_quote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `modules_per_range_per_quote` (
  `id_ranges` int(11) NOT NULL,
  `id_modules` int(11) NOT NULL,
  `id_quotes` int(11) NOT NULL,
  PRIMARY KEY (`id_ranges`,`id_modules`,`id_quotes`),
  KEY `id_modules` (`id_modules`),
  KEY `id_quotes` (`id_quotes`),
  CONSTRAINT `modules_per_range_per_quote_ibfk_1` FOREIGN KEY (`id_modules`) REFERENCES `modules` (`id`),
  CONSTRAINT `modules_per_range_per_quote_ibfk_2` FOREIGN KEY (`id_ranges`) REFERENCES `ranges` (`id`),
  CONSTRAINT `modules_per_range_per_quote_ibfk_3` FOREIGN KEY (`id_quotes`) REFERENCES `quotes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules_per_range_per_quote`
--

LOCK TABLES `modules_per_range_per_quote` WRITE;
/*!40000 ALTER TABLE `modules_per_range_per_quote` DISABLE KEYS */;
/*!40000 ALTER TABLE `modules_per_range_per_quote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `natures`
--

DROP TABLE IF EXISTS `natures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `natures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `natures`
--

LOCK TABLES `natures` WRITE;
/*!40000 ALTER TABLE `natures` DISABLE KEYS */;
INSERT INTO `natures` VALUES (1,'Murs extérieurs'),(2,'Cloisons intérieures'),(3,'Plancher sur dalle'),(4,'Plancher porteur'),(5,'Fermes de charpente'),(6,'Couverture (toit)');
/*!40000 ALTER TABLE `natures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `providers`
--

DROP TABLE IF EXISTS `providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `providers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `businessName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `businessContact` varchar(255) DEFAULT NULL,
  `payementContact` varchar(255) DEFAULT NULL,
  `description` varchar(511) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `providers`
--

LOCK TABLES `providers` WRITE;
/*!40000 ALTER TABLE `providers` DISABLE KEYS */;
/*!40000 ALTER TABLE `providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `id_states` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_states` (`id_states`),
  CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`id_states`) REFERENCES `states` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes`
--

LOCK TABLES `quotes` WRITE;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotes_per_client_by_user`
--

DROP TABLE IF EXISTS `quotes_per_client_by_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quotes_per_client_by_user` (
  `id_clients` int(11) NOT NULL,
  `id_quotes` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  PRIMARY KEY (`id_clients`,`id_quotes`,`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes_per_client_by_user`
--

LOCK TABLES `quotes_per_client_by_user` WRITE;
/*!40000 ALTER TABLE `quotes_per_client_by_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotes_per_client_by_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ranges`
--

DROP TABLE IF EXISTS `ranges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ranges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `id_frames` int(11) DEFAULT NULL,
  `id_insulations` int(11) DEFAULT NULL,
  `id_covers` int(11) DEFAULT NULL,
  `id_wood_frames` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_frames` (`id_frames`),
  KEY `id_insulations` (`id_insulations`),
  KEY `id_covers` (`id_covers`),
  KEY `id_wood_frames` (`id_wood_frames`),
  CONSTRAINT `ranges_ibfk_1` FOREIGN KEY (`id_frames`) REFERENCES `frames` (`id`),
  CONSTRAINT `ranges_ibfk_2` FOREIGN KEY (`id_insulations`) REFERENCES `insulations` (`id`),
  CONSTRAINT `ranges_ibfk_3` FOREIGN KEY (`id_covers`) REFERENCES `covers` (`id`),
  CONSTRAINT `ranges_ibfk_4` FOREIGN KEY (`id_wood_frames`) REFERENCES `wood_frames` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranges`
--

LOCK TABLES `ranges` WRITE;
/*!40000 ALTER TABLE `ranges` DISABLE KEYS */;
/*!40000 ALTER TABLE `ranges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ranks`
--

DROP TABLE IF EXISTS `ranks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ranks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranks`
--

LOCK TABLES `ranks` WRITE;
/*!40000 ALTER TABLE `ranks` DISABLE KEYS */;
/*!40000 ALTER TABLE `ranks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specs`
--

DROP TABLE IF EXISTS `specs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `specs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specs`
--

LOCK TABLES `specs` WRITE;
/*!40000 ALTER TABLE `specs` DISABLE KEYS */;
/*!40000 ALTER TABLE `specs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specs_per_component`
--

DROP TABLE IF EXISTS `specs_per_component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `specs_per_component` (
  `id_specs` int(11) NOT NULL,
  `id_components` int(11) NOT NULL,
  PRIMARY KEY (`id_specs`,`id_components`),
  KEY `id_components` (`id_components`),
  CONSTRAINT `specs_per_component_ibfk_1` FOREIGN KEY (`id_specs`) REFERENCES `specs` (`id`),
  CONSTRAINT `specs_per_component_ibfk_2` FOREIGN KEY (`id_components`) REFERENCES `components` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specs_per_component`
--

LOCK TABLES `specs_per_component` WRITE;
/*!40000 ALTER TABLE `specs_per_component` DISABLE KEYS */;
/*!40000 ALTER TABLE `specs_per_component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technical_clauses`
--

DROP TABLE IF EXISTS `technical_clauses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `technical_clauses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technical_clauses`
--

LOCK TABLES `technical_clauses` WRITE;
/*!40000 ALTER TABLE `technical_clauses` DISABLE KEYS */;
INSERT INTO `technical_clauses` VALUES (1,'Caractéristiques de la dalle béton'),(2,'Plots béton recevant une lisse basse horizontale'),(3,'Caractéristiques de la dalle pierre'),(4,'Caractéristiques de la dalle béton armé');
/*!40000 ALTER TABLE `technical_clauses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technical_clauses_per_component`
--

DROP TABLE IF EXISTS `technical_clauses_per_component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `technical_clauses_per_component` (
  `id_components` int(11) NOT NULL,
  `id_technical_clauses` int(11) NOT NULL,
  PRIMARY KEY (`id_components`,`id_technical_clauses`),
  KEY `id_technical_clauses` (`id_technical_clauses`),
  CONSTRAINT `technical_clauses_per_component_ibfk_1` FOREIGN KEY (`id_components`) REFERENCES `components` (`id`),
  CONSTRAINT `technical_clauses_per_component_ibfk_2` FOREIGN KEY (`id_technical_clauses`) REFERENCES `technical_clauses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technical_clauses_per_component`
--

LOCK TABLES `technical_clauses_per_component` WRITE;
/*!40000 ALTER TABLE `technical_clauses_per_component` DISABLE KEYS */;
/*!40000 ALTER TABLE `technical_clauses_per_component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `units`
--

DROP TABLE IF EXISTS `units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `units` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `units`
--

LOCK TABLES `units` WRITE;
/*!40000 ALTER TABLE `units` DISABLE KEYS */;
INSERT INTO `units` VALUES (1,'cm'),(2,'m'),(3,'m2'),(4,'pièce');
/*!40000 ALTER TABLE `units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `id_ranks` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ranks` (`id_ranks`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_ranks`) REFERENCES `ranks` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wood_frames`
--

DROP TABLE IF EXISTS `wood_frames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `wood_frames` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wood_frames`
--

LOCK TABLES `wood_frames` WRITE;
/*!40000 ALTER TABLE `wood_frames` DISABLE KEYS */;
INSERT INTO `wood_frames` VALUES (1,'Ossature bois simple'),(2,'Ossature bois dur'),(3,'Ossature bois chêne'),(4,'Ossature bois frêne');
/*!40000 ALTER TABLE `wood_frames` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-02  9:09:18
