# Clase 03 - Inspección de datos y funciones

1. [Objetivos de la clase](#objetivos-de-la-clase)
2. [Contenido](#contenido)
   1. [Variables](#variables)
   2. [Watch](#watch)
   3. [Debug Console](#debug-console)
   3. [Call Stack](#call-stack)
3. [Material Complementario](#material-complementario)

## Objetivos de la clase

---

- Sumar mas herramientas a las ya conocidas (breakpoints, Step Over, Step Out, 
Step In). Sumamos Variables, Watch, Debug Console y Call Stack.

## Contenido

---

### Variables

Las variables en debugging representan el valor que tienen las variables del
sistema en un momento dado, específicamente cuando se frene la ejecución en un
determinado breakpoint. Lo probamos con el Proyecto 1, colocamos un breakpoint
en la línea 12, donde se declara `completeIntroduction`:

![img.png](assets%2Fimg.png)

Vamos a ver en la solapa _Threads & Variables_ el listado de variables
`introduction` y `completeName` tienen sus valores, y la variable
`completeIntroduction` todavía no, porque esa línea todavía no se ejecutó. 
Pero si hacemos un Step Over:

![img_1.png](assets%2Fimg_1.png)

> Nota: Notar como en el mismo apartado también se distinguen las variables por 
su scope (Local y Global). Local abarca las variables que están dentro de la
función en la que hayamos frenado la ejecución (**updateLabel** en este caso), 
Global representa al elemento global de JavaScript (window). La variable 
*this** en este caso representa la misma window, por lo que si hacemos 
`document.querySelect(...)` o `this.document.querySelect(...)`, el resultado es 
el mismo.

### Watch

Esta sección nos permite agregar el nombre de una variable y analizar la misma.
Es muy útil sobre todo cuando nuestro alcance tiene muchas variables y puede
resultar muy complejo seguir el valor de todas, o simplemente porque no nos 
interesan.

![img_2.png](assets%2Fimg_2.png)

En el caso de WebStorm podemos agregar el watch en la parte superior de la 
pestaña de _Variables_. Vamos a agregar la variable `introduction` y ver como
cambia de valor:

![img_3.png](assets%2Fimg_3.png)

Agregamos un breakpoint en la línea 10, y vemos que el valor es `undefined`. 
Porque todavía no se ejecutó esa línea, hacemos un Step Over:

![img_4.png](assets%2Fimg_4.png)

Ahora vemos como el valor cambió. Podemos agregar Watch para la cantidad de
variables que necesitemos. Es importante recordar que las variables que 
agreguemos a un Watch van a seguir ahí incluso una vez finalizada la sesión de
debugging:

![img_5.png](assets%2Fimg_5.png)

En la misma línea donde agregamos un Watch también podemos incluir una expresión
(declaración de una variable, asignación, invocación a función, etc.). Por
ejemplo, invocamos al método **getIntroduction()**:

![img_6.png](assets%2Fimg_6.png)

Vemos como aparece una variable `result` que nos muestra el valor resultante de 
la expresión ejecutada. Hay que tener en cuenta en que scope nos encontramos
a la hora de agregar expresiones, si en una expresión hacemos referencia a 
alguna variable que fue declarada en el ambiente local de otra función, no vamos 
a poder accederla.

Haciendo clic derecho en una función vamos a disponer de varias opciones que nos
van a ayudar con el debugging:

![img_7.png](assets%2Fimg_7.png)

### Call Stack

Entendiendo previamente como funcionan las llamadas a funciones en JS, el Call 
Stack (FIFO, o First In First Out), donde la última función en ser llamada es la
primera que se ejecuta, vamos a verlo en el panel de debugging:

![img_8.png](assets%2Fimg_8.png)

Agregamos un breakpoint en la función **getCompleteName()**, y a la izquierda 
del panel vemos el Call Stack (en WebStorm, debajo de cada Thread). La función 
que está más arriba, va a ser la primera en ejecutarse, y si vemos las que están
más abajo, podemos hacer el trace o seguimiento en el orden de las funciones que
se fueron invocando.

## Material Complementario

---

- Jetbrains Team. (2022, March 17). Watch variables. _Jetbrains_
https://www.jetbrains.com/help/rider/Using_Watches.html
- Jetbrains Team. (2022, March 17). Evaluate Expressions. _Jetbrains_
https://www.jetbrains.com/help/rider/Evaluating_Expressions.html
