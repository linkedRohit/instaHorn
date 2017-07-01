create database debate;

use debate;

CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(50) NOT NULL,
  `accessToken` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `registeredOn` datetime DEFAULT NULL,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
);

CREATE TABLE `topics` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(250) NOT NULL,
  `uid` int(11) NOT NULL,
  `postedOn` datetime DEFAULT NULL,
  `editedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  PRIMARY KEY (`tid`),
  UNIQUE KEY `tid` (`tid`,`uid`)
);

CREATE TABLE `responses` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `responseString` text NOT NULL,
  `addedOn` datetime DEFAULT NULL,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  PRIMARY KEY (`rid`)
);

CREATE TABLE `upVotes` (
  `vid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `votedOn` datetime DEFAULT NULL,
  `active` int(1) DEFAULT '1',
  PRIMARY KEY (`vid`),
  UNIQUE KEY `uid` (`uid`,`tid`)
);

CREATE TABLE `comments` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `commentString` text,
  `commentedOn` datetime DEFAULT NULL,
  `editedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active` int(1) DEFAULT '1',
  PRIMARY KEY (`cid`)
);

