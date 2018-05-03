-- phpMyAdmin SQL Dump
-- version 4.2.9.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 20, 2018 at 07:50 PM
-- Server version: 5.5.49
-- PHP Version: 5.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cs476-2181_kramerec15`
--

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE IF NOT EXISTS `donations` (
`donation_id` int(11) NOT NULL,
  `donor_id` int(11) NOT NULL COMMENT 'donor_id = user_id',
  `amount_donated` int(11) NOT NULL,
  `payment_status` set('processed','unprocessed','other') NOT NULL,
  `date_submitted` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `page_info`
--

CREATE TABLE IF NOT EXISTS `page_info` (
  `page_id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `funded_amount` int(11) NOT NULL,
  `funds_needed` int(11) NOT NULL,
  `category` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `page_status`
--

CREATE TABLE IF NOT EXISTS `page_status` (
`page_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL COMMENT 'user_id = owner_id',
  `approved` enum('yes','no') NOT NULL,
  `processing` enum('yes','no') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
`user_id` int(11) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `admin` enum('yes','no') NOT NULL,
  `donor` enum('yes','no') NOT NULL,
  `researcher` set('student','faculty','not_applicable') NOT NULL,
  `password` varchar(35) NOT NULL COMMENT 'MD5 w/ salt: MD5(user_id.username)',
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `first_name`, `last_name`, `phone`, `email`, `admin`, `donor`, `researcher`, `password`, `username`) VALUES
(1, 'John', 'Wick', '000-000-0000', 'johnwick@uww.edu', 'no', 'no', 'not_applicable', '0104b2663e499ceef9d924b8cc4d4ea1', 'johnwick'),
(2, 'Sam', 'Adams', '111-111-1111', 'samadmas@uww.edu', 'yes', 'no', 'not_applicable', 'ce9884d528330704fc9d8e050df1f1a2', 'samadams'),
(3, 'Peter', 'Parker', '222-222-2222', 'peterparker@uww.edu', 'no', 'no', 'student', '2fd7cd01c81b63bab1f86ebaae3f3288', 'peterparker');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
 ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `page_info`
--
ALTER TABLE `page_info`
 ADD PRIMARY KEY (`page_id`), ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `page_status`
--
ALTER TABLE `page_status`
 ADD PRIMARY KEY (`page_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `email` (`email`), ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
MODIFY `donation_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `page_status`
--
ALTER TABLE `page_status`
MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
