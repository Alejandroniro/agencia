# Generated by Django 4.2.7 on 2023-11-20 22:06

import apps.vacationPlan.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacationPlan', '0003_auto_20231120_1447'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacationplan',
            name='image_url',
            field=models.ImageField(upload_to=apps.vacationPlan.models.vacationPlan_directory),
        ),
    ]