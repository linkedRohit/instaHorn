-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: debate
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

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
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,1,'Here taste this, you think i am trying to posion you?',NULL,'2017-08-05 07:18:51',1),(2,2,1,'testing new comment',NULL,'2017-08-05 14:04:41',1),(3,2,1,'trying one more comment',NULL,'2017-08-05 14:06:32',1),(4,2,1,'testing new',NULL,'2017-08-05 14:09:07',1),(8,2,1,'jan gan man',NULL,'2017-08-05 14:32:42',1),(9,2,1,'hahahahahah',NULL,'2017-08-05 14:34:11',1),(10,2,1,'trying again',NULL,'2017-08-05 14:54:46',1),(11,2,1,'ek aur comment',NULL,'2017-08-05 14:58:18',1),(12,2,1,'ek aur le lo',NULL,'2017-08-05 15:02:56',1),(13,2,1,'jai mata di',NULL,'2017-08-05 15:04:02',1),(14,2,1,'ek aur',NULL,'2017-08-05 15:06:53',1),(15,2,1,'aaaa',NULL,'2017-08-05 15:12:07',1),(16,2,1,'le lo ji',NULL,'2017-08-05 15:13:20',1),(17,2,1,'jai jai jai',NULL,'2017-08-05 15:14:48',1),(18,2,1,'hahahheheh',NULL,'2017-08-05 15:16:02',1),(19,2,1,'ek aur',NULL,'2017-08-05 15:16:54',1),(21,2,1,'hi',NULL,'2017-08-05 15:21:14',1),(22,2,1,'chakk do',NULL,'2017-08-05 15:28:26',1),(23,2,1,'yeh b lo',NULL,'2017-08-05 15:29:32',1),(24,2,1,'chakko',NULL,'2017-08-05 15:30:26',1),(25,2,1,'asd',NULL,'2017-08-05 15:31:41',1),(26,2,1,'asa',NULL,'2017-08-05 15:32:23',1),(27,2,1,'aa',NULL,'2017-08-05 15:34:03',1),(28,2,1,'Life sahi hai',NULL,'2017-08-06 06:28:40',1),(29,2,1,'ek aur comment karte hain',NULL,'2017-08-06 08:07:07',1),(30,2,1,'ek aur karein ?',NULL,'2017-08-06 08:07:52',1),(31,2,1,'ad',NULL,'2017-08-06 08:11:20',1),(32,2,1,'ek aur karein',NULL,'2017-08-06 08:11:31',1),(33,2,1,'one more',NULL,'2017-08-06 08:11:36',1),(34,2,1,'bs karo ab',NULL,'2017-08-06 08:11:41',1),(35,2,1,'chalo',NULL,'2017-08-06 08:12:29',1),(36,2,1,'chalo chao',NULL,'2017-08-06 08:15:42',1),(37,2,1,'ek aur',NULL,'2017-08-06 08:19:10',1),(38,2,1,'chal',NULL,'2017-08-06 08:20:18',1),(39,2,1,'aaa',NULL,'2017-08-06 08:21:33',1),(40,2,1,'aaa',NULL,'2017-08-06 08:22:14',1),(41,2,1,'asd',NULL,'2017-08-06 08:27:05',1),(42,2,1,'as',NULL,'2017-08-06 08:27:31',1),(43,2,1,'asd',NULL,'2017-08-06 08:27:38',1),(44,2,1,'p',NULL,'2017-08-06 08:28:17',1),(45,2,1,'a',NULL,'2017-08-06 08:29:02',1),(46,2,1,'a',NULL,'2017-08-06 08:30:29',1),(47,2,1,'v',NULL,'2017-08-06 08:31:18',1),(48,2,1,'z',NULL,'2017-08-06 08:38:28',1),(49,2,1,'a',NULL,'2017-08-06 08:43:14',1),(50,2,1,'we',NULL,'2017-08-06 08:44:22',1),(51,2,1,'a',NULL,'2017-08-06 08:45:41',1),(52,2,1,'a',NULL,'2017-08-06 08:46:03',1),(53,2,1,'asd',NULL,'2017-08-06 08:46:10',1),(58,2,1,'aaa','2017-08-06 14:33:23','2017-08-06 09:03:23',1),(59,2,1,'ppp','2017-08-06 14:41:23','2017-08-06 09:11:23',1),(60,2,1,'sdsd','2017-08-06 14:43:28','2017-08-06 09:13:28',1),(61,2,1,'aaa','2017-08-06 14:43:39','2017-08-06 09:13:39',1),(62,2,1,'aasd','2017-08-06 14:43:53','2017-08-06 09:13:53',1),(64,2,1,'Adding new comment for this post.','2017-08-07 13:44:30','2017-08-07 08:14:30',1),(67,2,9,'test','2017-08-07 13:50:11','2017-08-07 08:20:11',1),(68,2,9,'life sahi hai','2017-08-07 13:50:18','2017-08-07 08:20:18',1),(69,2,8,'test','2017-08-07 13:53:13','2017-08-07 08:23:13',1),(70,2,7,'test','2017-08-07 13:54:24','2017-08-07 08:24:24',1),(71,2,6,'testing','2017-08-07 13:55:58','2017-08-07 08:25:58',1),(72,2,5,'e','2017-08-07 13:56:25','2017-08-07 08:26:25',1),(73,2,4,'one two ka four','2017-08-07 13:57:19','2017-08-07 08:27:19',1),(75,2,3,'asdad','2017-08-07 13:59:32','2017-08-07 08:29:32',1),(76,2,2,'ad','2017-08-07 14:01:06','2017-08-07 08:31:06',1),(77,2,10,'testing','2017-08-07 14:04:09','2017-08-07 08:34:09',1),(78,2,12,'I have this opinion','2017-08-07 17:44:06','2017-08-07 12:14:06',1),(79,2,1,'pta ni kya think kare','2017-08-07 18:50:05','2017-08-07 13:20:05',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opinions`
--

LOCK TABLES `opinions` WRITE;
/*!40000 ALTER TABLE `opinions` DISABLE KEYS */;
INSERT INTO `opinions` VALUES (1,2,12,'One more opinion','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(2,2,12,'asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(3,2,12,'asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(4,2,12,'asd asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(5,2,12,'asd','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(6,2,12,'test','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(7,2,12,'ek aur tesitng\nasd\nasd\nasd\na','2017-08-07 18:12:00','2017-08-07 12:53:58',1,'up'),(8,2,12,'ek aur tesitng\nasd\nasd\nasd\na','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(9,2,12,'asdasda','2017-08-07 18:08:10','2017-08-07 12:53:58',1,'up'),(10,2,14,'order by updatedOn desc','2017-08-07 18:17:18','2017-08-07 12:53:58',1,'up'),(11,2,14,'testing','2017-08-07 18:18:03','2017-08-07 12:53:58',1,'up'),(12,2,14,'testing one more','2017-08-07 18:19:22','2017-08-07 12:53:58',1,'up'),(13,2,14,'no no no no','2017-08-07 18:19:32','2017-08-07 12:53:58',1,'up'),(14,2,14,'le chak chak','2017-08-07 18:23:28','2017-08-07 12:53:28',1,'down'),(15,2,14,'jai mata di','2017-08-07 18:37:08','2017-08-07 13:07:08',1,'up'),(16,2,14,'chalo bulawa aaya hai','2017-08-07 18:37:20','2017-08-07 13:07:20',1,'down'),(17,2,14,'hahaha red comment','2017-08-07 18:37:34','2017-08-07 13:07:34',1,'down'),(18,2,14,'testing again','2017-08-07 18:37:57','2017-08-07 13:07:57',1,'down'),(19,2,14,'one positive','2017-08-07 18:38:04','2017-08-07 13:08:04',1,'up'),(20,2,14,'ek aur','2017-08-07 18:39:09','2017-08-07 13:09:09',1,'up'),(21,2,14,'ek aur','2017-08-07 18:39:13','2017-08-07 13:09:13',1,'down'),(22,2,14,'ek aur karte hain','2017-08-07 18:39:21','2017-08-07 13:09:21',1,'up'),(23,2,14,'ek aur','2017-08-07 18:39:28','2017-08-07 13:09:28',1,'down'),(24,1,2,'yo!','2017-08-26 20:14:25','2017-08-26 14:44:25',1,'up'),(25,1,15,'For a moment let\'s put aside all the Russian collaboration/treason controversy and all the current political battles...\n1) He is all about money as well as his brand, and recent news is that big clients are pulling out of his resorts to stay clear of controversy. He needs to quit just to get back to his business.\n2) I believe he cares very much about his legacy and at this rate he\'ll have zero political legacy to pass on to his family and a diminished empire capacity to pass to them.\n3) What he enjoys the most is sniping at people. What better position to snipe at them than from the protection and security of being a former President? Heck, as much as his side likes to claim Obama is playing games from the sideline a Trump on the sideline is a far more ominous foe. But as long as he is still President he is partially thwarted in his sniping because he still is expected to make deals, deliver, and act some degree of Presidential. Quitting frees his hands.\n4) Sooner or later he may have to bolt for Russia for political assylum. He is never going to succeed in doing that so long as he has an army surrounding him to protect the President.','2017-08-26 20:21:56','2017-08-26 14:51:56',1,'up'),(26,1,15,'I agree with 1 thru 4. If you continued with 5 thru 8 I\'d probably have to agree with them too. This is the most divisive President in history, one of the oldest in age, youngest in mentality (7th grade level).\nIt\'s amazing he gets away with \"lying Ted\" and \"crooked Hillary\" when he out-lies and out-crookeds\" them both, to the enjoyment of his 7th grade schoolyard followers. The rich bully the kids follow.\nStrangely, (well, not really), Mitt Rmoney is said to have been a \"rich, schoolyard bully\" when he was IN school. (Must be a rich, right wing thing ... ). Do we need rich, right wing bullys? Not in MY America!\nNo, Trump shouldn\'t quit, that would be to dignified! He should be FIRED! (something he would definitely understand!)','2017-08-26 20:22:11','2017-08-26 14:52:11',1,'up'),(27,1,15,'No there is no reasoning for it. The American Left at this point would want any Republican President to quit because they lost a Presidential Election ! Leftist have been unmasked and now shown for the Communist that they are.','2017-08-26 20:22:19','2017-08-26 14:52:19',1,'down'),(28,1,15,'No, he\'s not a quitter and shouldn\'t let himself succumb to the ceaseless character assassination attempts by the spiteful Democrats and the vindictiveness of an embarrassed and incompetent F.B.I.\nThe F.B.I, failed to take the appropriate action against Hillary Clinton over her email scandal and has never forgiven President Trump for exposing the dangers of their ineptitude and left wing bias.','2017-08-26 20:22:30','2017-08-26 14:52:30',1,'down'),(29,1,15,'Crazy AL who is going to fire Trump ? You Leftist are unhinged because of one reason \"The Boy King\" Obama destroyed Hillary\'s chance of winning now in the mind of a Leftist you cannot accept that reality.','2017-08-26 20:22:52','2017-08-26 14:52:52',1,'up'),(30,1,15,'Boston Boy i thought you Leftist were more concerned now about White Supremacist and Nazis ? Is that not true ?','2017-08-26 20:23:05','2017-08-26 14:53:05',1,'up'),(31,1,15,'Why would he quit? The economy is great, job growth is good, the market is great, and he loves destroying the communist propaganda liberal media. He\'s having the time of his life. What a way to go out.','2017-08-26 20:23:13','2017-08-26 14:53:13',1,'down');
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
  PRIMARY KEY (`tid`),
  UNIQUE KEY `tid` (`tid`,`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (1,'Drinking Age Should the drinking age be lowered from 21 to a younger age?',1,'2017-07-02 00:00:44','2017-07-01 18:30:44',1),(2,'Are Single-sex schools are better for students?',1,'2017-07-18 02:03:07','2017-07-17 20:33:07',1),(3,'It is never appropriate for the government to restrict freedom of speech.',1,'2017-07-18 02:03:30','2017-07-17 20:33:30',1),(4,'Testing new topic addition',2,'2017-08-05 18:12:05','2017-08-05 12:42:05',1),(5,'Do you think studies are really important to become a successful person?',2,'2017-08-05 19:13:58','2017-08-05 13:43:58',1),(6,'Is tollywood better than bollywood in terms of quality content?',2,'2017-08-06 12:01:34','2017-08-06 06:31:34',1),(7,'Is starting a startup a new hobby for young people?',2,'2017-08-06 14:34:28','2017-08-06 09:04:28',1),(8,'Is football better than cricket?',2,'2017-08-06 14:35:54','2017-08-06 09:05:54',1),(9,'Is MTV more focused towards youth?',2,'2017-08-06 14:42:32','2017-08-06 09:12:32',1),(10,'Is technology impacting the life span of animals/birds around us?',2,'2017-08-07 13:42:57','2017-08-07 08:12:57',1),(11,'One more debate',2,'2017-08-07 16:05:29','2017-08-07 10:35:29',1),(12,'asd',2,'2017-08-07 16:06:15','2017-08-07 10:36:15',1),(13,'One more debate for final testing',2,'2017-08-07 18:13:40','2017-08-07 12:43:40',1),(14,'Lets add one more to check down voting',2,'2017-08-07 18:14:41','2017-08-07 12:44:41',1),(15,'Should Trump Quit?',1,'2017-08-26 20:21:35','2017-08-26 14:51:35',1);
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
INSERT INTO `users` VALUES (1,'Mayank Mishra','EAAGevaz58CABAAZCKmJQVCSqXCJklb1pDXuidznnU6Fx9STZBTZCGkvOSnwQqiOfWjzUrMdweI1JiyP8I1PkMIJDqyJfMutWmnu4ZAaxtIw762l0QdcFCaCXh1Ttk74cSATW0dWUpzkDcCeWUMJoIhmJpwcrUgdaejhzeAeecS3vkZBfyuYfiGY6tZAijVzZCcZD','unlockmyidentity@gmail.com',NULL,'2017-08-05 11:00:43','1597556173622310'),(2,'Rohit Sharma','EAAGevaz58CABABR3VcPW9ZAK1CkMuJh5uB4xggCiXmbds1vtt7O5t8qSa4EF7gaX3aEsW3mEZBeXqtOVNAlLvdtjcrM3OmT8bNfaPhZCOkZCsmDOEt50dZCN4hGNYHygl7ZCxtMCiLoE0hi1gCfT0aqIUCZBiSJC44V0EL3OjFMVpRHPirOPBYSe0sFDfyLGjYZD','rohit.codes0@gmail.com',NULL,'2017-08-08 09:24:06','2023825090976399');
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
  `voteType` enum('up','down') DEFAULT NULL,
  PRIMARY KEY (`vid`),
  UNIQUE KEY `uid` (`uid`,`tid`),
  UNIQUE KEY `uniqueVote` (`tid`,`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES (1,1,10,'2017-08-07 16:09:14',1,'up'),(2,2,13,'2017-08-07 16:12:04',1,'down'),(3,2,10,'2017-08-07 16:12:09',1,'down'),(5,1,11,'2017-08-07 16:13:07',1,'down'),(6,2,11,'2017-08-07 16:13:10',1,'down'),(12,2,2,'2017-08-07 17:01:58',1,'down'),(14,2,9,'2017-08-07 17:02:51',1,'down'),(16,2,8,'2017-08-07 17:03:56',1,'up'),(50,2,7,'2017-08-07 17:12:52',1,'up'),(51,2,6,'2017-08-07 17:13:46',1,'up'),(52,2,5,'2017-08-07 17:14:29',1,'up'),(78,2,4,'2017-08-07 17:16:13',1,'up'),(126,5,12,'2017-08-07 17:27:08',1,'down'),(127,4,12,'2017-08-07 17:27:12',1,'down'),(128,3,12,'2017-08-07 17:27:15',1,'down'),(130,1,12,'2017-08-07 17:27:24',1,'down'),(133,3,3,'2017-08-07 17:35:04',1,'down'),(134,4,3,'2017-08-07 17:35:07',1,'down'),(135,5,3,'2017-08-07 17:35:09',1,'down'),(138,2,3,'2017-08-07 17:35:20',1,'up'),(139,3,1,'2017-08-07 17:36:42',1,'down'),(140,4,1,'2017-08-07 17:36:44',1,'down'),(141,5,1,'2017-08-07 17:36:50',1,'up'),(147,2,1,'2017-08-07 17:38:50',1,'down'),(166,2,12,'2017-08-07 18:13:19',1,'up'),(185,2,14,'2017-08-07 18:40:06',1,'up'),(186,1,2,'2017-08-26 20:14:22',1,'up'),(193,1,15,'2017-08-26 20:23:12',1,'down');
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

-- Dump completed on 2017-08-26 20:25:02
