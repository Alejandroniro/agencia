from rest_framework import serializers
from .models import *

class AboutSerializer(serializers.ModelSerializer):

    class Meta:
        model=About
        fields=[
            'id',
            'name',
            'image_url',
            'comment',
            'location',
        ]