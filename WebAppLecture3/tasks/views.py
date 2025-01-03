from django.shortcuts import render
from django import forms
from django.http import HttpResponseRedirect
from django.urls import reverse
from lecture3.settings import TEMPLATE_PATHS

class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    priority = forms.IntegerField(label="Priority", min_value=0, max_value=100)

def index(request):
    if "tasks" not in request.session:
        request.session["tasks"] = []

    return render(request, TEMPLATE_PATHS["TASKS_INDEXPAGE"], {
        "tasks": request.session["tasks"]
    })

def add(request):
    if request.method == "POST":
        form = NewTaskForm(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task"]
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request, TEMPLATE_PATHS["TASKS_ADDPAGE"], {
                "inputForm": form
            })
        
    return render(request, TEMPLATE_PATHS["TASKS_ADDPAGE"], {
        "inputForm": NewTaskForm()
    })