from django.urls import path
from .views import *
from site_app.views import *

urlpatterns = [
    path('', index_eng, name="eng_home"),
    # path('', commingsoon, name="commingsoon"),
]

handler404 = handler404