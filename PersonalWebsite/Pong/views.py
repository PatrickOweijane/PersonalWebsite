from django.shortcuts import render
from pathlib import Path

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'pong/index.html')
