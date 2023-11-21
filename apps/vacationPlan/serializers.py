from rest_framework import serializers
from .models import *

class VacationPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model=VacationPlan
        fields=[
            'id',
            'title',
            'image_url',
            'country',
            'price',
            'days',
            'rate',
        ]