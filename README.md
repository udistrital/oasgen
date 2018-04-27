# OASGEN

Este proyecto permite generar aplicaciones Restful mediante la definicion de un modelo de datos


### Instalacion

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

echo "Uso oasgen: "
echo "oasgen init <proyecto> : Generar un proyecto"
echo "oasgen reset / turnoff : Reset de la herramienta"
echo "oasgen status: Consulta el estado del generador"
echo "oasgen generate <nombre_proyecto> : Generar CRUD basado en archivo .ent"
echo "oasgen copy  : Copiar los archivos generados al ambiente de desarrollo"
echo "oasgen up : Inicializar el ambiente de desarrollo"
echo "oasgen down : Detener ambiente de desarrollo"
echo "oasgen check : Verificar requirimientos minimos del sistema"
echo "oasgen logs : Ver los logs del ambiente de desarrollo"

Esto generará una carpeta con el nombre srcgen donde se encuentra el código fuente listo para su aplicación tanto
backend como frontend.
