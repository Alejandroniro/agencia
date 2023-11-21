from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListDealSectionsView.as_view())
]