from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListBlogsView.as_view())
]