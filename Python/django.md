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

## Django Command Line Tools

We'll use the included `django-admin` tool to generate projects & apps with some base functionality. After that, it's all up to you. 

> `django-admin` is Django’s command-line utility for administrative tasks
> - [the docs](https://docs.djangoproject.com/en/4.2/ref/django-admin/)

Some example commands to generate projects & apps: 
```sh
django-admin startproject django_project
django-admin startapp django_app
```

### `manage.py`

> In addition, `manage.py` is automatically created in each Django project. It does the same thing as `django-admin` but also sets the `DJANGO_SETTINGS_MODULE` environment variable so that it points to your project’s `settings.py` file.
> - [also the docs](https://docs.djangoproject.com/en/4.2/ref/django-admin/)


All of the following commands can be run using `manage.py` OR `django-admin`

```sh
python manage.py startapp myapp
django-admin startapp myapp
```

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

# Django Rest Framework Components

## Models
- Define your data models using Django's `models.Model` class.
- These models represent your database tables and the data you want to work with.

Example:
```python
from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
```

### Model/Class Inheritance

There are three main types of model inheritance:

#### Abstract Base Class (ABCs)

Classes can be marked as `abstract` within their `Meta` class to be used as abstract classes. In Django, an abstract class will not have a database table created. This allows for code organization by allowing base classes to be used across models w/o additional tables in the database. 

Example: 

```py
class BaseModel(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	class Meta:
		abstract = True # no database table for this class

# This class will have a table created by Django in the database
class MyTableModel(BaseModel):
	# will include created_at & updated_at fields through inheritance
	text = models.CharField(max_length=300)
```

#### Multi-Table Inheritance (Concrete Inheritance)

Multi-table aka concrete inheritance involves table models inheriting from one another. 

Each model will have a table in the database, and the child model will inherit fields/methods as usual. 
In Django the child & parent tables will also be related through a 1-to-1 relation. 

```py
class ParentModel(models.Model):
	text = models.CharField(max_length=100)

class ChildModel(ParentModel):
	# will also have `text` field from ParentModel
	# will include a 1-to-1 relationship w/ ParentModel
	more_text = models.CharField(max_length=400)
```

##### Considerations

Multi-table inheritance may be considered a poor practice due to the amount of left-joins required to access the created one-to-one relationship. 

[Full discussion](https://stackoverflow.com/questions/23466577/should-i-avoid-multi-table-concrete-inheritance-in-django-by-any-means)

## Serializers

- Serializers allow you to convert complex data types, such as Django model instances, into JSON data.
- They also provide deserialization, allowing parsed data to be converted back into complex types after validation.

```py
from rest_framework import serializers

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

```

## Views

- Views in DRF are similar to Django views but designed specifically for handling API requests.
- They define how data should be presented in the API.

```py
from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

```

### Django Rest Framework View Classes and Use Cases
| View Class                | Use Case                                                                               |
|---------------------------|----------------------------------------------------------------------------------------|
| **APIView**               | The base class for all DRF views. Allows custom views with complete control.           |
| **GenericAPIView**        | Base class for CRUD operations on a model. Combines with mixins for specific behaviors. |
| **ListAPIView**           | Provides a read-only view to list multiple instances of a model.                        |
| **RetrieveAPIView**       | Provides a read-only view to retrieve a single instance by primary key.                 |
| **CreateAPIView**         | Handles the creation of new model instances.                                            |
| **UpdateAPIView**         | Handles updating a single model instance.                                               |
| **DestroyAPIView**        | Handles the deletion of a single model instance.                                        |
| **ListModelMixin**        | A mixin class that adds list functionality to a view.                                   |
| **CreateModelMixin**      | A mixin class that adds create functionality to a view.                                 |
| **UpdateModelMixin**      | A mixin class that adds update functionality to a view.                                 |
| **DestroyModelMixin**     | A mixin class that adds delete functionality to a view.                                 |
| **ReadOnlyModelViewSet**  | A viewset providing read-only actions for a model.                                       |
| **ModelViewSet**          | Provides the complete set of CRUD operations for a model.                               |
| **ReadOnlyViewSet**       | A viewset providing read-only actions for a model.                                       |
| **ViewSet**               | The base class for creating custom viewsets.                                            |


## URLs

- Define URL patterns for your API views using the `urls.py` file. 
- Map URLs to views to specify which view should handle each API endpoint.

```py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)

# Define a list "urlpatterns" for Django to read
urlpatterns = [
    path('', include(router.urls)),
]

```

> Note: In the URL pattern `r'items'`, the `r` before the string `'items'` indicates that the string should be treated as a raw string. In Python, a raw string is a string that is interpreted literally, without any escape sequences.