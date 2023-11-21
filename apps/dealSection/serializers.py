from rest_framework import serializers
from .models import *

class DealSectionSerializer(serializers.ModelSerializer):

    class Meta:
        model=DealSection
        fields=[
            'id',
            'title',
            'image_url',
            'country',
            'price',
            'discount',
            'rate',
        ]
