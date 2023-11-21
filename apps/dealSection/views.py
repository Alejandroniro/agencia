from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import DealSection
from .serializers import DealSectionSerializer


class ListDealSectionsView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        try:
            dealSections = DealSection.objects.all()
            serializer = DealSectionSerializer(dealSections, many=True)
            return Response({"dealSections": serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
