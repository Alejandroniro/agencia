from django.contrib import admin
from .models import *

# Register your models here.
class VacationPlanAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'country', 'price', 'rate', 'days',)
    list_display_links = ('title',)
    list_per_page = 25

admin.site.register(VacationPlan, VacationPlanAdmin)
