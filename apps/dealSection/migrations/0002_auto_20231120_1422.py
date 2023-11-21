# Generated by Django 3.2.16 on 2023-11-20 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dealSection', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dealsection',
            old_name='name',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='dealsection',
            name='parent',
        ),
        migrations.RemoveField(
            model_name='dealsection',
            name='slug',
        ),
        migrations.AddField(
            model_name='dealsection',
            name='country',
            field=models.CharField(default='Venezuela', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='dealsection',
            name='discount',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='dealsection',
            name='price',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='dealsection',
            name='rate',
            field=models.CharField(default=0, max_length=255),
            preserve_default=False,
        ),
    ]