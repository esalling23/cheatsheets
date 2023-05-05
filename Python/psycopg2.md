# psycopg2

Psycopg2 is a popular PostgreSQL adapter for the Python programming language. It allows Python programs to connect to PostgreSQL databases and execute SQL queries.

## Installation

You can install `psycopg2` using pip:

```sh
pip install psycopg2
```

## Basic Usage

To connect to a PostgreSQL database, you first need to create a `Connection` object:

```py
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    dbname="mydatabase",
    user="myusername",
    password="mypassword"
)
```

Once you have a Connection object, you can create a Cursor object to execute SQL queries:

```py
cur = conn.cursor()
cur.execute("SELECT * FROM mytable")
rows = cur.fetchall()
```

### With Django

Within Django, provide psycopg2 as the engine for your database configuration. 

```py
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    ...
  }
}
```

## Table of Common psycopg2 Commands

| Command | Description | Usage Example | Notes |
| --- | --- | --- | --- |
| `psycopg2.connect()` | Connect to a PostgreSQL database | `psycopg2.connect(host="localhost", port=5432, dbname="mydatabase", user="myusername", password="mypassword")` | Returns a `Connection` object |
| `Connection.cursor()` | Create a `Cursor` object | `cur = conn.cursor()` | Returns a `Cursor` object |
| `Cursor.execute()` | Execute an SQL query | `cur.execute("SELECT * FROM mytable")` | Returns `None` |
| `Cursor.fetchall()` | Fetch all rows from the result set | `rows = cur.fetchall()` | Returns a list of tuples |

## psycopg2-binary

Depending on your OS, you may need to install the binary version of the package. 

Install globally with `pip3 install psycopg2-binary` before installing dependencies. 

Note: `psycopg2-binary` is not recommended for use in production environments as it includes pre-built binaries that may not be compatible with all systems.


