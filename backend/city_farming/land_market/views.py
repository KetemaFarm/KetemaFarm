from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Land
from .serializers import LandSerializer

class LandViewSet(viewsets.ModelViewSet):
    queryset = Land.objects.all()
    serializer_class = LandSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
