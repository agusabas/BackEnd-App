from django.urls import re_path
from MaquinasApp import views


urlpatterns=[
    re_path(r'^machine$',views.MachineApi),
    re_path(r'^machine/([0-9]+)$',views.MachineApi)
]