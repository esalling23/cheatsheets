# PostgreSQL

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
| `GRANT` | `GRANT [option...] privilege(s) ON table_name TO user_name` | `GRANT SELECT ON mytable TO myuser` | Grants the specified privilege(s) on a specified table to a specified user. |
| `REVOKE` | `REVOKE [option...] privilege(s) ON table_name FROM user_name` | `REVOKE SELECT ON mytable FROM myuser` | Revokes the specified privilege(s) on a specified table from a specified user. |
| `ALTER TABLE` | `ALTER TABLE table_name [action]` | `ALTER TABLE mytable ADD COLUMN mycolumn TEXT` | Modifies the structure of a table by performing an action such as adding a column. |
| `SELECT` | `SELECT [column_name(s)] FROM table_name [WHERE condition]` | `SELECT name, age FROM mytable WHERE age > 18` | Retrieves data from a specified table based on specified conditions. |
| `INSERT` | `INSERT INTO table_name (column_name(s)) VALUES (value(s))` | `INSERT INTO mytable (name, age) VALUES ('John', 25)` | Inserts new data into a specified table. |
| `UPDATE` | `UPDATE table_name SET column_name = value [WHERE condition]` | `UPDATE mytable SET age = 26 WHERE name = 'John'` | Modifies existing data in a specified table based on specified conditions. |
| `DELETE` | `DELETE FROM table_name [WHERE condition]` | `DELETE FROM mytable WHERE name = 'John'` | Deletes data from a specified table based on specified conditions. |
