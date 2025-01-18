from django.shortcuts import render
from django.http import HttpResponse, Http404

# Create your views here.
def index(request):
    return render(request, "singlepage1/index.html")

texts = ["Text1", "Text2", "Text3"]
def section(request, pagenum):
    if(1 <= pagenum <=3):
        return HttpResponse(texts[pagenum-1])
    else:
        raise Http404(f"{pagenum} not found")