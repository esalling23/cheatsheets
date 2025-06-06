# MySQL 


<!-- TOC -->

- [MySQL](#mysql)
	- [Command Line Basics](#command-line-basics)
	- [Managing Users](#managing-users)
		- [Reset Root Password](#reset-root-password)

<!-- /TOC -->
<!-- /TOC -->
## Command Line Basics

| Command               | Example                                              | Description                                       |
|-----------------------|------------------------------------------------------|---------------------------------------------------|
| Access MySQL          | `mysql -u root -p`                                  | Log in to MySQL as the root user.                |
| Switch Database       | `USE database_name;`                                | Change the active database.                      |
| List Databases        | `SHOW DATABASES;`                                   | List all available databases.                    |
| Create Database       | `CREATE DATABASE database_name;`                    | Create a new database.                           |
| Delete Database       | `DROP DATABASE database_name;`                      | Delete a database (use with caution).            |
| Create Table          | `CREATE TABLE table_name (`<br> `   column1 datatype,`<br> `   column2 datatype,`<br> `   ...`<br> `);` | Create a new table.                    |
| Describe Table        | `DESCRIBE table_name;` or `DESC table_name;`        | View the table's structure.                      |
| Insert Data           | `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);` | Add data to a table.           |
| Select Data           | `SELECT * FROM table_name;`                         | Retrieve data from a table.                     |
| Update Data           | `UPDATE table_name SET column1 = new_value WHERE condition;` | Modify existing data in a table.        |
| Delete Data           | `DELETE FROM table_name WHERE condition;`           | Remove data from a table.                       |
| Add Primary Key       | `ALTER TABLE table_name ADD PRIMARY KEY (column_name);` | Define a primary key for a table.   |
| Change field/column name                   | `ALTER TABLE table_name RENAME COLUMN `field` TO `new_field`;`                                                           | Renames a field in a table. |
| Search by field                  | `SELECT * FROM `user` WHERE `email` LIKE 'esalling23@gmail.com'`;`                                                           | Searches a table `user` to find items where the `email` field contains the string `'esalling23@gmail.com'` |

----

## Managing Users

| Command                           | Example                                                                      | Description                                       |
|-----------------------------------|------------------------------------------------------------------------------|---------------------------------------------------|
| Create User                        | `CREATE USER 'username'@'hostname' IDENTIFIED BY 'password';`              | Create a new database user.                      |
| Change Password                    | `ALTER USER 'username'@'hostname' IDENTIFIED BY 'new_password';`            | Change the password for an existing user.        |
| Delete User                        | `DROP USER 'username'@'hostname';`                                          | Delete a database user.                          |
| List Users                         | `SELECT User, Host FROM mysql.user;`                                       | List all MySQL users.                            |
| Grant Privileges                   | `GRANT permission1, permission2 ON database_name.table_name TO 'username'@'hostname';` | Grant specific privileges to a user on a database or table. |
| Grant All Privileges                   | `GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';` | Grant all privileges to a user on a database or table. |
| Revoke Privileges                  | `REVOKE permission1, permission2 ON database_name.table_name FROM 'username'@'hostname';` | Revoke specific privileges from a user on a database or table. |
| Show User Privileges               | `SHOW GRANTS FOR 'username'@'hostname';`                                    | Display the privileges assigned to a user.       |
| Flush Privileges                   | `FLUSH PRIVILEGES;`                                                           | Reload the privilege tables for changes to take effect. |


### Reset Root Password

```sh
$ mysql -u someuser
mysql> UPDATE mysql.user SET authentication_string=null WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> exit;

$ mysql -u root
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'yourpasswd';
```
