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

Contenido

### Call Stack

Contenido

## Material Complementario

---

- Higo.io. (2022). Debug: ¿Qué es y para qué sirve?. _Higo.io_
https://higo.io/glosario-contable/d/debug-que-es-y-para-que-sirve/
