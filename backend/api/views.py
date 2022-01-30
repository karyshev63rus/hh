from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import NotesSerializer, CategorySerializer
from .models import Note, Category
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS


class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated|ReadOnly]
    queryset = Note.objects.all()
    serializer_class = NotesSerializer
    lookup_field = 'slug'
    filter_fields = ['author', 'category']


class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
