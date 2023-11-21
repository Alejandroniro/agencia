from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import CTA

class ListCTAsView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        if CTA.objects.all().exists():
            return
        else:
            return Response({'error': 'No items found'}, status=status.HTTP_404_NOT_FOUND)