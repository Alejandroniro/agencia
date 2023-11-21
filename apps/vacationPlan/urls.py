from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListVacationPlansView.as_view())
]