# CodesFLY
Mi web constará de tres secciones por página(header, main y footer).
·En el header, lo dividiremos en mas partes, una imagen a la izquierda del todo, un menú en el centro del header y un articulo a la derecha el cual contendrá un botón que te redirigirá a la ventana de iniciar sesión, un icono de un carrito para futuras compras y un menú hamburguesa.
·En el main, he querido tener una estructura compuesta por tres sections, los cuales dentro de estos, encontraremos títulos, imágenes y artículos con párrafos y botones ue nos edirigen hacia otras páginas.
·En el footer, nos encontraremos con un section, el cual dentro de él podremos apreciar una imagen con el logo de la web, un menú con todas las políticas de privacidad y por último un articulo con párrafos para poner la etiqueta del copyright y quién creó esta página.

### PÁGINA INICIO
![1](/imagenes/inicio.png)
### PÁGIN PRODUCTOS
![1](/imagenes/productos.png)
### PÁGINA SOBRE NOSOTROS
![1](/imagenes/sobre-osotros.png)
### PÁGINA CONTACTO
![1](/imagenes/contacto.png)
### PÁGINA INICIAR SESIÓN
![1](/imagenes/inicio-sesion.png)

Para hacer esta página, hemos utilizado un IDE, yo en mi caso he utilizado Visual Studio Code y WebStorm. La he utilizado sin extensiones ya que no me ha resultado dificil hacerla por mi propia cuenta, tambien he utilizado GitHub para subir mi proyecto a un repositorio. Y para comprobar que esta bien mi código, he utilizado W3C, como he puesto por arriba.
Para tener una buena estructura de archivos, lo que he hecho es poner dos carpetas, una llamada assets que es donde irian todas las imágenes y otra llamada css la cual contendrá nuestra hoja de estilos.
Y por separado, los cuatro archivos HTML 5.

Como he dicho, los lenguajes que hemos utilizado han sido el HTML 5, con el cual pondremos el contenido bruto que nosotros deseemos a nuestra página, mientras que el css nos servirá para darle un formato y animaciones a este contenido nombrado anteriormente.

Mientras que he estado creándola, iva a cualquier navegador a corroborar de que lo que había puesto, era lo que yo quería y si no era así, entraba en herramientas para desarrolladores y desde ahí podemos hacer cambios temporales, lo cual es lo más útil que he utilizado para este trabajo.

Hablando del css 3, he separado el header, todos los main que he implementado y el footer a trabés de comentarios para que se aprecien cual es cada uno y podamos modificarlo facilmente.
He implementado una serie de variables, ya que en la siguiente versión de la web, vamos a hacer varias cosas con JavaScript, por tanto estas cambiarán a entar en contacto con el script.
Me fijé muy bien que hay estilos que los puedo reutilizar, como la mayoría de los botones, por tanto, le agregué la misma etiqueta para hacerlos genéricos.

### VALIDACIÓN DE CSS 3
![1](/imagenes/CSS.png)

Para la realización de esta web, me he guiado por el método BEM.
La cual es una metodología con un enfoque para nombrar y organizar el código CSS, haciendo que sea más claro, escalable y fácil de mantener.
Como bién dije ante, he implementado varias variables para luego tener una gran facilidad a la hora de cambiar ciertos valores.

---
Cuado haces cualquier página, al cambiar la ventana de resolución, se descuadra solo, ¿nunca de pasó? A mí siempre, pero utilizo media queries, te preguntarás que es y yo tengo tu respuesta.
Imagínate que estas ciento una hoja de papel, y esta mide de ancho unos 20cm, pues lo que haremos es poner unos marcadores como uno a los 15cm, por tanto a esos centimetros, la página cambia su resolución cuantas veces queramos, y ahí entraremos nosotros para poder modificarla por cada marcador que necesitemos.
---
Para el DarkMode, he puesto variables de colores para luego con JavaScript poder sustituirlo con un botón.

Una manera de ver más llamativa nuestra web, es poner transitions y @keyframes
#### TRANSITIONS
Es una adaptación de los segundos en los que queremos que la animacion se realize.
#### @KEYFRAMES
Permite a los autores controlar los pasos intermedios en una secuencia de animación CSS mediante el establecimiento de Keyframes a lo largo de la secuencia de animación que debe ser alcanzado por determinados puntos durante la animación.

### Como validar. 
Para validar nuestros archivos, nos iremos a esta web [PINCHAR AQUÍ](https://validator.w3.org).
Una vez dentro, introducimos nuestro archivo y le damos al botón de validar, una vez se nos valide, nos salda una serie de errores, los cuales nos saldrá que tipo es y como arreglarlo. Tienes que ir poco a poco hasta que este completamente perfecto validado.

## Ver carpeta JS
[PINCHAR AQUÍ](https://github.com/erneupa/CodesFLY/tree/main/js)
