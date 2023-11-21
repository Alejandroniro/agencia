from django.db import models


# Create your models here.
def vacationPlan_directory(instance,filename):
    return 'vacationPlan/{0}/{1}'.format(instance.title, filename)

class VacationPlan(models.Model):
    class Meta:
        verbose_name = "vacationPlan"
        verbose_name_plural = "vacationPlans"

    title =         models.CharField(max_length=255)
    image_url =     models.ImageField(upload_to=vacationPlan_directory)
    country =       models.CharField(max_length=255)
    price =         models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    days =          models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    rate =          models.DecimalField(max_digits=3, decimal_places=2, default=0.00)

    def __str__(self):
        return self.title
