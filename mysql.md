# MySQL

## Usefull tips
### Reset password
1. Open & Edit /etc/my.cnf or /etc/mysql/my.cnf, depending on your distro.
2. Add skip-grant-tables under [mysqld]
3. Restart Mysql
4. You should be able to login to mysql now using the below command mysql -u root -p
5. Run mysql> flush privileges;
6. Set new password by ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';
7. Go back to /etc/my.cnf and remove/comment skip-grant-tables
8. Restart Mysql
9. Now you will be able to login with the new password mysql -u root -p

## Commands
- SHOW DATABASES; => show tables
- \s => status of database
- \q => exit
- DROP DATABASE some; => delete database
- CREATE DATABASE name_database; => create database
- USE database; => use database
- SHOW TABLES; => show tables
- CREATE TABLE users ( id INT(5) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(64), surname VARCHAR(64), age TINYINT(3), email VARCHAR(64), status VARCHAR(128)) DEFAULT CHARACTER SET UTF8;
- DESCRIBE users;
- INSERT INTO users VALUES('', 'Vitaliy', 'Gerasimovich', '23', 'test@gmail.com', 'work');
- SELECT * FROM users;
- SELECT * FROM users WHERE status='work'
- UPDATE users SET status='sleeping' WHERE surname='Vitaliy';
- DELETE from users WHERE surname='Gerasimovich';
- GRANT SELECT,INSERT,DELETE,UPDATE ON test.* TO 'test@localhost';
- SHOW GRANTS FOR 'test@localhost';
- CREATE USER 'test@localhost' IDENTIFIED BY 'secret';
- DROP USER;
- REVOKE;

## Files
- `/var/lib/mysql/`
