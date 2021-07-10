from django.shortcuts import render
from pathlib import Path

# Create your views here.
def me(request, *args, **kwargs):
    return render(request, 'portfolio/me.html')
