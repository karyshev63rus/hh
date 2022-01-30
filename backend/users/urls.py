from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from rest_framework.routers import SimpleRouter
from .views import (
                CustomTokenObtainPairView,
                CustomUserCreateAPIView,
                CustomUsersListAPIView,
                CustomUserItemAPIView,
                UpdateProfileView, 
                LogoutAndBlackListRefreshTokenForUserView,
)


urlpatterns = [
    path('token/obtain/', CustomTokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutAndBlackListRefreshTokenForUserView.as_view(), name='blacklist'),
    path('create/', CustomUserCreateAPIView.as_view(), name='create_user'),
    path('profile/', CustomUsersListAPIView.as_view(), name='get_users_list'),
    path('profile/<int:pk>/', CustomUserItemAPIView.as_view(), name='get_user'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),]
