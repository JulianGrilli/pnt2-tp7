# proyecto-vue-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How to use it

A veces por algunas razones, tal como ha pasado en clase, hay que darle F5 (refrescar de nuevo la pantalla) para que funcione correctamente (no loguea ningun error en la consola).

Ingresar con usuario root y password 1234. Si es exitoso le redireccionara a a la pagina de todas las tareas creadas
De lo contrario aparecerá un mensaje de error.

Mientras no se haya registrado, si intenta ver los recursos de crear tarea, y/o obtener tareas, le aparecerá un warning diciendo
que no tiene acceso al recurso.

El login esta manejado con sessionStorage y el formateo de la fecha con moment

