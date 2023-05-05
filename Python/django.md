# Django

The general Django stack that this documentation will reference: 

- `python` v3.9
- `pip` and `pipenv` for package management
- `psycopg2` and `postgresql` for database storage
- `django` for server development

## Structure of Django Project

Django uses "apps" and "projects" - a project contains at least one app, and apps can be reused and shared across projects with proper setup. 

- `project-name/`: folder for the "project"
  - `asgi.py`
  - `settings.py`: project settings
  - `urls.py`: project urls (includes each app's urls)
  - `wsgi.py`
- `app-name/`: folder of an "app"
  - `migrations/`: where all database migration files live
  - `templates/`: optional folder for view templates
  - `admin.py`: settings for this app in the admin view
  - `apps.py`: app details, including reference name
  - `models.py`: database models are defined
  - `serializers.py`: serializers handle displaying/formatting data for use in views
  - `urls.py`: where path+view mappings are defined
  - `views.py`: where all the endpoint logic lives
- `manage.py`: main executable for running the server, other tasks
- `Pipfile`: Defines dependencies
- `Pipfile.lock`: Locked dependencies & versions

`manage.py` is the file we'll run when it's time to perform tasks such as interact with the database or run the server. 

### Common Commands for `manage.py`

| Command | Description | Usage Example |
| --- | --- | --- |
| `runserver` | Starts the development server | `python manage.py runserver` |
| `makemigrations` | Generates new database migration files based on changes to your models | `python manage.py makemigrations` |
| `migrate` | Applies database migrations to the database | `python manage.py migrate` |
| `createsuperuser` | Creates a new superuser account | `python manage.py createsuperuser` |
| `collectstatic` | Collects all static files into a single directory for deployment | `python manage.py collectstatic` |
| `test` | Runs tests for your Django application | `python manage.py test` |
| `shell` | Starts a Python shell with Django environment loaded | `python manage.py shell` |
| `startapp` | Creates a new Django application with the given name | `python manage.py startapp myapp` |
| `runscript` | Runs a custom Python script as a Django management command | `python manage.py runscript myscript` |
| `flush` | Deletes all data from the database | `python manage.py flush` |

### ASGI and WSGI

In Django, `asgi.py` and `wsgi.py` are entry points for serving your application using different web servers.

`wsgi.py` stands for Web Server Gateway Interface and is used for serving Django applications with traditional web servers like Apache or Nginx. WSGI is a standard interface between web servers and Python applications that defines how web servers should communicate with Python applications. When you run `python manage.py runserver`, Django starts a WSGI server (by default, the one provided by the `django.core.servers` module) to serve your application.

On the other hand, `asgi.py` stands for Asynchronous Server Gateway Interface and is used for serving Django applications with asynchronous web servers like Daphne or Uvicorn. ASGI is a standard interface between asynchronous web servers and Python applications that allows for asynchronous processing of requests and responses. ASGI is designed to work with web servers that support HTTP/2 and WebSocket protocols. When you run an ASGI server, Django can use an ASGI application to serve your application.

In short, the main difference between `asgi.py` and `wsgi.py` is the type of server that they serve your Django application with. WSGI is a synchronous interface and is used with traditional web servers, while ASGI is an asynchronous interface and is used with asynchronous web servers.

