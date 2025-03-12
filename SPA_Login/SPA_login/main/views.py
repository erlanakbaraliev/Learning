from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect , JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request, "main/index.html")

def login_api(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return JsonResponse({"success": True, "message": "Login successful", "username": user.username})
        else:
            return JsonResponse({"success": False, "message": "Invalid credentials"}, status=400)
    
    return JsonResponse({"error": "Invalid request"}, status=400)

def logout_api(request):
    logout(request)
    return JsonResponse({"success": True, "message": "Logged out"})