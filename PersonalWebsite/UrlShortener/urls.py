from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='urlShortener'),
    path('create', views.create, name='create'),
    path('<str:uid>', views.go, name='redirect')
]
