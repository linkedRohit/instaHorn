-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: debate
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `debate`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `debate` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `debate`;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `commentString` text,
  `commentedOn` datetime DEFAULT NULL,
  `editedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,1,'Here taste this, you think i am trying to posion you?',NULL,'2017-08-05 07:18:51',1),(2,2,1,'testing new comment',NULL,'2017-08-05 14:04:41',1),(3,2,1,'trying one more comment',NULL,'2017-08-05 14:06:32',1),(4,2,1,'testing new',NULL,'2017-08-05 14:09:07',1),(8,2,1,'jan gan man',NULL,'2017-08-05 14:32:42',1),(9,2,1,'hahahahahah',NULL,'2017-08-05 14:34:11',1),(10,2,1,'trying again',NULL,'2017-08-05 14:54:46',1),(11,2,1,'ek aur comment',NULL,'2017-08-05 14:58:18',1),(12,2,1,'ek aur le lo',NULL,'2017-08-05 15:02:56',1),(13,2,1,'jai mata di',NULL,'2017-08-05 15:04:02',1),(14,2,1,'ek aur',NULL,'2017-08-05 15:06:53',1),(15,2,1,'aaaa',NULL,'2017-08-05 15:12:07',1),(16,2,1,'le lo ji',NULL,'2017-08-05 15:13:20',1),(17,2,1,'jai jai jai',NULL,'2017-08-05 15:14:48',1),(18,2,1,'hahahheheh',NULL,'2017-08-05 15:16:02',1),(19,2,1,'ek aur',NULL,'2017-08-05 15:16:54',1),(21,2,1,'hi',NULL,'2017-08-05 15:21:14',1),(22,2,1,'chakk do',NULL,'2017-08-05 15:28:26',1),(23,2,1,'yeh b lo',NULL,'2017-08-05 15:29:32',1),(24,2,1,'chakko',NULL,'2017-08-05 15:30:26',1),(25,2,1,'asd',NULL,'2017-08-05 15:31:41',1),(26,2,1,'asa',NULL,'2017-08-05 15:32:23',1),(27,2,1,'aa',NULL,'2017-08-05 15:34:03',1),(28,2,1,'Life sahi hai',NULL,'2017-08-06 06:28:40',1),(29,2,1,'ek aur comment karte hain',NULL,'2017-08-06 08:07:07',1),(30,2,1,'ek aur karein ?',NULL,'2017-08-06 08:07:52',1),(31,2,1,'ad',NULL,'2017-08-06 08:11:20',1),(32,2,1,'ek aur karein',NULL,'2017-08-06 08:11:31',1),(33,2,1,'one more',NULL,'2017-08-06 08:11:36',1),(34,2,1,'bs karo ab',NULL,'2017-08-06 08:11:41',1),(35,2,1,'chalo',NULL,'2017-08-06 08:12:29',1),(36,2,1,'chalo chao',NULL,'2017-08-06 08:15:42',1),(37,2,1,'ek aur',NULL,'2017-08-06 08:19:10',1),(38,2,1,'chal',NULL,'2017-08-06 08:20:18',1),(39,2,1,'aaa',NULL,'2017-08-06 08:21:33',1),(40,2,1,'aaa',NULL,'2017-08-06 08:22:14',1),(41,2,1,'asd',NULL,'2017-08-06 08:27:05',1),(42,2,1,'as',NULL,'2017-08-06 08:27:31',1),(43,2,1,'asd',NULL,'2017-08-06 08:27:38',1),(44,2,1,'p',NULL,'2017-08-06 08:28:17',1),(45,2,1,'a',NULL,'2017-08-06 08:29:02',1),(46,2,1,'a',NULL,'2017-08-06 08:30:29',1),(47,2,1,'v',NULL,'2017-08-06 08:31:18',1),(48,2,1,'z',NULL,'2017-08-06 08:38:28',1),(49,2,1,'a',NULL,'2017-08-06 08:43:14',1),(50,2,1,'we',NULL,'2017-08-06 08:44:22',1),(51,2,1,'a',NULL,'2017-08-06 08:45:41',1),(52,2,1,'a',NULL,'2017-08-06 08:46:03',1),(53,2,1,'asd',NULL,'2017-08-06 08:46:10',1),(58,2,1,'aaa','2017-08-06 14:33:23','2017-08-06 09:03:23',1),(59,2,1,'ppp','2017-08-06 14:41:23','2017-08-06 09:11:23',1),(60,2,1,'sdsd','2017-08-06 14:43:28','2017-08-06 09:13:28',1),(61,2,1,'aaa','2017-08-06 14:43:39','2017-08-06 09:13:39',1),(62,2,1,'aasd','2017-08-06 14:43:53','2017-08-06 09:13:53',1),(64,2,1,'Adding new comment for this post.','2017-08-07 13:44:30','2017-08-07 08:14:30',1),(67,2,9,'test','2017-08-07 13:50:11','2017-08-07 08:20:11',1),(68,2,9,'life sahi hai','2017-08-07 13:50:18','2017-08-07 08:20:18',1),(69,2,8,'test','2017-08-07 13:53:13','2017-08-07 08:23:13',1),(70,2,7,'test','2017-08-07 13:54:24','2017-08-07 08:24:24',1),(71,2,6,'testing','2017-08-07 13:55:58','2017-08-07 08:25:58',1),(72,2,5,'e','2017-08-07 13:56:25','2017-08-07 08:26:25',1),(73,2,4,'one two ka four','2017-08-07 13:57:19','2017-08-07 08:27:19',1),(75,2,3,'asdad','2017-08-07 13:59:32','2017-08-07 08:29:32',1),(76,2,2,'ad','2017-08-07 14:01:06','2017-08-07 08:31:06',1),(77,2,10,'testing','2017-08-07 14:04:09','2017-08-07 08:34:09',1),(78,2,12,'I have this opinion','2017-08-07 17:44:06','2017-08-07 12:14:06',1),(80,2,1,'hahahaha','2017-08-09 09:22:10','2017-08-09 03:52:10',1),(81,2,13,'testing comments','2017-08-12 15:45:35','2017-08-12 10:15:35',1),(82,2,14,'one mroe for the go','2017-08-12 15:45:45','2017-08-12 10:15:45',1),(83,2,13,'asd','2017-08-12 15:54:10','2017-08-12 10:24:10',1),(84,2,13,'asdsss','2017-08-12 15:54:12','2017-08-12 10:24:12',1),(85,2,13,'dddd','2017-08-12 15:54:14','2017-08-12 10:24:14',1),(86,2,1,'tsting','2017-08-13 13:01:46','2017-08-13 07:31:46',1),(87,2,14,NULL,'2017-08-13 13:50:02','2017-08-13 08:20:02',1),(88,2,1,'test','2017-08-19 18:49:02','2017-08-19 13:19:02',1);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opinions`
