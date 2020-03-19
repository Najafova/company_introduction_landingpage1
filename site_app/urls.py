from django.urls import path
from .views import *



urlpatterns = [
    path('aze/', index, name="aze_home"),
    path('', commingsoon, name="commingsoon"),
]

handler404 = handler404