from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import VacationPlan
from .serializers import VacationPlanSerializer


class ListVacationPlansView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        try:
            vacationPlans = VacationPlan.objects.all()
            serializer = VacationPlanSerializer(vacationPlans, many=True)
            return Response({"vacationPlans": serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
