# BackEnd-App Api Django ACRONEX
Seguir los pasos para ejecutar el servidor
## Instalación de Python 
https://www.python.org/downloads/
## Inslación de NodeJs
https://nodejs.org/en/download/current/
## Abrir ventana de comandos en AcronexApi
<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > cd AcronexApi
    

<!--endsec-->
<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > pip install django
    

<!--endsec-->
<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > pip install djangorestframework
    

<!--endsec-->
<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > pip install django-cors-headers
    

<!--endsec-->

## Ejecución
<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > python Manage.py runserver
    

<!--endsec-->
## Probar el servicio GET para obtener todos las Máquinas registradas
- Selecciona el método a probar, en este caso probaremos el GET
- Teclea la URL a probar http://127.0.0.1:8000/machine​
- Da clic en el botón SEND

![screenshot](https://github.com/agusabas/BackEnd-App/blob/62b5b3e65bb3c07487eebc11a2a276dee90fbb76/machines%202.PNG)

## Probar el servicio POST
- Seleccionar el método POST
- Teclear la URL http://127.0.0.1:8000/machine​
- Seleccionar la pestaña Body
- Seleccionar la opción raw
- Seleccionar el tipo JSON (application/json)
- Copiar el JSON que obtuvimos en el GET. No es necesario agregar un "id".
- Dar clic en el botón Send.

![imagen POST](https://github.com/agusabas/BackEnd-App/blob/e217ddc91366f3a16dea8c9bbbe42765711fdadf/post.PNG)

## Probar el servicio PUT para modificar el estado una Máquina
- Selecciona el método a probar, en este caso probaremos el PUT
- Teclea la URL a probar http://127.0.0.1:8000/machine​
- Modificar el estado "MachineState" a false/true.
- Da clic en el botón SEND
![Imagen PUT](https://github.com/agusabas/BackEnd-App/blob/d5be39a8ef15c3a3d4604305fe39f8929d16fed7/PUT.PNG)


# Yapa! Interfaz UI
Interfaz en React Js para probar Funciones GET, POST, PUT, DELETE.
<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > cd ui
    

<!--endsec-->
# Instalacion (NodeJs v18 Requerida!)

1- Instalar NodeJs -> https://nodejs.org/es/download/current/  
- **Importante:Última versión requerida** (nótese "current" (ultima version) en la dirección).

## Lanzar servidor local

<!--sec data-title="Comandos" data-id="OSX_Linux_whoami" data-collapse=true ces-->


    > npm start
    

<!--endsec-->
![screenshot](machines.PNG)
