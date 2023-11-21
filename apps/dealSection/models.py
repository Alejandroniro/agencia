from django.db import models

# Create your models here.

def DealSection_directory(instance,filename):
    return 'dealSection/{0}/{1}'.format(instance.title, filename)
class DealSection(models.Model):
    class Meta:
        verbose_name = 'dealSection'
        verbose_name_plural = 'dealSections'

    title = models.CharField(max_length=255, unique=True)
    image_url = models.ImageField(upload_to=DealSection_directory)
    country = models.CharField(max_length=255)
    price = models.IntegerField(default=0)
    discount = models.IntegerField(default=0)
    rate = models.CharField(max_length=255)


    def __str__(self):
        return self.title
