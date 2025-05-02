from django.urls import path
from .views import RegisterAPI, LoginAPI, LogoutAPI

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    # path('verify-otp/', VerifyOTPAPI.as_view(), name='verify-otp'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', LogoutAPI.as_view(), name='logout'),
    
]