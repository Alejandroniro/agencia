"""
WSGI config for core project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os
from django.contrib.auth.models import User
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

application = get_wsgi_application()


def create_superuser():
    users = User.objects.all()
    if not users:
        User.objects.create_superuser(
            username="root",
            email="root@root.com",
            password="claveroot",
            is_active=True,
            is_staff=True,
        )


# Llama a la función para crear el superusuario al iniciar el servidor.
create_superuser()


from django.core.management import call_command
call_command('runserver', '0.0.0.0:8000')