from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("erlan", views.erlan, name="erlan"),
    path("<str:name>", views.greet, name="greet")
]