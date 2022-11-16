# Proyecto inicial - Reforzamiento de JavaScript

---
>esta es la rama main donde se encuentra el proyecto inicial
>para clonar y usar en el curso
---
>en la rama js-source-final se encuentra el proyecto final
>como referencia para el curso

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```js
npm install
```

Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.

* Cuando termine de instalar los node_modules, entonces podemos ejecutar el proyecto de con el siguiente comando

```js
npm run dev
```

Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto

Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```js
"dev": "vite --port 8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm run dev``` nuevamente)
