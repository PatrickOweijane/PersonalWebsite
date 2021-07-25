from django.shortcuts import render, redirect
from .models import Url
from django.http import HttpResponse

import uuid
import re
import json


ROOT_URL = 'r/'

# Create your views here.
def index(request, root_url=ROOT_URL):
    if request.method == 'GET':
        return render(request, 'urlShortener/index.html')

def create(request, root_url=ROOT_URL):
    print('#'*100)
    if request.method == 'POST':
        print(request.POST)
        input_url = request.POST.get('inputUrl')
        print(input_url)

        uid = str(uuid.uuid4())[:5]
        new_url = Url(link=input_url, uuid=uid)
        new_url.save()

        context = {
            'uid': uid,
            'root_url': root_url,
        }
        return HttpResponse(json.dumps(context))


def go(request, uid):
    link = Url.objects.get(uuid=uid).link
    if re.findall('//', link):
        return redirect(link)
    return redirect(f'//{link}')
