from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='urlShortener'),
    path('<str:uid>', views.go, name='redirect')
]
