import imp
from platform import machine
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from MaquinasApp.models import Machines
from MaquinasApp.serializers import MachinesSerializer

# Create your views here.

@csrf_exempt
def MachineApi(request,id=0):
    if request.method=='GET':
        machines = Machines.objects.all()
        machines_serializer = MachinesSerializer(machines,many=True)
        return JsonResponse(machines_serializer.data,safe=False)
    elif request.method=='POST':
        machine_data=JSONParser().parse(request)
        machines_serializer=MachinesSerializer(data=machine_data)
        if machines_serializer.is_valid():
            machines_serializer.save()
            return JsonResponse("Maquina añadida correctamente",safe=False)
        return JsonResponse("Error al añadir",safe=False)
    elif request.method=='PUT':
        machine_data=JSONParser().parse(request)
        machine=Machines.objects.get(MachineId=machine_data['MachineId'])
        machines_serializer=MachinesSerializer(machine,data=machine_data)
        if machines_serializer.is_valid():
            machines_serializer.save()
            return JsonResponse("Actualizada correctamente",safe=False)
        return JsonResponse("Error en la actualización")
    elif request.method=='DELETE':
        machine=Machines.objects.get(MachineId=id)
        machine.delete()
        return JsonResponse("Maquina eliminada Correctamente",safe=False)

