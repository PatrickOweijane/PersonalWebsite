from django.shortcuts import render, redirect
from pathlib import Path

# Create your views here.
def room(request, room_name):
    return redirect('lobby')
    print(request, room_name)
    return render(request, 'pong/room.html', {
        'room_name': room_name
    })


def lobby(request, *args, **kwargs):
    print(request, args, kwargs)
    if request.method == 'POST':
        print(request.POST)
    return render(request, 'pong/lobby.html')
