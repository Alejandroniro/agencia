from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/about/', include('apps.about.urls')),
    path('api/blog/', include('apps.blog.urls')),
    path('api/cta/', include('apps.cta.urls')),
    path('api/dealSection/', include('apps.dealSection.urls')),
    path('api/header/', include('apps.header.urls')),
    path('api/vacationPlan/', include('apps.vacationPlan.urls')),
    path('api/incentive/', include('apps.incentive.urls')),

    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]