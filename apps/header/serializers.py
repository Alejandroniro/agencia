from rest_framework import serializers
from .models import *

class HeaderSerializer(serializers.ModelSerializer):

    class Meta:
        model=Header
        fields=[
            'id',
            'name',
            'slug',
        ]