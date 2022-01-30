from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import NoteViewSet, CategoryListView


router = SimpleRouter()
router.register('', NoteViewSet)

urlpatterns = [
    path('category/', CategoryListView.as_view(), name='categories'),
]

urlpatterns += router.urls
