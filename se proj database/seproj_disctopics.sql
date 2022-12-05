-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: seproj
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `disctopics`
--

DROP TABLE IF EXISTS `disctopics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disctopics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=1170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disctopics`
--

LOCK TABLES `disctopics` WRITE;
/*!40000 ALTER TABLE `disctopics` DISABLE KEYS */;
INSERT INTO `disctopics` VALUES (490,'Amazon starts shipping its 80 Halo View fitness band','https://www.engadget.com/amazon-halo-view-fitness-band-available-162246051.html'),(491,'The Withings ScanWatch Is a Classy Everyday Fitness Tracker','https://www.wired.com/review/withings-scanwatch/'),(492,'16 Best Early Black Friday Deals on Outdoor Gear','https://www.wired.com/story/best-black-friday-outdoors-deals-rei-2021/'),(493,'FTC opens antitrust probe into Metas purchase of VR fitness app Supernatural','https://www.theverge.com/2021/12/16/22840635/ftc-opens-antitrust-probe-meta-deal-vr-fitness-app-supernatural'),(494,'The best deals on smartwatches fitness trackers and wearables this Black Friday','https://www.engadget.com/best-smartwatch-fitness-trackers-wearable-deals-black-friday-2021-220546199.html'),(495,'Fitbits Charge 5 tracker is back on sale for a recordlow 130 at Amazon','https://www.engadget.com/fitbit-charge-5-amazon-sale-december-2021-164046215.html'),(496,'The Fitness Industrys Roundtrip','http://www.zacks.com/commentary/1830045/the-fitness-industry-s-roundtrip?cid=CS-ENTREPRENEUR-FT-investment_ideas-1830045'),(497,'Apple Fitness Turns One Year Old','https://www.macrumors.com/2021/12/15/apple-fitness-turns-one-year-old/'),(498,'Fitness trackers keep ditching buttons for touchscreens and its terrible','https://www.androidcentral.com/fitness-smartwatch-touchscreens-are-worst'),(499,'Get moving with these incredible Withings fitness watch deals','https://www.androidcentral.com/get-moving-these-incredible-withings-fitness-watch-deals'),(1122,'The Exercise Games That Can Actually Get You Off the Couch','https://www.wired.com/story/great-exercise-games/'),(1126,'Use the Good Better Best System for Less Stressful Holiday Workouts','https://lifehacker.com/use-the-good-better-best-system-for-less-stressful-1848265236'),(1128,'Tiffany Haddish is getting her own Supernatural VR workout','https://www.engadget.com/supernatural-tiffany-haddish-workout-series-140045570.html'),(1148,'In Myanmar jungle civilians prepare to battle military rulers  The Wider Image','https://widerimage.reuters.com/story/in-myanmar-jungle-civilians-prepare-to-battle-military-rulers'),(1149,'In Myanmar jungle civilians prepare to battle military rulers  Reuters','https://www.reuters.com/world/asia-pacific/myanmar-jungle-civilians-prepare-battle-military-rulers-2021-12-16/');
/*!40000 ALTER TABLE `disctopics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-05 18:48:49
