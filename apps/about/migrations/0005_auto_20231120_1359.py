# Generated by Django 3.2.16 on 2023-11-20 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0004_auto_20231120_1257'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='about',
            name='parent',
        ),
        migrations.RemoveField(
            model_name='about',
            name='slug',
        ),
    ]
