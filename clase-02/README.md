# Clase 02 - Fundamentos de Debugging: Breakpoints

1. [Objetivos de la clase](#objetivos-de-la-clase)
2. [Contenido](#contenido)
   1. [Primer Debug](#primer-debug)
   2. [Breakpoints](#breakpoints)
   3. [Step Over, Step Into y Step Out](#step-over-step-into-y-step-out)
   4. [Introducción y primer fix](#introducción-y-primer-fix)
   5. [Historia de Debugging](#historia-de-debugging)
3. [Material Complementario](#material-complementario)

## Objetivos de la clase

---

- Entender los fundamentos, qué es un bug, empezar a usar las priemra 
herramientas para empezar a eliminar los bugs de forma eficiente y metódica.   


## Contenido

---
### Primer Debug

Un **bug** es un error, un comportamiento no deseado en nuestro código. 
El proceso de debugging consiste en eliminar estos bugs con el uso de distintas
herramientas, a partir del descubrimiento del bug, vamos a analizar el estado de
la aplicación para entender su origen.

> Nota: el código usado en este curso ya viene con el contenido, no fue hecho
por mí.

En el curso se muestra como empezar a debuggear con VS Code (creando el archivo
launch.json), por mi parte hago lo mismo pero con WebStorm. Como el Proyecto 1
consta de un archivo `index.html` y uno `script.js`, solamente tengo que abrir
el archivo HTML, hacer clic derecho en la pestaña y tocar _Debug 'index.html'_

![img.png](assets/img.png)

Esto nos abre un navegador con una sesión de debugging asociada a nuestros 
archivos:

![img_1.png](assets/img_1.png)

Si apretamos el botón **_Presentarse_** vemos que falla, no se muestra el nombre,
esto lo vamos a solucionar en el siguiente paso.

![img_2.png](assets%2Fimg_2.png)

### Breakpoints

Es la herramienta más usada a la hora de hacer debugging, es un punto de 
interrupción que detiene la ejecución del programa, en ese momento vamos a ver
el estado general del programa.

Para usarlos, vamos a ir a nuestro archivo `script.js` y hacer clic en donde 
está el número de la línea 6, haciendo esto va a aparecer el punto rojo que 
representa el breakpoint, y la línea también se va a pintar de rojo, para que 
sea más fácil verla.

![img_3.png](assets%2Fimg_3.png)

Corremos nuestro programa de nuevo en modo debug, y ahora cuando apretamos el 
botón de **_Presentarse_** vemos cómo se resaltó la línea que habíamos marcado:

![img_4.png](assets%2Fimg_4.png)

Y la ejecución se detuvo en el navegador, con un mensaje aclaratorio 
**_"Paused in debugger"_**:

![img_5.png](assets%2Fimg_5.png)

En WebStorm (o cualquier otro IDE) vamos a tener una ventana que nos va a 
mostrar las herramientas para hacer debugging. En mi caso, la combinación 
`alt`+`5` abre esta vista:

![img_6.png](assets%2Fimg_6.png)

Colocamos algunos breakpoints más y le damos a **_Resume Program_** (`F9` en mi 
caso). 

![img_7.png](assets%2Fimg_7.png)

Vemos como ahora el programa "saltó" al siguiente breakpoint, es importante 
entender que la línea resaltada **todavía no se ejecutó**. Los breakpoints no
son instrusivos con el código, pueden agregarse y sacarse durante el tiempo de
ejecución. Vemos que el valor de la variable `introduction` es `undefined`. 
Si seguimos un paso más:

![img_8.png](assets%2Fimg_8.png)

Ahora vemos que el valor de `introduction` pasó a ser **_"Mi nombre es "_**, y 
que se creó variable `completeName` (lógicamente con valor `undefined`).
Si le damos a `F9` y no hay más breakpoints por delante, la ejecución del 
programa sigue su flujo normal hasta terminar.

En WebStorm con la combinación `ctrl`+`shift`+`F8` vamos a abrir una ventana que
nos muestra los breakpoints que pusimos en nuestro ćodigo:

![img_9.png](assets%2Fimg_9.png)

![img_10.png](assets%2Fimg_10.png)

A la izquierda vemos el archivo y la línea en donde está el breakpoint, y dentro 
de cada breakpoint, vamos a poder manipularlo (deshabilitarlo, suspender la 
ejecución o no, agregar una condición, etc.)

### Step Over, Step Into y Step Out


### Introducción y primer fix


### Historia de Debugging




## Material Complementario

---

- JetBrains Team. (2022, Septiembre 28). Debug JavaScript in Chrome. _Jetbrains_
https://www.jetbrains.com/help/webstorm/debugging-javascript-in-chrome.html#ws_js-debug_reload_current_page
