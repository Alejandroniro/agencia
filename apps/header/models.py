from django.db import models

# Create your models here.
class Header(models.Model):
    class Meta:
        verbose_name = 'header'
        verbose_name_plural = 'headers'

    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


