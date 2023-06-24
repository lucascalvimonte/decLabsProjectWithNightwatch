# Pruebas de Automatización en la página de December Labs

Este proyecto utiliza Nightwatch.js para realizar pruebas automatizadas en la página "Careers" de December Labs.

## Clona el repositorio del proyecto:

git clone https://github.com/lucascalvimonte/decLabsProjectWithNightwatch.git

## Requisitos Previos

- Node.js y npm instalados en su sistema.
- Nightwatch.js instalado globalmente o como una dependencia de su proyecto.

## Estructura del Proyecto

### 1. decemberLabsPage.js

Esta clase define los elementos y acciones en la página "Careers". Los elementos son definidos utilizando selectores CSS y Xpath, y las acciones se definen como una serie de comandos que se pueden realizar en la página. 

### 2. decLabsTest.js

Este archivo define un conjunto de pruebas a ejecutar en la página "Careers". Las pruebas hacen uso de la página definida en `decemberLabsPage.js` para realizar una serie de acciones y verificaciones en el formulario "Join Our Team".

### 3. userData.js

Este archivo contiene los datos de prueba que se utilizan para llenar los campos en el formulario "Join Our Team". Los datos se exportan como un módulo para que puedan ser requeridos por las pruebas.

### 4. colorConstants.js

Este archivo contiene las constantes de color que se utilizan para verificar el color del borde de los campos del formulario. Las constantes se exportan como un módulo para que puedan ser requeridos por las pruebas.

## Ejecutando las Pruebas

Para ejecutar las pruebas, primero asegúrate de tener todas las dependencias instaladas. Luego puedes ejecutar las pruebas utilizando el comando `npx nightwatch`. En este proyecto decidí ejecutar las pruebas sobre el browser chrome, sin embargo, NightWatch dispone de otros browsers para ejecutar las pruebas.


## Mejoras realizadas 

Se ha llevado a cabo una refactorización de código para adoptar el enfoque de Page Object Model (POM) y métodos reutilizables. Se ha trasladado los elementos de la página a clases separadas, como la clase decemberLabsPage.js, para mejorar la organización y el mantenimiento del código. Se ha implementado el uso de comandos personalizados en Nightwatch.js para realizar acciones repetitivas de manera más eficiente, como verificar la visibilidad de un elemento o hacer clic en un elemento.

La migración a un enfoque de pruebas basado en el marco Nightwatch.js permite una estructura más clara y concisa de los casos de prueba, además de la integración de objetos de página para mejorar la reutilización del código y simplificar la escritura de las pruebas.

Se ha implementado un sistema de manejo de configuración flexible, que incluye la extracción de datos del usuario y constantes de color a archivos separados. Esto permite la personalización fácil de los parámetros de las pruebas, como cambiar los datos del usuario.

Se han aprovechado las características de Nightwatch.js para realizar pruebas más robustas y eficientes, como la verificación de propiedades CSS de los elementos y la inyección de valores en campos de formulario.

Además, se ha seguido las mejores prácticas de desarrollo de pruebas, como la separación clara de las pruebas de la lógica de la aplicación, el uso de aserciones claras y significativas, y la configuración y limpieza adecuada de los entornos de prueba.


## Notas adicionales

Asegúrate de tener correctamente configurado el WebDriver (por ejemplo, ChromeDriver o geckodriver dependiendo del navegador que estés utilizando) en tu variable de entorno PATH. También es necesario que todas las dependencias del proyecto estén correctamente instaladas, incluyendo Node.js y Nightwatch.js.






