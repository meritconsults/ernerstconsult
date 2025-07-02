from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Form
from .serializers import FormSerializer
from django.shortcuts import get_object_or_404

# POST new form data / GET all forms
class FormListCreateView(APIView):
    def get(self, request):
        forms = Form.objects.all()
        serializer = FormSerializer(forms, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# GET single form / PUT update / DELETE
class FormDetailView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Form, pk=pk)

    def get(self, request, pk):
        form = self.get_object(pk)
        serializer = FormSerializer(form)
        return Response(serializer.data)

    def put(self, request, pk):
        form = self.get_object(pk)
        serializer = FormSerializer(form, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        form = self.get_object(pk)
        form.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
