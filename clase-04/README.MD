# Clase 04 - Breakpoints avanzados

1. [Objetivos de la clase](#objetivos-de-la-clase)
2. [Contenido](#contenido)
   1. [Logpoints](#logpoints)
   2. [Excepciones](#excepciones)
   3. [Breakpoints condicionales](#breakpoints-condicionales)
   4. [Correcciones con excepciones](#correcciones-con-excepciones)
3. [Material Complementario](#material-complementario)

## Objetivos de la clase

---

- Conocer distintos tipos de Breakpoints y como utilizarlos

## Contenido

---
### Logpoints

O puntos de registro, son puntos para registrar información, no frenan la 
ejecución como los breakpoints, sino que la idea es simplemente brindar 
información útil en distintos puntos de ejecución, algo así como un `console.log`
pero mejor (por ejemplo, que podemos agregar en tiempo de ejecución, sin andar
modificando el código, así como tampoco modificamos el código, por lo que no
tenemos que acordanos de sacarlos más adelante).
Para esto, vamos a empezar con el Proyecto 2, un app simple que suma dos 
números, pero que no está funcionando todavía:

![img.png](assets%2Fimg.png)

Para setear un logpoint en WebStorm (es un poco más difícil que en VS Code) 
vamos a seguir los pasos:

- Setear un breakpoint
- Deshabilitar el check de _Suspend execution_, y clickear en _More_ 
![img_1.png](assets%2Fimg_1.png)
- En la ventana emergente corroboramos que _Suspend execution_ este 
deshabilitado y habilitamos _Evaluate and log_, incluimos la expresión (entre
llaves podemos incluir variables de ese scope):
![img_2.png](assets%2Fimg_2.png)

Vemos que se generó un breakpoint, pero de color amarillo (en el caso de VS Code
es un rombo rojo):

![img_3.png](assets%2Fimg_3.png)

Ahora si ejecutamos nuestro programa, la ejecución no se detiene y en la consola
de debugging vamos a ver:

![img_4.png](assets%2Fimg_4.png)

La opción _"Breakpoint hit" message_ es la que nos muestra el mensaje 
"Breakpoint reached: script.js:8", y la de _Evaluate and log_ la que nos muestra
nuestra expresión.
Gracias al log vemos donde está el error:

![img_5.png](assets%2Fimg_5.png)

La función **inputsAreEmpty()** siempre está retornando true, corregimos y
simplificamos la función:

![img_6.png](assets%2Fimg_6.png)

Y probamos de nuevo:

![img_7.png](assets%2Fimg_7.png)

### Excepciones

Cada lenguaje tiene su conjunto de excepciones y su forma de manejarlas, para
cuando ocurre algún error. En JS vamos a usar un bloque `try`-`catch`, que
intentará ejecutar el código en el bloque `try`, y que en caso de ocurrir una
excepción vamos a poder atraparla y procesarla con el bloque `catch`.

Si corremos nuestro programa, ahora que solucionamos lo del paso anterior, vemos
en la consola lo siguiente:

![img_8.png](assets%2Fimg_8.png)

`ReferenceError` es un tipo de Excepción de JS que surge cuando queremos acceder 
a una variable que no fue definida, en nuestro caso `number3`. Y abajo podemos
ver el stack de ejecución de las funciones. Podemos ver este error de una manera
más fácil, usando **breakpoints para excepciones**. Tocando `ctrl`+`shift`+`F8`
vamos a acceder a la ventana de breakpoints, donde vemos todos los breakpoints
de la aplicación, y vamos a poder tildar la opción de _JavaScript Exception 
Breakpoints_:

![img_9.png](assets%2Fimg_9.png)

Si ejecutamos el código nuevamente, vemos como se frena en la línea donde 
ocurrió la excepción:

![img_10.png](assets%2Fimg_10.png)

Corregimos el error, `number3` no estaba definido, lo cambiamos por `number2` y
probamos:

![img_11.png](assets%2Fimg_11.png)

Por último, disponemos también del bloque `finally`, el cuál se ejecuta **siempre**,
sin importar si pasamos por el bloque `catch` o no.

### Breakpoints condicionales

Es un breakpoint que detiene el código únicamente si se cumple cierta condición
que nosotros establezcamos. Es muy común usarlo en loops, cuando queremos frenar
la ejecución en un determinado elemento. Para esto, vamos a usar el Proyecto 3,
un proyecto para listar personas según su edad.
Suponiendo que no tenemos acceso a `persons.js`, vamos a agregar un breakpoint
condicional en `script.js` para ver si alguna persona se llama "Jorgelina". Para
esto vamos a la línea donde queremos poner el breakpoint, hacemos clic derecho
y _Add conditional Breakpoint_:

![img_12.png](assets%2Fimg_12.png)

Agregamos la expresión que queremos evaluar (notamos como el breakpoint es un
círculo rojo normal, con un signo de pregunta)

![img_13.png](assets%2Fimg_13.png)

Iniciamos el debugging de la aplicación, y al querer listar las personas de 20
a 30 años, vemos que se detiene en el breakpoint:

![img_14.png](assets%2Fimg_14.png)

Donde `person.name` es igual a "Jorgelina" 

### Correcciones con Excepciones

Seguimos con el avance 2 del proyecto final. Ahora que podemos iniciar sesión
deberíamos poder agregar items a favoritos haciendo clic en su respectiva
imagen, pero no está funcionando, se debería mostrar un corazón sobre el item.
Tip: el problema está relacionado con el **localStorage**.

#### Solución

Haciendo uso de los breakpoints de excepciones, vemos que la ejecución se frena
en la línea 27 de `favorites.js`, cuando intenta agregar un favorito al array
`favorites`, ya que no puede hacer `.push()` de una variable `null`.
Agregamos una inicialización de un nuevo array, en el caso de que `favorites`
esté vacío:

![img_16.png](assets%2Fimg_16.png)

Y ya podemos agregar productos a nuestros favoritos:

![img_17.png](assets%2Fimg_17.png)

## Material Complementario

---
- Ekaterina Ryabukha. (2020, April 22). Create Conditional Breakpoints. _Webstorm Guide, Jetbrains_
https://www.jetbrains.com/webstorm/guide/tips/conditional-breakpoint/
- MDN Contributors. (2023, February 21). Window.localStorage. _Mozilla Developer Network_
https://developer.mozilla.org/es/docs/Web/API/Window/localStorage