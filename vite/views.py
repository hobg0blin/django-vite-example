from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, "vite/index.html")


def htmx(request):
    return HttpResponse("HTMX works!")