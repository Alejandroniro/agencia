from pathlib import Path
import os
import environ
import dj_database_url

env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DEBUG")

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS_DEV")


# Application definition

DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

PROJECT_APPS = [
    "apps.about",
    "apps.blog",
    "apps.cta",
    "apps.dealSection",
    "apps.header",
    "apps.vacationPlan",
    "apps.incentive",
]

THIRD_PARTY_APPS = ["corsheaders", "rest_framework", "ckeditor", "ckeditor_uploader"]

INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + THIRD_PARTY_APPS

# CKEditor
CKEDITOR_CONFIGS = {
    "default": {
        "toolbar": "Full",
        "autoParagraph": True,
    }
}
CKEDITOR_UPLOAD_PATH = "/media/"

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "build")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {

    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
#    'default': dj_database_url.config(
#         # Feel free to alter this value to suit your needs.
#         default='postgresql://postgres:postgres@localhost:5432/mysite',
#         conn_max_age=600
#         )

# }

# DATABASES = {"default": dj_database_url.config()}

DATABASES = {
    "default": dj_database_url.config(
        # Feel free to alter this value to suit your needs.
        default="postgresql://postgres:postgres@localhost:5432/mysite",
        conn_max_age=600,
    )
}

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = "es"
TIME_ZONE = "America/Caracas"
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT  =   os.path.join(BASE_DIR, 'build/static')
STATICFILES_DIR = [
    os.path.join(BASE_DIR,'build/static')
]


MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"


# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticatedOrReadOnly"
    ],
}
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST  = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://localhost:8080',
]
CSRF_TRUSTED_ORIGINS = env.list("CSRF_TRUSTED_ORIGINS_DEV")

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

if not DEBUG:
    ALLOWED_HOSTS = env.list("ALLOWED_HOSTS_DEPLOY")
    CORS_ORIGIN_WITHELIST = env.list("CORS_ORIGIN_WHITELIST_DEPLOY")
    CSRF_TRUSTED_ORIGINS = env.list("CSRF_TRUSTED_ORIGINS_DEPLOY")
    # Tell Django to copy statics to the `staticfiles` directory
    # in your application directory on Render.

    # Turn on WhiteNoise storage backend that takes care of compressing static files
    # and creating unique names for each version so they can safely be cached forever.
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# DATABASES = {
#     'default': dj_database_url.config(
#     default='sqlite:///' + os.path.join(BASE_DIR, 'db.sqlite3')
#     )
# }

DATABASES["default"]["ATOMIC_REQUESTS"] = True
