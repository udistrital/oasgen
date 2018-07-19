# OASGEN
OASGEN es un generador de código basado en [MDA](https://en.wikipedia.org/wiki/Model-driven_architecture), el cual permite la creación de aplicaciones basadas en una arquitectura [SOA](https://en.wikipedia.org/wiki/Service-oriented_architecture).
Los componentes principales de la aplicación generada constan de un servicio RESFTUL generado en [Beego](https://beego.me/),
un framework de desarrollo web creado en [Golang](https://golang.org/) y un cliente web generado en [Angular 4](https://angular.io/).

Este generador utiliza una gramática específica creada con [TextX](www.igordejanovic.net/textX/) un metalenguaje que permite la creación de
lenguajes de dominio especifico o [DSL](https://en.wikipedia.org/wiki/Domain-specific_language). A través de esta gramática el generador
identifica los modelos que se deben crear a nivel de servicios de Backend (Componente RestFul) y sus correspondiente interfaz web.

Utilizando Docker y Docker compose, este generador permite la creación de ambientes de desarrollo a través del uso de [contenedores](https://aws.amazon.com/what-are-containers/
).  


### Requerimientos del Sistema
Para poder utilizar esta herramienta deberá contar con un sistema operativo que soporte docker y docker-compose,
para mas información sobre como instalar docker y docker-compose refierase a la documentación que puede encontrar en:
[https://docs.docker.com/install/](https://docs.docker.com/install/) y [https://docs.docker.com/install/](https://docs.docker.com/compose/install/).


### Instalación

Copie y pegue la siguiente linea en la terminal de comando. ( No requiere permisos de administrador para instalar esta herramienta)

```
curl -sSL https://raw.githubusercontent.com/udistrital/oasgen/master/install/oasgen-install | bash -s
```

Una vez haya ejecutado el comando anterior, cierre la terminal e inicie una nueva sesión.

### Uso

Una vez instalado el generador podra utilizar la ayuda ejecutando el comando `oasgen help`.

Este comando le mostrara las opciones disponibles que presenta el generador

```
Uso oasgen:
oasgen init <proyecto> : Generar un proyecto
oasgen reset / turnoff : Reset de la herramienta
oasgen status: Consulta el estado del generador"
oasgen generate <nombre_proyecto> : Generar CRUD basado en archivo .ent
asgen copy  : Copiar los archivos generados al ambiente de desarrollo
oasgen up : Inicializar el ambiente de desarrollo
oasgen down : Detener ambiente de desarrollo
oasgen check : Verificar requirimientos minimos del sistema
oasgen logs : Ver los logs del ambiente de desarrollo
oasgen update: Actualizar oasgen a la ultima version disponible
oasgen play: Correr el proyecto sin el paso a paso
```

Si desea correr el ejemplo sin necesidad de ejecutar todos los comandos, ejecute en la carpeta raiz
del proyecto el comando `oasgen play`.


### Ver en accion Oasgen

La siguiente imagen muestra como puede generar una aplicación desde cero utilizando el generador

![](https://raw.githubusercontent.com/udistrital/oasgen/master/help/output.gif)
