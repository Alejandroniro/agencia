from django.db import models

# Create your models here.
class CTA(models.Model):
    class Meta:
        verbose_name = 'cta'
        verbose_name_plural = 'ctas'

    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


