from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListAboutsView.as_view())
]