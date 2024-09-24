-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (x86_64)
--
-- Host: localhost    Database: crowdfunding_db
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `FUNDRAISER`
--

DROP TABLE IF EXISTS `FUNDRAISER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FUNDRAISER` (
  `FUNDRAISER_ID` int NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(100) NOT NULL,
  `CAPTION` varchar(255) NOT NULL,
  `TARGET_FUNDING` decimal(10,2) NOT NULL,
  `CURRENT_FUNDING` decimal(10,2) DEFAULT '0.00',
  `CITY` varchar(100) NOT NULL,
  `ACTIVE` tinyint(1) DEFAULT '1',
  `CATEGORY_ID` int DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`),
  KEY `CATEGORY_ID` (`CATEGORY_ID`),
  CONSTRAINT `fundraiser_ibfk_1` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `CATEGORY` (`CATEGORY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FUNDRAISER`
--

LOCK TABLES `FUNDRAISER` WRITE;
/*!40000 ALTER TABLE `FUNDRAISER` DISABLE KEYS */;
INSERT INTO `FUNDRAISER` VALUES (1,'Prerak Pandey','Aid for Earthquake Victims',80000.00,25000.00,'San Francisco',1,1),(2,'Prerak Pandey','Aid for Earthquake Victims',80000.00,25000.00,'San Francisco',1,1),(3,'Ritesh Pandey','Support for Flood Relief',10000.00,25000.00,'San Francisco',1,1),(4,'Ishan Giri','Library Book For School',3000.00,1000.00,'San Francisco',1,2),(5,'Prerak Pandey','Aid for Earthquake Victims',80000.00,25000.00,'San Francisco',1,1),(6,'Ritesh Pandey','Support for Flood Relief',10000.00,25000.00,'San Francisco',1,1),(7,'Ishan Giri','Library Book For School',3000.00,1000.00,'San Francisco',1,2),(8,'Tejinder Sing','Supprt the Local Cricket Club',10000.00,1000.00,'Goldcoast',1,3),(9,'Prerak Pandey','Aid for Earthquake Victims',80000.00,25000.00,'San Francisco',1,1),(10,'Ritesh Pandey','Support for Flood Relief',10000.00,25000.00,'San Francisco',1,1),(11,'Ishan Giri','Library Book For School',3000.00,1000.00,'San Francisco',1,2),(12,'Tejinder Sing','Supprt the Local Cricket Club',10000.00,1000.00,'Goldcoast',1,3);
/*!40000 ALTER TABLE `FUNDRAISER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-24 14:58:48
