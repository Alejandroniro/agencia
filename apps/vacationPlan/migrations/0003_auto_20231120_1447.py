# Generated by Django 3.2.16 on 2023-11-20 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacationPlan', '0002_auto_20231120_1443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacationplan',
            name='days',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=5),
        ),
        migrations.AlterField(
            model_name='vacationplan',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='vacationplan',
            name='rate',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=3),
        ),
    ]