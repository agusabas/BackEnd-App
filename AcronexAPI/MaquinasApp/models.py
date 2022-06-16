from django.db import models

# Create your models here.


class Machines(models.Model):
    MachineId = models.AutoField(primary_key=True)
    MachineName = models.CharField(max_length=500)
    MachineClass = models.CharField(max_length=50)
    MachineCompany = models.CharField(max_length=500)
    MachineState = models.BooleanField(default=True)
 