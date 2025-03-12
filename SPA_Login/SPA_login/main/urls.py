from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("login/", views.login_api, name='login'),
    path("logout/", views.logout_api, name='logout')
]