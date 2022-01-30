from django.contrib import admin
from .models import Note, Category


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = [
                    'title',
                    'author',
                    'image',
                    'created_at',
                    'updated_at',
                    'slug',
                    'url',
    ]
    list_filter = ['author']
    search_fields = ['title']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = [
        'title',
        'slug',
    ]
    list_filter = ['title']
    search_fields = ['title']
