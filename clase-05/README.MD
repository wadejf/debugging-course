# Clase 05 - Chrome DevTools

1. [Objetivos de la clase](#objetivos-de-la-clase)
2. [Contenido](#contenido)
   1. [Introducción a Chrome DevTools](#introduccion-a-chrome-devtools)
   2. [Event Listener Breakpoints](#event-listener-breakpoints)
   3. [DOM Breakpoints](#DOM-breakpoints)
   4. [DevTools vs IDE](#devtools-vs-ide)
   5. [Depurando con DevTools](#depurando-con-devtools)
   6. [Consejos y estrategias para realizar una depuración exitosa](#consejos-y-estrategias-para-realizar-una-depuración-exitosa)
3. [Material Complementario](#material-complementario)

## Objetivos de la clase

---

- Aprender a utilizar Chrome DevTools.

## Contenido

---
### Introducción a Chrome DevTools

Es un set de herramientas dentro de Chrome que nos van a ayudar con nuestro 
desarrollo web. A pesar de que son impulsadas por Chrome, cualquier navegador
basados en Chromium las tiene (Microsoft Edge, Opera, Brave, etc.).
Safari y Firefox también tienen sus herramientas de desarrollo, pero no son las
mismas que Chrome DevTools.
Vamos a ver herramientas enfocadas al manejo de HTML y JS a través de 
breakpoints.
Seguimos usando el Proyecto 3, iniciamos el proyecto y apretamos `F12` para 
abrir DevTools:

Vamos a ver distintas pestañas:

![img.png](assets%2Fimg.png)

- _Elements_, código HTML de la página y las hojas de estilo que se aplican
a cada elemento. Podemos seleccionar elementos y los vamos a ver resaltados en
la página. También podemos modificar el código HTML y verlo cambiar en vivo, lo
mismo con CSS (siempre de forma local). También vamos a poder buscar los
elementos por texto, teniendo el foco en el código HTML, hacemos `ctrl`+`F` y
buscamos por texto.
- _Console_, funciona de la misma forma que la consola de nuestro IDE, y de
hecho, están sincronizadas:

![img_1.png](assets%2Fimg_1.png)

- _Source_, código fuente, similar a la pestaña de debugging de nuestro IDE.
- _Network_, la vamos a ver más adelante.
- _Application_, información sobre distintos aspectos (almacenamiento, cache, 
etc.)

### Event Listener Breakpoints

Vamos a enfocarnos en la pestaña _Source_ de la consola, qué, como decíamos 
antes es similar a la ventana de debugging de nuestro IDE:

![img_2.png](assets%2Fimg_2.png)

Así con la consola de DevTools estaba sincronizada con nuestra consola de 
debugging, también lo están las demás herramientas, si colocamos un breakpoint
en DevTools, al frenar la ejecución también se va a marcar la línea en el IDE:

![img_3.png](assets%2Fimg_3.png)

> Hay algunos breakpoints que están en Chrome DevTools pero no en nuestro IDE,
estos son:
> - XHR/fetch breakpoints
> - DOM breakpoints
> - Global listener breakpoints (no usados en este curso)
> - Event Listener breakpoints

Vamos a empezar con los _Event Listener Breakpoints_. Estos no se colocan sobre
el código, sino sobre eventos. Cuando creamos uno, la ejecución se detiene en
el momento que ocurra ese evento. Por ejemplo, queremos incluir un breakpoint de
este tipo para detectar un evento de clic sobre un elemento (onClick):

![img_4.png](assets%2Fimg_4.png)

Ahora al hacer clic en un elemento que dispare ese evento, vemos como la 
ejecución se detiene en ese punto:

![img_5.png](assets%2Fimg_5.png)

### DOM Breakpoints

El DOM de HTML (Document Object Model), son todos los elementos creados a partir
de HTML. Desde el DOM podemos manipular los elementos de varias formas:

![img_6.png](assets%2Fimg_6.png)

Podemos hasta tomar una imagen de un elemento específico de la página.

Ahora si, los DOM breakpoints, son como los Event Listener Breakpoints, pero que
detectan cambios en el DOM. Hay tres tipos:

- Subtree, escuchan modificaciones en los elementos hijos de un elemento.

![img_7.png](assets%2Fimg_7.png)

Colocamos un breakpoint en el div que lista las personas, y, cuando cliqueamos
alguno de los botones, vemos como se detiene la ejecución en el punto en donde 
se agrega una persona a la lista, y se va a detener en cada persona que agregue:

![img_8.png](assets%2Fimg_8.png)

- Atributo, escucha cambios a los atributos del elemento

![img_9.png](assets%2Fimg_9.png)

Borramos el DOM Breakpoint, y probamos de nuevo, seteando el nuevo breakpoint de
atributos:

![img_10.png](assets%2Fimg_10.png)

Vemos como ahora se detuvo en otra línea.

- Borrado, escucha cuando el elemento sobre el que pusimos el breakpoint, se 
borra

Vamos a agregar este breakpoint a uno de los elementos `<p>` dentro del div:

![img_11.png](assets%2Fimg_11.png)

Si ahora apretamos de nuevo uno de los botones:

![img_12.png](assets%2Fimg_12.png)

Vemos que se detuvo en la línea que borra el elemento.

### DevTools vs IDE

La respuesta es depende, es conveniente usar el IDE para no estar cambiando 
constantemente de entorno y poder hacer debugging ahí. Pero también hay que 
tener presente que DevTools es conveniente cuando trabajamos en desarrollo web,
ya que los DOM o Event Listener Breakpoints, no los tenemos en otro entorno.

### Depurando con DevTools

Vamos a usar DevTools con el Proyecto Final. Ahora ya tenemos los favoritos 
funcionando, pero hay algunos errores:

![img_13.png](assets%2Fimg_13.png)

Cuando apretamos el botón _Ver Favoritos_ nos muestra correctamente los que 
tengamos como favoritos, pero no cambia su texto, debería decir algo así como 
_Ver Todos_, para volver al estado inicial.
Así como el texto _Listado Completo_ debería decir _Favoritos_ o _Listado de 
Favoritos_.
También, el botón de Cerrar Sesión, no funciona, hay que corregirlo.

#### Solución

Primero agrego un DOM Breakpoint (subtree) al listado de items, para ver en que 
punto del código se están cargando los favoritos:

![img_14.png](assets%2Fimg_14.png)

Encontramos que el método es `fillFavoriteList()` en el archivo `lists.js`, 
podemos agregar, al final de ese método los dos cambios de textos que 
necesitamos:

![img_15.png](assets%2Fimg_15.png)

Vemos cómo ahora los textos cambiaron correctamente:

![img_16.png](assets%2Fimg_16.png)

Con respecto al error de no poder cerrar sesión, agregamos un Event Listener 
Breakpoint (Mouse - click), y hacemos clic en el botón _Cerrar Sesión_ y 
llegamos al siguiente breakpoint:

![img_17.png](assets%2Fimg_17.png)

Agregamos una expresión al Watch para validar localStorage, y nos damos cuenta 
que el problema es a la key que queremos acceder. El usuario se estaba guardando
cómo _loggedUser_ y no como _user_:

![img_18.png](assets%2Fimg_18.png)

Corregimos y probamos de nuevo:

![img_19.png](assets%2Fimg_19.png)

![img_20.png](assets%2Fimg_20.png)

Vemos como ahora al cerrar sesión, cambiaron los labels y desapareción los 
favoritos (porque ya no estamos logueados).

### Consejos y estrategias para realizar una depuración exitosa

Como desarrolladores podemos encontrarnos con problemas que parecen difícil y no
lo son, y al revés. Es importante pensar en la forma que actuamos frente a esto,
empezar a desarrollar esa capacidad. Hay una serie de preguntas útiles que 
podemos hacernos cada vez que se nos presentan bugs:

- ¿Cuál es el comportamiento actual?
- ¿Cuál es el comportamiento deseado?

Respondiendo a esas preguntas, buscamos reproducir el error:

- ¿Cómo se reproduce?
- ¿En que casos particulares en particular ocurre?
  - ¿Ocurre en todos los navegadores?
  - ¿Hay condiciones previas que se tengan que dar?
  - ¿A todos los usuarios les ocurre lo mismo?

Es importante reducir el alcance del error, para esto explotamos las 
herramientas de debugging, colocando breakpoints.

Es importante también validar que el **bug** realmente esté solucionado.

## Material Complementario

---

- Chrome Team. (2016, March 28). Chrome DevTools, Overview. _Chrome Developers_
https://developer.chrome.com/docs/devtools/overview/