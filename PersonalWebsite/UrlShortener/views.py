from django.shortcuts import render, redirect
from .models import Url

import uuid
import re


ROOT_URL = 'r/'

# Create your views here.
def index(request, root_url=ROOT_URL):
    if request.method == 'GET':
        return render(request, 'urlShortener/index.html')
    elif request.method == 'POST':
        input_url = request.POST.get('input-url')
        print(input_url)

        uid = str(uuid.uuid4())[:5]
        new_url = Url(link=input_url, uuid=uid)
        new_url.save()

        context = {
            'uid': uid,
            'root_url': root_url,
        }
        return render(request, 'urlShortener/index.html', context)


def go(request, uid):
    link = Url.objects.get(uuid=uid).link
    if re.findall('//', link):
        return redirect(link)
    return redirect(f'//{link}')
