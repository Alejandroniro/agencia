# Generated by Django 4.2.7 on 2023-11-21 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('incentive', '0002_alter_incentive_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incentive',
            name='description',
            field=models.CharField(max_length=255),
        ),
    ]
