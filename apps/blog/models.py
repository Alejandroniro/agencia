from django.db import models
from django.utils import timezone

# Create your models here.

def Blog_directory(instance,filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Blog(models.Model):
    class Meta:
        verbose_name = 'blog'
        verbose_name_plural = 'blogs'

    title = models.CharField(max_length=255)
    date = models.DateField(default=timezone.now, editable=False)
    image_url = models.ImageField(upload_to=Blog_directory)


    def __str__(self):
        return self.title


