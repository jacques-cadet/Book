# Book #
Book is an simple appointment/event management application 
This app is being maintained by Jacques Cadet.

## Requirements ##
- Python 3.5+
- Django 2.0.2 - Base web framework
- dj-database-url 0.4.2 - Parse database connections from 12-factor style URLs 
- python-dotenv 0.7.1 - Parse environment variables from .env files
- django-crispy-forms 1.7.0 - Adds bootstrap input styling to forms.
- djangorestframework 3.7.7
- django-filter 1.1.0
- certifi 2018.1.18
- chardet 3.0.4
- click 6.7
- coreapi 2.3.3
- coreschema 0.0.4
- pytz 2018.3
- requests 2.18.4
- uritemplate 3.0.0
- urllib3 1.23
- idna 2.6
- itypes 1.1.0
- Jinja2 2.10
- Markdown 2.6.11
- MarkupSafe 1.0

NOTE: Book is designed to be used on any platform
supporting [12 Factor Apps](https://12factor.net/).

## Usage ##
- Clone or download the repo.
- Create virtualenv.
- Use `pip install -r requirements.txt` to install requirements in requirements.txt.
- Create a .env file from the example.env file in source directory 
of the project.
- Edit your .env file to include your own environment values for secret keys,
database urls, etc.
- Run `python manage.py migrate` to run all database migrations.
- Run `python manage.py createsuperuser` to create an admin user.
- Run `python manage.py runserver --noinput` for a development environment,
or use the [Django documentation](
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/) to set up a
WSGI-compliant webserver of your choice.


