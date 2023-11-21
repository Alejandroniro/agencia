from django.contrib import admin
from .models import *

# Register your models here.
class DealSectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'country', 'price', 'discount', 'rate',)
    list_display_links = ('title',)
    list_per_page = 25

admin.site.register(DealSection, DealSectionAdmin)
