# Challenge AluraFlix

Este challenge pertenece a la especialidad React del programa Alura ONE

Home Versión Desktop

![AluraFlix-Home-Desktop](https://github.com/FrankerJx/challenge-one-portafolio/assets/161277978/f3f89eb4-0d45-45d4-afc2-ad6cca664eac)

Nuevo Video Versión Escritorio

![AluraFlix-Nuevo_Video-Desktop](https://github.com/FrankerJx/challenge-one-portafolio/assets/161277978/c18540d5-95d2-4aa6-b8b9-aa14ff967ad1)

--------

Home Versión Mobile

![AluraFlix-Home-Mobile](https://github.com/FrankerJx/challenge-one-portafolio/assets/161277978/0422e40c-c943-4b02-bb81-0805ba966860)

Nuevo Video Versión Mobile

![AluraFlix-Nuevo_Video-Mobile](https://github.com/FrankerJx/challenge-one-portafolio/assets/161277978/010b7806-98c3-4559-b259-0882d4cd6651)

## Descripción

El challenge implementa el uso deReact Vite así como el uso de la creación e interacción con uan Fake API para agregar y eliminar videos dentro del proyecto.

## Ejecución Local

Para ejecutarlo localmente se debe descargar el proyecto desde [aquí](https://github.com/FrankerJx/challenge-one-aluraflix/archive/refs/heads/main.zip)

Descomprimir el archivo zip y abrir la carpeta del proyecto con Visual Studio Code

Abrir la consola y ejecutar npm install para instalar las dependecias

Ejecutar npm run dev para inicializar el proyecto

## Funcionamiento

Se pueden agregar nuevos videos mediante el formulario que se encuentra en la página Nuevo Video.

Una vez creado el video en Home se podrá visualizar.

Cada video se ordena de acuerdo a su categoría.

Los videos pueden ser editados desde el botón editar, o eliminados desde el botón eliminar

### Ver los videos Versión Escritorio

Para ver los videos se debe seleccionar uno y se mostrará en la parte superior toda la información del video y dando clic en la imagen será dirigido al video.

![AluraFlix-Video_Seleccionado](https://github.com/FrankerJx/challenge-one-portafolio/assets/161277978/66e0b821-688c-481b-9053-7742010d0c7e)

### Ver videos versión Mobile

Para ver los videos basta con dar clic sobre la imagen del video que se desee ver y lo dirigira al video.

## Extras

En las instrucciones del proyecto se solicita agregar en el formulario un input para la url de la imagen que se mostrará en cada video.
Pero con ayuda de ChatGPT se implemento una función para crear automáticamente la imagen.
Por lo que se omitio ese input en el formulario de la página Nuevo Video pero se mantuvo en el formulario de edición para que la imagen sea editable.

Esta función consiste en extraer el id del video de Youtube y colocarlo en el siguiente enlance `https://i.ytimg.com/vi/ "idYouTube" /maxresdefault.jpg`
Después esa url se agrega al resto de los campos para dar de alta el nuevo video.
