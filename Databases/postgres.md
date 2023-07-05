# PostgreSQL

When using postgresql commands, remember to include the `;`!
Most commands should give a response - if you don't get a response then double check your command. You may have forgotten the `;`.

Example of bad command: 
```sh
eronsalling=# CREATE DATABASE eronportfolio
eronsalling-#
```
As you can see, there's no response & the `eronsalling=#` has been changed to `eronsalling-#` which is not expected.

Good command: 
```sh
eronsalling=# CREATE DATABASE eronportfolio;
CREATE DATABASE
eronsalling=#
```

## Reset IDs

`SELECT setval('projects_project_id_seq', (SELECT MAX(id) from projects_project)+1);`

## PSQL Shell Commands

A lot of psql commands will use the `\` - note that the backslash character is used to distinguish these commands from SQL statements.

| Command Name | Usage Signature | Usage Example | Description |
| --- | --- | --- | --- |
| `\q` | `\q` | `\q` | Exits the psql command-line interface. |
| `\c` | `\c [dbname [username]]` | `\c mydatabase myuser` | Connects to a specified database with a specified user. |
| `\dt` | `\dt` | `\dt` | Lists all tables in the current database. |
| `\d table_name` | `\d table_name` | `\d mytable` | Describes the structure of a specified table. |
| `\du` | `\du` | `\du` | Lists all users in the PostgreSQL server. |
| `\l` | `\l` | `\l` | Lists all databases in the PostgreSQL server. |
| `\df` | `\df` | `\df` | Lists all functions in the current database. |
| `\timing` | `\timing` | `\timing` | Toggles timing of query execution on and off. |
| `\i file_name` | `\i file_name` | `\i myscript.sql` | Runs a SQL script file in the current database. |
| `\o file_name` | `\o file_name` | `\o myoutput.txt` | Redirects query output to a file. |
| `\e` | `\e` | `\e` | Opens an external editor to write a multi-line query. |
| `\! command` | `\! ls` | `\! ls` | Executes a shell command from within psql. |
| `\g` | `\g` | `SELECT * FROM mytable \g` | Sends a query to the server for execution. |
| `\s` | `\s` | `\s` | Displays the current psql command-line history. |

Note that the backslash character (`\`) is used to distinguish these commands from SQL statements.

## Users

https://chartio.com/resources/tutorials/how-to-change-a-user-to-superuser-in-postgresql/

## `/copy` command

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Procedural.Importing.Copy.html

```sh
$ psql

username=# \c my-db
my-db=# \copy projects_category to 'categories.csv' with csv header
COPY 9
```

## Common Commands

| Command Name | Usage Signature | Usage Example | Description |
| --- | --- | --- | --- |
| `psql` | `psql [option...] [dbname [username]]` | `psql -U myuser mydatabase` | Opens the PostgreSQL command-line interface for a specified database with a specified user. |
| `createdb` | `createdb [option...] [dbname]` | `createdb mydatabase` | Creates a new PostgreSQL database with the specified name. |
| `dropdb` | `dropdb [option...] [dbname]` | `dropdb mydatabase` | Deletes the specified PostgreSQL database. |
| `pg_dump` | `pg_dump [option...] [dbname]` | `pg_dump mydatabase > backup.sql` | Creates a backup of a PostgreSQL database to a file in SQL format. |
| `pg_restore` | `pg_restore [option...] [dbname]` | `pg_restore -d mydatabase backup.sql` | Restores a backup of a PostgreSQL database from a file in SQL format. |
| `createuser` | `createuser [option...] [username]` | `createuser myuser` | Creates a new PostgreSQL user with the specified name. |
| `dropuser` | `dropuser [option...] [username]` | `dropuser myuser` | Deletes the specified PostgreSQL user. |
| `ALTER TABLE` | `ALTER TABLE table_name [action]` | `ALTER TABLE mytable ADD COLUMN mycolumn TEXT` | Modifies the structure of a table by performing an action such as adding a column. |
| `SELECT` | `SELECT [column_name(s)] FROM table_name [WHERE condition]` | `SELECT name, age FROM mytable WHERE age > 18` | Retrieves data from a specified table based on specified conditions. |
| `INSERT` | `INSERT INTO table_name (column_name(s)) VALUES (value(s))` | `INSERT INTO mytable (name, age) VALUES ('John', 25)` | Inserts new data into a specified table. |
| `UPDATE` | `UPDATE table_name SET column_name = value [WHERE condition]` | `UPDATE mytable SET age = 26 WHERE name = 'John'` | Modifies existing data in a specified table based on specified conditions. |
| `DELETE` | `DELETE FROM table_name [WHERE condition]` | `DELETE FROM mytable WHERE name = 'John'` | Deletes data from a specified table based on specified conditions. |
| `SHOW DATABASES` | `SHOW DATABASES` | `SHOW DATABASES` | Lists all databases in the PostgreSQL server. |
| `USE` | `USE [dbname]` | `USE mydatabase` | Switches to the specified database for future operations. |
| `CREATE SCHEMA` | `CREATE SCHEMA [schema_name]` | `CREATE SCHEMA myschema` | Creates a new schema in the current database. |
| `DROP SCHEMA` | `DROP SCHEMA [schema_name] [CASCADE/RESTRICT]` | `DROP SCHEMA myschema CASCADE` | Deletes a schema and all its contents (tables, functions, etc.), optionally with CASCADE to delete dependent objects. |
| `ALTER SCHEMA` | `ALTER SCHEMA [schema_name] [RENAME TO new_name]` | `ALTER SCHEMA myschema RENAME TO mynewschema` | Renames a schema to a new name. |
| `CREATE TABLE` | `CREATE TABLE [table_name] ([column_name data_type constraints])` | `CREATE TABLE mytable (id SERIAL PRIMARY KEY, name TEXT NOT NULL)` | Creates a new table with specified columns and constraints. |
| `DROP TABLE` | `DROP TABLE [table_name] [CASCADE/RESTRICT]` | `DROP TABLE mytable CASCADE` | Deletes a table and all its contents (data, indexes, etc.), optionally with CASCADE to delete dependent objects. |
| `ALTER TABLE` | `ALTER TABLE [table_name] [action]` | `ALTER TABLE mytable ADD COLUMN email TEXT` | Modifies the structure of a table by performing an action such as adding a column. |
| `CREATE INDEX` | `CREATE INDEX [index_name] ON [table_name] ([column_name])` | `CREATE INDEX myindex ON mytable (name)` | Creates a new index on a specified column of a specified table. |
| `DROP INDEX` | `DROP INDEX [index_name]` | `DROP INDEX myindex` | Deletes a specified index. |
| `CREATE VIEW` | `CREATE VIEW [view_name] AS [SELECT statement]` | `CREATE VIEW myview AS SELECT name, age FROM mytable WHERE age > 18` | Creates a virtual table based on the result set of a SELECT statement. |
| `DROP VIEW` | `DROP VIEW [view_name]` | `DROP VIEW myview` | Deletes a specified view. |
| `GRANT` | `GRANT [option...] privilege(s) ON table_name TO user_name` | `GRANT SELECT ON mytable TO myuser` | Grants the specified privilege(s) on a specified table to a specified user. |
| `REVOKE` | `REVOKE [option...] privilege(s) ON table_name FROM user_name` | `REVOKE SELECT ON mytable FROM myuser` | Revokes the specified privilege(s) on a specified table from a specified user. |

