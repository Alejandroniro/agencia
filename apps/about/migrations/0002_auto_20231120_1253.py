# Generated by Django 3.2.16 on 2023-11-20 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='comment',
            field=models.CharField(default='', max_length=255, unique=True),
        ),
        migrations.AddField(
            model_name='about',
            name='location',
            field=models.CharField(default='', max_length=255, unique=True),
        ),
    ]
