from django.db import models
from users.models import CustomUser


class Note(models.Model):
    title = models.CharField(max_length=240)
    text = models.TextField(blank=True)
    author = models.ForeignKey(CustomUser, related_name='author', 
                                        on_delete=models.CASCADE)
    category = models.ForeignKey('Category', related_name='category',
                                on_delete=models.PROTECT, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='news/', blank=True)
    slug = models.SlugField(max_length=240, unique=True)
    url = models.URLField(max_length=240, blank=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=64, db_index=True)
    slug = models.SlugField(max_length=240, unique=True, null=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title
