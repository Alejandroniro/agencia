from rest_framework import serializers
from .models import *

class CTASerializer(serializers.ModelSerializer):

    class Meta:
        model=CTA
        fields=[
            'id',
            'name',
            'slug',
        ]