--

DROP TABLE IF EXISTS `opinions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opinions` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `opinion` text,
  `addedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  `opinionType` enum('up','down') DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opinions`
--

LOCK TABLES `opinions` WRITE;
/*!40000 ALTER TABLE `opinions` DISABLE KEYS */;
INSERT INTO `opinions` VALUES (1,2,12,'One more opinion','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(2,2,12,'asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(3,2,12,'asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(4,2,12,'asd asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(5,2,12,'asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(6,2,12,'test','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(7,2,12,'ek aur tesitng\nasd\nasd\nasd\na','2017-08-07 18:12:00','2017-08-07 12:53:58',1,'up'),(8,2,12,'ek aur tesitng\nasd\nasd\nasd\na','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(9,2,12,'asdasda','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(10,2,14,'order by updatedOn desc','2017-08-07 18:17:18','2017-08-07 12:53:58',1,'up'),(11,2,14,'testing','2017-08-07 18:18:03','2017-08-07 12:53:58',1,'up'),(12,2,14,'testing one more','2017-08-07 18:19:22','2017-08-07 12:53:58',1,'up'),(13,2,14,'no no no no','2017-08-07 18:19:32','2017-08-07 12:53:58',1,'up'),(14,2,14,'le chak chak','2017-08-07 18:23:28','2017-08-07 12:53:28',1,'down'),(15,2,14,'jai mata di','2017-08-07 18:37:08','2017-08-07 13:07:08',1,'up'),(16,2,14,'chalo bulawa aaya hai','2017-08-07 18:37:20','2017-08-07 13:07:20',1,'down'),(17,2,14,'hahaha red comment','2017-08-07 18:37:34','2017-08-07 13:07:34',1,'down'),(18,2,14,'testing again','2017-08-07 18:37:57','2017-08-07 13:07:57',1,'down'),(19,2,14,'one positive','2017-08-07 18:38:04','2017-08-07 13:08:04',1,'up'),(20,2,14,'ek aur','2017-08-07 18:39:09','2017-08-07 13:09:09',1,'up'),(21,2,14,'ek aur','2017-08-07 18:39:13','2017-08-07 13:09:13',1,'down'),(22,2,14,'ek aur karte hain','2017-08-07 18:39:21','2017-08-07 13:09:21',1,'up'),(23,2,14,'ek aur','2017-08-07 18:39:28','2017-08-07 13:09:28',1,'down'),(24,2,14,'asd','2017-08-13 13:37:25','2017-08-13 08:07:25',1,'down'),(25,2,14,'asd','2017-08-13 13:37:31','2017-08-13 08:07:31',1,'down'),(26,2,14,'testing','2017-08-13 13:39:33','2017-08-13 08:09:33',1,'down'),(27,2,2,'testing','2017-08-13 13:48:14','2017-08-13 08:18:14',1,'up'),(28,2,2,'','2017-08-13 13:48:17','2017-08-13 08:18:17',1,'down'),(29,2,2,'','2017-08-13 13:48:19','2017-08-13 08:18:19',1,'up'),(30,2,2,'','2017-08-13 13:48:35','2017-08-13 08:18:35',1,'up'),(31,2,2,'','2017-08-13 13:48:38','2017-08-13 08:18:38',1,'up'),(32,2,2,'','2017-08-13 13:48:42','2017-08-13 08:18:42',1,'up'),(33,2,14,'','2017-08-13 13:55:54','2017-08-13 08:25:54',1,'up'),(34,2,14,NULL,'2017-08-13 13:56:37','2017-08-13 08:26:37',1,'up'),(35,2,13,'test','2017-08-19 16:37:48','2017-08-19 11:07:48',1,'down'),(36,2,11,'test','2017-08-19 16:38:07','2017-08-19 11:08:07',1,'up'),(37,2,1,'Testing','2017-08-20 14:15:05','2017-08-26 19:08:09',1,'up'),(38,2,14,'overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:overflow:','2017-08-26 14:09:25','2017-08-26 08:39:25',1,'up'),(39,2,1,'one more opinion','2017-08-26 21:42:13','2017-08-26 19:08:09',1,'up'),(40,2,1,'chalo ek negative opinion.','2017-08-26 21:42:24','2017-08-26 19:08:09',1,'down'),(41,2,1,'ek aur negative comment.','2017-08-26 21:44:27','2017-08-26 19:08:09',1,'down'),(42,2,1,'testing karo ek aur negative comment ki alignment testing karo ek aur negative comment ki alignment testing karo ek aur negative comment ki alignment testing karo ek aur negative comment ki alignment testing karo ek aur negative comment ki alignment','2017-08-26 21:45:56','2017-08-26 19:08:09',1,'down'),(43,2,1,'testing karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignmenttesting karo ek aur negative comment ki alignment','2017-08-26 21:46:06','2017-08-26 19:08:09',1,'down'),(44,2,1,'testing karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignmenttesting karo ek aur positive comment ki alignment','2017-08-26 21:46:24','2017-08-26 19:08:09',1,'up'),(45,2,1,'testing','2017-08-26 22:31:38','2017-08-26 19:08:09',1,'up'),(46,2,1,'ek aur comment positive mein','2017-08-26 22:38:15','2017-08-26 19:08:09',1,'up'),(47,2,1,'testing again','2017-08-26 22:39:19','2017-08-26 19:08:09',1,'down'),(48,2,1,'testing postitive','2017-08-26 22:50:58','2017-08-26 19:08:09',1,'up'),(49,2,1,'testing','2017-08-27 00:19:10','2017-08-26 19:08:09',1,'up');
/*!40000 ALTER TABLE `opinions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topics` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(250) NOT NULL,
  `uid` int(20) DEFAULT NULL,
  `postedOn` datetime DEFAULT NULL,
  `editedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  `pid` int(11) DEFAULT NULL,
  `bitFlag` int(11) DEFAULT NULL,
  `type` enum('up','down') DEFAULT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `tid` (`tid`,`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (1,'Drinking Age Should the drinking age be lowered from 21 to a younger age?',1,'2017-07-02 00:00:44','2017-07-01 18:30:44',1,NULL,NULL,NULL),(2,'Are Single-sex schools are better for students?',1,'2017-07-18 02:03:07','2017-07-17 20:33:07',1,NULL,NULL,NULL),(3,'It is never appropriate for the government to restrict freedom of speech.',1,'2017-07-18 02:03:30','2017-07-17 20:33:30',1,NULL,NULL,NULL),(4,'Testing new topic addition',2,'2017-08-05 18:12:05','2017-08-05 12:42:05',1,NULL,NULL,NULL),(5,'Do you think studies are really important to become a successful person?',2,'2017-08-05 19:13:58','2017-08-05 13:43:58',1,NULL,NULL,NULL),(6,'Is tollywood better than bollywood in terms of quality content?',2,'2017-08-06 12:01:34','2017-08-06 06:31:34',1,NULL,NULL,NULL),(7,'Is starting a startup a new hobby for young people?',2,'2017-08-06 14:34:28','2017-08-06 09:04:28',1,NULL,NULL,NULL),(8,'Is football better than cricket?',2,'2017-08-06 14:35:54','2017-08-06 09:05:54',1,NULL,NULL,NULL),(9,'Is MTV more focused towards youth?',2,'2017-08-06 14:42:32','2017-08-06 09:12:32',1,NULL,NULL,NULL),(10,'Is technology impacting the life span of animals/birds around us?',2,'2017-08-07 13:42:57','2017-08-07 08:12:57',1,NULL,NULL,NULL),(11,'One more debate',2,'2017-08-07 16:05:29','2017-08-07 10:35:29',1,NULL,NULL,NULL),(12,'asd',2,'2017-08-07 16:06:15','2017-08-07 10:36:15',1,NULL,NULL,NULL),(13,'One more debate for final testing',2,'2017-08-07 18:13:40','2017-08-07 12:43:40',1,NULL,NULL,NULL),(14,'Lets add one more to check down voting',2,'2017-08-07 18:14:41','2017-08-07 12:44:41',1,NULL,NULL,NULL),(15,'Testing one more debate',2,'2017-08-19 16:38:57','2017-08-19 11:08:57',1,NULL,NULL,NULL),(16,'Testing one more debate.',2,'2017-08-20 14:10:17','2017-08-20 08:40:17',1,NULL,NULL,NULL),(19,'testing integrated comment',2,'2017-08-27 00:34:12','2017-08-26 19:04:12',1,43,NULL,NULL),(20,'check one more',2,'2017-08-27 00:56:10','2017-08-26 19:26:10',1,19,NULL,'up'),(21,'Testing',2,'2017-08-27 01:12:43','2017-08-26 19:42:43',1,18,NULL,'up'),(22,'hahaha',2,'2017-08-27 01:12:47','2017-08-26 19:42:47',1,18,NULL,'down'),(23,'Direct +ve opinion',2,'2017-08-27 01:18:59','2017-08-26 19:48:59',1,22,1,'up'),(24,'Direct -ve opinion',2,'2017-08-27 01:19:14','2017-08-26 19:49:14',1,22,1,'down'),(25,'plus',2,'2017-08-27 01:20:11','2017-08-26 19:50:11',1,24,1,'up'),(26,'jai',2,'2017-08-27 01:21:01','2017-08-26 19:51:01',1,25,1,'up'),(27,'nai',2,'2017-08-27 01:21:07','2017-08-26 19:51:07',1,25,1,'down'),(28,'haan re',2,'2017-08-27 01:21:14','2017-08-26 19:51:14',1,25,1,'up'),(29,'testing',2,'2017-08-27 01:22:02','2017-08-26 19:52:02',1,25,2,'up'),(30,'asd',2,'2017-08-27 01:23:04','2017-08-26 19:53:04',1,29,1,'up'),(31,'asd',2,'2017-08-27 01:23:28','2017-08-26 19:53:28',1,29,2,'up'),(32,'sdsad',2,'2017-08-27 01:23:37','2017-08-26 19:53:37',1,29,2,'down'),(33,'asd',2,'2017-08-27 01:26:42','2017-08-26 19:56:42',1,32,1,'up'),(34,'dsad',2,'2017-08-27 01:26:47','2017-08-26 19:56:47',1,33,2,'up'),(36,'jai bam bhole',2,'2017-08-27 01:30:16','2017-08-26 20:00:16',1,18,2,'down'),(37,'asd',2,'2017-08-27 01:38:04','2017-08-26 20:08:04',1,16,1,'down'),(38,'hahahah',2,'2017-08-27 14:08:50','2017-08-27 08:38:50',1,37,2,'up');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `uid` int(20) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `accessToken` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `registeredOn` datetime DEFAULT NULL,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fbid` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mayank Mishra','EAAGevaz58CABAAZCKmJQVCSqXCJklb1pDXuidznnU6Fx9STZBTZCGkvOSnwQqiOfWjzUrMdweI1JiyP8I1PkMIJDqyJfMutWmnu4ZAaxtIw762l0QdcFCaCXh1Ttk74cSATW0dWUpzkDcCeWUMJoIhmJpwcrUgdaejhzeAeecS3vkZBfyuYfiGY6tZAijVzZCcZD','unlockmyidentity@gmail.com',NULL,'2017-08-05 11:00:43','1597556173622310'),(2,'Rohit Sharma','EAAGevaz58CABACQ20ed65Ly3BEuICquZAhBUDJTu2ZCL1VEjcJgCfRPhLbOzzYsxY4wR7JGbGF07LZA2Sd08U2aU4MIDivFggDMNZBsYL8e3APB86voRZCanuct9ASrlRyx5ZAwzvsVjC5zbBW8UhMiA3VS42vi6PYPP6xXLtMZCcbIdjMjKqMSLyMBJP5ZAGFwZD','rohit.codes0@gmail.com',NULL,'2017-08-09 07:19:52','2023825090976399');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `votes` (
  `vid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `votedOn` datetime DEFAULT CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  `voteType` enum('up','down','angry','haha') DEFAULT NULL,
  PRIMARY KEY (`vid`)
) ENGINE=InnoDB AUTO_INCREMENT=526 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES (1,1,10,'2017-08-07 16:09:14',1,'up'),(3,2,10,'2017-08-07 16:12:09',1,'down'),(5,1,11,'2017-08-07 16:13:07',1,'down'),(14,2,9,'2017-08-07 17:02:51',1,'down'),(16,2,8,'2017-08-07 17:03:56',1,'up'),(50,2,7,'2017-08-07 17:12:52',1,'up'),(51,2,6,'2017-08-07 17:13:46',1,'up'),(52,2,5,'2017-08-07 17:14:29',1,'up'),(78,2,4,'2017-08-07 17:16:13',1,'up'),(126,5,12,'2017-08-07 17:27:08',1,'down'),(127,4,12,'2017-08-07 17:27:12',1,'down'),(128,3,12,'2017-08-07 17:27:15',1,'down'),(130,1,12,'2017-08-07 17:27:24',1,'down'),(133,3,3,'2017-08-07 17:35:04',1,'down'),(134,4,3,'2017-08-07 17:35:07',1,'down'),(135,5,3,'2017-08-07 17:35:09',1,'down'),(138,2,3,'2017-08-07 17:35:20',1,'up'),(139,3,1,'2017-08-07 17:36:42',1,'down'),(140,4,1,'2017-08-07 17:36:44',1,'down'),(141,5,1,'2017-08-07 17:36:50',1,'up'),(147,2,1,'2017-08-07 17:38:50',1,'down'),(166,2,12,'2017-08-07 18:13:19',1,'up'),(206,2,13,'2017-08-19 16:37:43',1,'down'),(212,2,11,'2017-08-19 16:38:47',1,'down'),(227,2,2,'2017-08-20 13:35:47',1,'up'),(247,2,14,'2017-08-26 14:09:19',1,'up'),(248,2,15,'2017-08-26 21:40:26',1,'down'),(267,2,17,'2017-08-27 00:29:31',1,'up'),(268,2,19,'2017-08-27 00:56:06',1,'up'),(272,2,22,'2017-08-27 01:19:09',1,'down'),(273,2,24,'2017-08-27 01:20:08',1,'up'),(276,2,25,'2017-08-27 01:21:10',1,'up'),(277,2,29,'2017-08-27 01:23:02',1,'up'),(278,2,32,'2017-08-27 01:26:39',1,'up'),(365,2,16,'2017-08-27 13:01:27',1,'up'),(366,2,16,'2017-08-27 13:02:39',1,'haha'),(367,2,16,'2017-08-27 13:02:42',1,'up'),(368,2,16,'2017-08-27 13:02:43',1,'up'),(369,2,16,'2017-08-27 13:02:43',1,'up'),(370,2,16,'2017-08-27 13:02:43',1,'up'),(371,2,16,'2017-08-27 13:02:43',1,'up'),(372,2,16,'2017-08-27 13:02:43',1,'up'),(373,2,16,'2017-08-27 13:02:44',1,'up'),(374,2,16,'2017-08-27 13:02:51',1,'haha'),(375,2,16,'2017-08-27 13:02:51',1,'haha'),(376,2,16,'2017-08-27 13:02:51',1,'haha'),(377,2,16,'2017-08-27 13:02:51',1,'haha'),(378,2,16,'2017-08-27 13:02:52',1,'haha'),(379,2,16,'2017-08-27 13:02:52',1,'haha'),(380,2,16,'2017-08-27 13:02:52',1,'haha'),(381,2,16,'2017-08-27 13:02:52',1,'haha'),(382,2,16,'2017-08-27 13:02:52',1,'haha'),(383,2,16,'2017-08-27 13:02:52',1,'haha'),(384,2,16,'2017-08-27 13:07:09',1,'down'),(385,2,16,'2017-08-27 13:07:10',1,'angry'),(386,2,16,'2017-08-27 13:07:10',1,'haha'),(387,2,16,'2017-08-27 13:07:12',1,'up'),(388,2,16,'2017-08-27 13:07:12',1,'haha'),(389,2,16,'2017-08-27 13:07:13',1,'down'),(390,2,16,'2017-08-27 13:07:16',1,'down'),(391,2,16,'2017-08-27 13:07:16',1,'down'),(392,2,16,'2017-08-27 13:07:16',1,'down'),(393,2,16,'2017-08-27 13:07:16',1,'down'),(394,2,16,'2017-08-27 13:07:16',1,'down'),(395,2,16,'2017-08-27 13:07:17',1,'angry'),(396,2,16,'2017-08-27 13:07:18',1,'angry'),(397,2,16,'2017-08-27 13:07:18',1,'angry'),(398,2,16,'2017-08-27 13:07:18',1,'angry'),(399,2,16,'2017-08-27 13:07:18',1,'angry'),(400,2,16,'2017-08-27 13:07:18',1,'angry'),(401,2,16,'2017-08-27 13:09:10',1,'haha'),(402,2,16,'2017-08-27 13:09:13',1,'angry'),(403,2,16,'2017-08-27 13:10:27',1,'angry'),(404,2,16,'2017-08-27 13:10:28',1,'angry'),(405,2,16,'2017-08-27 13:10:28',1,'angry'),(406,2,16,'2017-08-27 13:11:36',1,'haha'),(407,2,16,'2017-08-27 13:11:38',1,'down'),(408,2,16,'2017-08-27 13:12:38',1,'down'),(409,2,16,'2017-08-27 13:12:39',1,'down'),(410,2,16,'2017-08-27 13:12:40',1,'down'),(411,2,16,'2017-08-27 13:12:40',1,'down'),(412,2,16,'2017-08-27 13:12:41',1,'down'),(413,2,16,'2017-08-27 13:13:40',1,'up'),(414,2,16,'2017-08-27 13:13:40',1,'up'),(415,2,16,'2017-08-27 13:13:41',1,'up'),(416,2,16,'2017-08-27 13:13:41',1,'up'),(417,2,16,'2017-08-27 13:13:41',1,'up'),(418,2,16,'2017-08-27 13:13:41',1,'up'),(419,2,16,'2017-08-27 13:13:41',1,'up'),(420,2,16,'2017-08-27 13:13:42',1,'up'),(421,2,16,'2017-08-27 13:13:42',1,'up'),(422,2,16,'2017-08-27 13:13:42',1,'up'),(423,2,16,'2017-08-27 13:13:42',1,'up'),(424,2,16,'2017-08-27 13:13:42',1,'up'),(425,2,16,'2017-08-27 13:13:44',1,'up'),(426,2,16,'2017-08-27 13:13:45',1,'up'),(427,2,16,'2017-08-27 13:13:45',1,'up'),(428,2,16,'2017-08-27 13:13:46',1,'up'),(429,2,16,'2017-08-27 13:13:46',1,'up'),(430,2,16,'2017-08-27 13:13:46',1,'up'),(431,2,16,'2017-08-27 13:13:46',1,'up'),(432,2,16,'2017-08-27 13:13:46',1,'up'),(433,2,16,'2017-08-27 13:13:46',1,'up'),(434,2,16,'2017-08-27 13:13:47',1,'up'),(435,2,16,'2017-08-27 13:13:47',1,'up'),(436,2,16,'2017-08-27 13:13:47',1,'up'),(437,2,16,'2017-08-27 13:13:47',1,'up'),(438,2,16,'2017-08-27 13:13:47',1,'up'),(439,2,16,'2017-08-27 13:13:47',1,'up'),(440,2,16,'2017-08-27 13:13:48',1,'up'),(441,2,16,'2017-08-27 13:13:48',1,'up'),(442,2,16,'2017-08-27 13:24:47',1,'up'),(443,2,16,'2017-08-27 13:24:48',1,'up'),(444,2,16,'2017-08-27 13:24:48',1,'up'),(445,2,16,'2017-08-27 13:24:48',1,'up'),(446,2,16,'2017-08-27 13:24:49',1,'up'),(447,2,16,'2017-08-27 13:24:49',1,'up'),(448,2,16,'2017-08-27 13:24:50',1,'haha'),(449,2,16,'2017-08-27 13:24:50',1,'haha'),(450,2,16,'2017-08-27 13:24:50',1,'haha'),(451,2,16,'2017-08-27 13:24:52',1,'down'),(452,2,16,'2017-08-27 13:24:52',1,'down'),(453,2,16,'2017-08-27 13:24:52',1,'down'),(454,2,16,'2017-08-27 13:24:52',1,'down'),(455,2,16,'2017-08-27 13:24:53',1,'down'),(456,2,16,'2017-08-27 13:24:53',1,'down'),(457,2,16,'2017-08-27 13:24:53',1,'down'),(458,2,16,'2017-08-27 13:24:53',1,'down'),(459,2,16,'2017-08-27 13:24:53',1,'down'),(460,2,16,'2017-08-27 13:24:53',1,'down'),(461,2,16,'2017-08-27 13:24:54',1,'down'),(462,2,16,'2017-08-27 13:24:55',1,'up'),(463,2,16,'2017-08-27 13:24:56',1,'up'),(464,2,16,'2017-08-27 13:24:56',1,'up'),(465,2,16,'2017-08-27 13:24:56',1,'up'),(466,2,16,'2017-08-27 13:24:56',1,'up'),(467,2,16,'2017-08-27 13:24:56',1,'up'),(468,2,16,'2017-08-27 13:24:56',1,'up'),(469,2,16,'2017-08-27 13:24:56',1,'up'),(470,2,16,'2017-08-27 13:24:57',1,'up'),(471,2,16,'2017-08-27 13:24:57',1,'up'),(472,2,16,'2017-08-27 13:24:57',1,'up'),(473,2,16,'2017-08-27 13:24:57',1,'up'),(474,2,16,'2017-08-27 13:24:57',1,'up'),(475,2,16,'2017-08-27 13:24:59',1,'up'),(476,2,16,'2017-08-27 13:24:59',1,'up'),(477,2,16,'2017-08-27 13:25:00',1,'up'),(478,2,16,'2017-08-27 13:25:00',1,'up'),(479,2,16,'2017-08-27 13:25:00',1,'up'),(480,2,16,'2017-08-27 13:25:01',1,'up'),(481,2,16,'2017-08-27 13:25:01',1,'up'),(482,2,16,'2017-08-27 13:25:01',1,'up'),(483,2,16,'2017-08-27 13:25:01',1,'up'),(484,2,16,'2017-08-27 13:25:01',1,'up'),(485,2,16,'2017-08-27 13:25:01',1,'up'),(486,2,16,'2017-08-27 13:25:01',1,'up'),(487,2,16,'2017-08-27 13:25:02',1,'up'),(488,2,16,'2017-08-27 13:25:02',1,'up'),(489,2,16,'2017-08-27 13:25:03',1,'up'),(490,2,16,'2017-08-27 13:25:03',1,'up'),(491,2,16,'2017-08-27 13:25:03',1,'up'),(492,2,16,'2017-08-27 13:25:03',1,'up'),(493,2,16,'2017-08-27 13:25:03',1,'up'),(494,2,16,'2017-08-27 13:25:03',1,'up'),(495,2,16,'2017-08-27 13:25:04',1,'up'),(496,2,16,'2017-08-27 13:25:04',1,'up'),(497,2,16,'2017-08-27 13:25:04',1,'up'),(498,2,16,'2017-08-27 13:25:05',1,'up'),(499,2,16,'2017-08-27 13:25:05',1,'up'),(500,2,16,'2017-08-27 13:25:06',1,'up'),(501,2,16,'2017-08-27 13:25:06',1,'up'),(502,2,16,'2017-08-27 13:25:06',1,'up'),(503,2,16,'2017-08-27 13:25:07',1,'up'),(504,2,16,'2017-08-27 13:25:07',1,'up'),(505,2,16,'2017-08-27 13:25:07',1,'up'),(506,2,16,'2017-08-27 13:25:07',1,'up'),(507,2,16,'2017-08-27 13:25:07',1,'up'),(508,2,16,'2017-08-27 13:25:07',1,'up'),(509,2,16,'2017-08-27 13:25:08',1,'up'),(510,2,16,'2017-08-27 13:25:08',1,'up'),(511,2,16,'2017-08-27 13:25:08',1,'up'),(512,2,16,'2017-08-27 13:25:08',1,'up'),(513,2,16,'2017-08-27 13:25:08',1,'up'),(514,2,16,'2017-08-27 13:25:09',1,'up'),(515,2,16,'2017-08-27 13:25:09',1,'up'),(516,2,16,'2017-08-27 13:25:09',1,'up'),(517,2,16,'2017-08-27 13:25:09',1,'up'),(518,2,16,'2017-08-27 13:25:09',1,'up'),(519,2,16,'2017-08-27 13:25:09',1,'up'),(520,2,16,'2017-08-27 13:25:10',1,'up'),(521,2,16,'2017-08-27 13:25:10',1,'up'),(522,2,16,'2017-08-27 13:25:10',1,'up'),(523,2,16,'2017-08-27 13:25:10',1,'up'),(524,2,16,'2017-08-27 13:26:14',1,'haha'),(525,2,16,'2017-08-27 13:26:15',1,'down');
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-27 14:10:40
