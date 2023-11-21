from rest_framework import serializers
from .models import *

class IncentiveSerializer(serializers.ModelSerializer):

    class Meta:
        model=Incentive
        fields=[
            'id',
            'name',
            'image_url',
            'description',
        ]