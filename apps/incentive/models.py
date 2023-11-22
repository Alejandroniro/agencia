from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

def Incentive_directory(instance,filename):
    return 'incentive/{0}/{1}'.format(instance.name, filename)

class Incentive(models.Model):
    class Meta:
        verbose_name = 'incentive'
        verbose_name_plural = 'incentives'

    name = models.CharField(max_length=255)
    image_url = models.ImageField(upload_to=Incentive_directory,max_length=1000)
    description = RichTextField()

    def __str__(self):
        return self.name
