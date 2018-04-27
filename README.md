# OASGEN

Este proyecto permite generar aplicaciones Restful mediante la definicion de un modelo de datos


### Instalación

Con permisos de administrador ejecute:

```
git clone https://tuleap.udistrital.edu.co/plugins/git/perseo/oasgen.git /opt/oasgen
```

Edite el archivo de bootstrap en /opt/oasgen/bootstrap

```export OASGEN_PATH=/opt/oasgen```


Modifique su archivo de .bashrc y agregue la siguiente linea:

```
#OASGEN Tool
source /opt/oasgen/bootstrap
```

### Uso

Con esto tendrá disponible el generador el cual podrá ejecutar como:

oasgen generate <archivo_entidad.ent>

Uso oasgen:
oasgen init <proyecto> : Generar un proyecto
oasgen reset / turnoff : Reset de la herramienta
oasgen status: Consulta el estado del generador
oasgen generate <nombre_proyecto> : Generar CRUD basado en archivo .ent
oasgen copy  : Copiar los archivos generados al ambiente de desarrollo
oasgen up : Inicializar el ambiente de desarrollo
oasgen down : Detener ambiente de desarrollo
oasgen check : Verificar requirimientos minimos del sistema
oasgen logs : Ver los logs del ambiente de desarrollo
