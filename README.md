# Proyecto Chuck Norris Facts

## Intrucciones de ejecucion


Una vez que estés en la carpeta del proyecto, utiliza los siguientes comandos para ejecutar la aplicación:

ccd .\mi-proyecto\

Se instalan las dependencias con :  npm install

Se instaló axios para realizar las solicitudes HTTP con : npm install axios

npm start



## Descripción

Este proyecto es una aplicación React que permite buscar hechos de Chuck Norris, agregar hechos a una lista de favoritos y ver la lista de favoritos. La aplicación utiliza la API de Chuck Norris para obtener los hechos.

## Componentes

### FormularioBusqueda.js
- **Descripción**: Este componente proporciona un formulario para realizar la búsqueda de hechos de Chuck Norris.

### ItemFact.js
- **Descripción**: Este componente muestra un hecho individual de Chuck Norris, incluyendo su contenido, fecha de creación y categorías. También proporciona un botón para agregar el hecho a la lista de favoritos.

### ListaFacts.js
- **Descripción**: Este componente muestra una lista de hechos de Chuck Norris.

### ListaFavoritos.js
- **Descripción**: Este componente muestra una lista de hechos de Chuck Norris que el usuario ha marcado como favoritos.

### App.js
- **Descripción**: Componente principal de la aplicación que maneja el estado global, realiza las búsquedas a la API, y muestra los componentes `FormularioBusqueda`, `ListaFacts` y `ListaFavoritos`.
