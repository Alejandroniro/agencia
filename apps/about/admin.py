from django.contrib import admin
from .models import *

# Register your models here.
class AboutAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    list_display_links = ('name',)
    list_per_page = 25
    
admin.site.register(About, AboutAdmin)