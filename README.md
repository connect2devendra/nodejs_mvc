# nodejs_mvc

![Image of StoreList](https://github.com/connect2devendra/nodejs_mvc/blob/master/public/images/screenshot-store-list.jpg)


## Database Details as follows:

```
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `nodejs_mvc`
--

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`id`, `name`, `active`) VALUES
(1, 'Store 1', 1),
(2, 'Store 2', 1),
(3, 'Store 3', 1),
(4, 'Store 4', 1),
(5, 'Store 5', 1),
(6, 'Store 6', 2),
(7, 'Test store', 1),
(9, 'New store', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;
```

# Clone this project at your local machine using below command
```
$ git clone https://github.com/connect2devendra/nodejs_mvc.git

# Move inside to project root folder
$ cd nodejs_mvc

# Install all dependencies related to this projects "node_modules" run below command
$ npm install

# create and configure .env file at root directory
$ touch .env

# Paste below code to .env file

NODE_ENV='development'
FAKER_INSERT_COUNT=500
#development
DEV_DB_USERNAME='root'
DEV_DB_PASSWORD=''
DEV_DB_NAME='nodejs_mvc'
DEV_DB_HOSTNAME='127.0.0.1'
DEV_DB_DIALECT='mysql'
#test
TEST_DB_USERNAME=
TEST_DB_PASSWORD=
TEST_DB_NAME=
#production
PROD_DB_USERNAME=
PROD_DB_PASSWORD=
PROD_DB_NAME=
PROD_DB_HOSTNAME=

# Finaly, Run below command to excute the server at "http://localhost:3000"
$ npm start

```
