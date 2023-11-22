from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.

def About_directory(instance,filename):
    return 'about/{0}/{1}'.format(instance.name, filename)

class About(models.Model):
    class Meta:
        verbose_name = 'about'
        verbose_name_plural = 'abouts'

    name = models.CharField(max_length=255)
    image_url = models.ImageField(upload_to=About_directory,max_length=1000)
    comment = RichTextField()
    location = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.name


