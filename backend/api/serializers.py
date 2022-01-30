from rest_framework import serializers
from .models import Note, Category


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = [
            'id',
            'title',
            'text', 
            'author',
            'category',
            'created_at',
            'image',
            'slug', 
            'url', 
        ]
        lookup_field = 'slug'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'slug'
        ]
