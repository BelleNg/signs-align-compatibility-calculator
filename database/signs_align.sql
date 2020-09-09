-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: signs_align
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS signs_align;

CREATE DATABASE signs_align;

USE signs_align;
--
-- Table structure for table `couple_score`
--

DROP TABLE IF EXISTS `couple_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `couple_score` (
  `couple` varchar(20) NOT NULL,
  `score` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `couple_score`
--

LOCK TABLES `couple_score` WRITE;
/*!40000 ALTER TABLE `couple_score` DISABLE KEYS */;
INSERT INTO `couple_score` VALUES ('ratrat',90),('ratox',60),('rattiger',40),('ratrabbit',70),('ratdragon',100),('ratsnake',70),('rathorse',30),('ratgoat',40),('ratmonkey',100),('ratrooster',60),('ratdog',80),('ratpig',80),('oxrat',60),('oxox',80),('oxtiger',40),('oxrabbit',80),('oxdragon',70),('oxsnake',90),('oxhorse',50),('oxgoat',10),('oxmonkey',40),('oxrooster',90),('oxdog',70),('oxpig',70),('tigerrat',40),('tigerox',40),('tigertiger',50),('tigerrabbit',50),('tigerdragon',60),('tigersnake',30),('tigerhorse',90),('tigergoat',40),('tigermonkey',10),('tigerrooster',40),('tigerdog',90),('tigerpig',70),('rabbitrat',70),('rabbitox',80),('rabbittiger',50),('rabbitrabbit',80),('rabbitdragon',70),('rabbitsnake',70),('rabbithorse',50),('rabbitgoat',90),('rabbitmonkey',40),('rabbitrooster',10),('rabbitdog',80),('rabbitpig',90),('dragonrat',100),('dragonox',70),('dragontiger',60),('dragonrabbit',70),('dragondragon',90),('dragonsnake',80),('dragonhorse',80),('dragongoat',70),('dragonmonkey',100),('dragonrooster',90),('dragondog',10),('dragonpig',80),('snakerat',70),('snakeox',90),('snaketiger',30),('snakerabbit',70),('snakedragon',80),('snakesnake',80),('snakehorse',40),('snakegoat',70),('snakemonkey',40),('snakerooster',90),('snakedog',80),('snakepig',40),('horserat',30),('horseox',50),('horsetiger',90),('horserabbit',50),('horsedragon',80),('horsesnake',40),('horsehorse',80),('horsegoat',80),('horsemonkey',50),('horserooster',60),('horsedog',90),('horsepig',60),('goatrat',40),('goatox',10),('goattiger',40),('goatrabbit',90),('goatdragon',70),('goatsnake',70),('goathorse',80),('goatgoat',90),('goatmonkey',50),('goatrooster',50),('goatdog',40),('goatpig',90),('monkeyrat',100),('monkeyox',40),('monkeytiger',10),('monkeyrabbit',40),('monkeydragon',100),('monkeysnake',40),('monkeyhorse',50),('monkeygoat',50),('monkeymonkey',90),('monkeyrooster',40),('monkeydog',80),('monkeypig',70),('roosterrat',60),('roosterox',90),('roostertiger',40),('roosterrabbit',10),('roosterdragon',90),('roostersnake',90),('roosterhorse',60),('roostergoat',50),('roostermonkey',40),('roosterrooster',40),('roosterdog',50),('roosterpig',50),('dograt',80),('dogox',70),('dogtiger',90),('dograbbit',80),('dogdragon',10),('dogsnake',80),('doghorse',90),('doggoat',40),('dogmonkey',80),('dogrooster',50),('dogdog',70),('dogpig',70),('pigrat',80),('pigox',70),('pigtiger',70),('pigrabbit',90),('pigdragon',80),('pigsnake',40),('pighorse',60),('piggoat',90),('pigmonkey',70),('pigrooster',50),('pigdog',70),('pigpig',80);
/*!40000 ALTER TABLE `couple_score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zodiac`
--

DROP TABLE IF EXISTS `zodiac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zodiac` (
  `id` int NOT NULL,
  `animal` varchar(15) NOT NULL,
  `element` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zodiac`
--

LOCK TABLES `zodiac` WRITE;
/*!40000 ALTER TABLE `zodiac` DISABLE KEYS */;
INSERT INTO `zodiac` VALUES (1960,'rat','metal\r'),(1961,'ox','metal\r'),(1962,'tiger','water\r'),(1963,'rabbit','water\r'),(1964,'dragon','wood\r'),(1965,'snake','wood\r'),(1966,'horse','fire\r'),(1967,'goat','fire\r'),(1968,'monkey','earth\r'),(1969,'rooster','earth\r'),(1970,'dog','metal\r'),(1971,'pig','metal\r'),(1972,'rat','water\r'),(1973,'ox','water\r'),(1974,'tiger','wood\r'),(1975,'rabbit','wood\r'),(1976,'dragon','fire\r'),(1977,'snake','fire\r'),(1978,'horse','earth\r'),(1979,'goat','earth\r'),(1980,'monkey','metal\r'),(1981,'rooster','metal\r'),(1982,'dog','water\r'),(1983,'pig','water\r'),(1984,'rat','wood\r'),(1985,'ox','wood\r'),(1986,'tiger','fire\r'),(1987,'rabbit','fire\r'),(1988,'dragon','earth\r'),(1989,'snake','earth\r'),(1990,'horse','metal\r'),(1991,'goat','metal\r'),(1992,'monkey','water\r'),(1993,'rooster','water\r'),(1994,'dog','wood\r'),(1995,'pig','wood\r'),(1996,'rat','fire\r'),(1997,'ox','fire\r'),(1998,'tiger','earth\r'),(1999,'rabbit','earth\r'),(2000,'dragon','metal\r'),(2001,'snake','metal\r'),(2002,'horse','water\r'),(2003,'goat','water\r'),(2004,'monkey','wood\r'),(2005,'rooster','wood\r'),(2006,'dog','fire\r'),(2007,'pig','fire\r'),(2008,'rat','earth\r'),(2009,'ox','earth\r'),(2010,'tiger','metal\r'),(2011,'rabbit','metal\r'),(2012,'dragon','water\r'),(2013,'snake','water\r'),(2014,'horse','wood\r'),(2015,'goat','wood\r'),(2016,'monkey','fire\r'),(2017,'rooster','fire\r'),(2018,'dog','earth\r'),(2019,'pig','earth\r'),(2020,'rat','metal');
/*!40000 ALTER TABLE `zodiac` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-09 15:06:42
