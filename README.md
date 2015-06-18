# Ejemplo Reflux

Este es un ejemplo de la arquitectura [Reflux](https://github.com/spoike/refluxjs), inspirada en [Flux](https://facebook.github.io/flux/).

Autor: [Sacha Lifszyc](https://github.com/slifszyc) | [@slifszyc](http://twitter.com/slifszyc) | sacha.lifszyc@gmail.com

## Instrucciones

Clonar el repo con el comando:
```
git clone git@github.com:platzi/ejemplo-reflux.git
cd ejemplo-reflux
```

Correr los comandos:

```
npm install
npm run build
open index.html
```

## ¿Qué es Flux?

Flux es la arquitectura de aplicaciones que Facebook utiliza para crear aplicaciones web del lado del cliente (front-end). Complementa los `components` de React mediante la utilización de un flujo de datos unidireccional. Es más bien un patrón en lugar de un framework.

### Dispatcher (Despachador)

El Dispatcher es un objeto único en nuestra aplicación y funciona como el eje central del flujo de datos en una aplicación.
Esencialmente es un registro de callbacks, funciones que se ejecturán cuando se produzca un evento.
A medida que crezca nuestra app, veremos cómo los Stores dependen entre sí, y con el Dispatcher ordenamos esa interdependencia.

### Actions (Acciones)

Cuando nuevos datos entran en el sistema (ya sea a través de un usuario que hace click en la interfaz de usuario o a través de una respuesta AJAX) se empaquetan en una acción - un objeto que contiene los nuevos campos de los datos y un tipo de acción específica.
Las acciones se identifican mediante un atributo type.
Cuando todas las tiendas reciben la acción, que suelen utilizar este atributo para determinar si y cómo deben responder a ella.

### Stores (Depoósitos)

Los Stores contienen el estado de la aplicación y la lógica.
Son algo similar a un modelo en una MVC tradicional, pero administran el estado de muchos objetos - que no representan un solo registro de datos como hacen los modelos ORM.
Tampoco son lo mismo que las colecciones del Backbone.
Más que una simple gestión de una colección de objetos de estilo ORM, los Stores administran el estado de la aplicación de un dominio determinado dentro de la aplicación.

![Arquitectura Flux](https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

## ¿Y Reflux?

Una librería simple para la arquitectura de aplicaciones de flujo de datos unidireccional inspirado en ReactJS.

Las diferencias principales con Flux son:

- El Dispatcher se quita a favor de dejar que cada Acción actúe también como Dispatcher.
- Debido a que las Acciones son escuchables, los Stores pueden escucharlas. Las tiendas no necesitan tener sentencias switch grandes que hacen la comprobación de tipos estáticos (de tipos de acción) con strings
- Los Stores pueden escuchar a otros Stores
- `waitFor` se sustituye a favor de manejar flujos de datos en serie y en paralelo
- No hace falta crear Acciones, ya que son funciones que se pasarán a quienes estén escuchándolas

Más info [en este link](http://spoike.ghost.io/deconstructing-reactjss-flux/)

```
╔═════════╗       ╔════════╗       ╔═════════════════╗
║ Actions ║──────>║ Stores ║──────>║ View Components ║
╚═════════╝       ╚════════╝       ╚═════════════════╝
     ^                                      │
     └──────────────────────────────────────┘
```
