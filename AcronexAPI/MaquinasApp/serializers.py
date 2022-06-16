from dataclasses import fields
from rest_framework import serializers
from MaquinasApp.models import Machines

class MachinesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Machines
        fields=('MachineId','MachineName','MachineClass','MachineCompany','MachineState')