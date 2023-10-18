# Deuda técnica y refactorización de código
Los 4 tipos de deuda:
* Imprudente y deliberada: Se da cuando el desarrollador esta consciente lo que hará, pero no toma en consciencia lo que se esta dejando en el código.
* Imprudente e inadvertida: No se sabe lo que se esta dejando por falta de experiencia.
* Prudente y deliberada: Se tiene 100% de consciencia de una deuda que debemos corregir.
* Prudente e inadvertida: Esta es la más común de todas. Los conocimientos que tenemos al inicio son bajos y al final terminamos con mejor conocimiento, lo que nos permite saber que pudimos haber hecho un código mejor.

## Refactorización de codigo
La refactorización es un proceso que tiene como objetivo **mejorar el código** de un proyecto **sin alterar su comportamiento** para que sea más entedible y tolerante a cambios.

### Cuándo refactorizar?
* Cuando el código es de baja calidad.
* Al detectar un *code smell*.

# Reglas de diseño simple
Las 4 reglas del diseño simple son:
* El código pasa correctamente las pruebas.
* Revela la intención del diseño.
* Respeta el pricipio DRY (don't repeat yourself).
* Tiene el menor número posible de elementos. Ejemplo una función de suma, solo debe sumar.

# Clean Code Qué es?
Es un término popularizado por Robert C. Martin en su libro **Clean Code: A handbook of Agile Software Craftsmanship** en el 2008.

Cita: **El código limpio es aquel que se ha escrito con la intención de que otra persona lo entienda**

# Reglas de nomenclatura
* Nombres deben ser pronunciables y expresivos: De preferencia en inglés.

Ejemplo:
```javascript
//no recomendado
const yyymmdstr = moment().format("YYYY/MM/DD");
//recomendado
const currentDate = moment().format("YYYY/MM/DD");
```
* Nombres sin información técnica: Por ejemplo no se debe indicar el tipo de dato de la variable.

Ejemplo:
```javascript
//No recomendado
let arrayNames = ["Alex", "Mariana", "Cande"];

//Recomendado
let nameList = ["Alex", "Mariana", "Cande"];
```
* Usar lenguaje ubicuo: Es aquel que se construye a partir de los técnicos.

Ejemplo:
```javascript
//No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

//Recomendado
getUser();
```

# Nombres según el tipo de dato
* Arrays: Son listas de elementos, y se recomienda utilizar el nombre de la variable en plural.
* Booleano: Solo puede tener los valores True o False. Se recomienda usar los prefijos **"is","has", "can"**.
* Números: Puede contener números de cualquier tipo y se recominda agregar un prefijo **"min", "max", "total"**.
* Funciones: Por su naturaleza representan una acción y se recomienda iniciar su nombre con **un verbo seguido de un sustantivo**.
También existen funciones de acceso, modificación o predicado y a estas se les recomienda agregar el prefijo **"get", "set", "is"**.
* Clases: Para nombrarlas se recomienda el uso de **sustantivos**. La idea es que la clase tenga un nombre que represente una única responsabilidad.

# Ámbito de las variables
No todo es escribir buenos nombres, si no también, entender como funciona el ámbito o scope en JavaScript.
* Ámbito Global: Cualquier variable podrá ser accesada de cualquier parte de nuestro código.
* Ámbito local o de función: Este solo puede ser accedido dentro del ámbito.
* Ámbito de bloque: Funciona cuando definidos llaves donde vamos a trabajar. 
* Ámbito estático: es el comportamiento por defecto de las variables en JavaScript.

# Hosting
La declaración de variables y funciones es movida hacia arriba en tiempo de compilacIon. Esto funciona para la declaración pero no asignación de variables.

# Funciones
"Se sabe que se ha desarrollado código limpio cuando cada función hace exactamente lo que su nombre indica.
Se puede declarar funciones o expresiones de funciones. Las expresiones de funciones es la declaración de una variable que contiene una función.

# Parámetros y argumentos
* Parámetros: Son los parámetros de entrada en la defición de funciones.
* Argumentos: Son los valores que se envían a la función al momento de ejecutarla.
* Parámetro por defecto: Es cuando en la defición de una función se indica un parámetro con un valor por defecto, en el caso de que al llamar la función y no envíen argumentos se muestra el valor opcional.
* Spread operator: Nos permite recibir varios argumentos y de esta forma no tenemos que declarar una cantidad exacta de parámetros. En caso de declarar parámetros en una función, el spread siempre debe ser definido al final.
  Esto también nos sirve para copiar registros.

# Funciones de flecha
Fueron incluidas en ECMAScritp 6. Las arrow function cambian el comportamiento de this.

# Clases
Abtracción donde representams entidades. "Todos los objetos de JavaScript heredan del objeto prototipo, antes de ES6 se trabajaba de forma desordenada y posterior a ES6 tiene el soporte para trabajar con POO.
* Las clases tienen constructores, métodos y herencia.

# Tamaño reducido (Principio de responsabilidad unica)
Las funciones y clases deben cumplir con el principio de responsabilidad única, con la finalidad de tener un código más limpio, de fácil lectura y entendimiento.

# Organización de clases
Lo primero que se debería ver en una clase son:
* Variables: Son conocidas como propiedades en el mundo POO → son todos esos elementos donde vamos a guardar información.
* Constantes: Son todos esos elementos que no van a cambiar su valor, también son conocidas como propiedades
Variables estáticas → Son elementos que pueden o no estar en la clase.
* Métodos: Tus métodos son tus funciones, solo que en POO se le reconoce así, no olvides que dentro de una clase los métodos deben ser ordenados de mayor importancia a menor importancia. Lo ordenas de la siguiente manera, creas una clase y esta clase tiene un método funcional y los otros métodos que se crean es para apoyar el primer método.
* Funciones estáticas: se le dicen estáticas, ya que estas no deben ser heredadas a otra clase, solo se usan en la clase principal.
* Getters y setters: Estas permiten alterar y obtener alguna propiedad de tu clase. Recuerda esto se usa para no poder acceder directamente a la propiedad JS si lo permite, pero NO es buena práctica.

# Cuándo utilizar comentarios
El comentario no debe explicar:

❌ El ¿Qué? ⇒ porque el código debe ser Autodescriptivo
❌ El ¿Cómo? ⇒ el código debe ser Autoexplicativo
✅ Sino el ¿Por qué? // Comentar explicando los Criterios, aportando valor
“No comentes código mal escrito, reescríbelo.”
Brian Kernighan

Si bien, al usar correctamente la nomenclatura, el ordenamiento de nuestras variables, funciones y clases y respetar el principio de responsabilidad única, va a hacer que nuestro código sea mucho más fácil de entender, no significa que se deba dejar de añadir comentarios. Por ejemplo, añadir un comentario sobre alguna librería externa que se haya utilizado.

# Formato coherente (codear en equipos)
Reglas para trabajar en equipo.
Para tener un formato coherente es recomendable:
* Problemas similares, soluciones similares: seguir patrones.
* Densidad, apertura y distancia vertical: todo lo que esté relacionado, manterlo junto en las líneas de código.
* Lo más importante va primero: de la funcionalidad principal se van a llamar otras funciones o métodos y se desglosarán a partir de ahí, es más intuitivo.
* Indentación: respetar mismos espacios de tabulación (2 o 4).

# Principio DRY
*Don't repeat yourself*
El principio DRY se asegura que cuando se detecte código duplicado, este sea extraído a una clase o una función para utilizarlo en donde se necesite.

# Notación big O
La Big O notation o también conocida como la notación Big O es la expresión matemática de cuánto se tarda en ejecutar un algoritmo en función de la longitud de entrada, normalmente hablando del peor de los casos.

En la práctica se utiliza Big O para clasificar los algoritmos en función de cómo responden a los cambios en el tamaño de la entrada, por lo que los algoritmos con la misma tasa de crecimiento se representan con la misma notación. El uso de la letra O es porque la tasa de crecimiento de una función también se llama orden de la función.

Conocer Big O ayuda y facilita tu trabajo como desarrolladora al ser consciente de la eficiencia de un algoritmo que se traduce en poder crear aplicaciones con un buen rendimiento.

Ahora exploremos los tipos más comunes de Big O al utilizar JavaScript +ES6.

## Algoritmo de tiempo constante: O(1)
Este algoritmo es de orden uno y en este orden, independientemente de la complejidad, o sea, el número de elementos, el tiempo es constante.

Esto se puede observar en los algoritmos que devuelven un elemento en una posición ya conocida de un array sin importar el tipo o la longitud.

Código:
```javascript
const getLast = items => items[items.length-1];
```
Implementación:
```javascript
getLast(['a', 'b', 'c', 'd']); //> d(1 iteración)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']); //> g(1 iteración)
```
## Algoritmo de tiempo lineal: O(N)
En este tipo de algoritmos, el tiempo en el peor de los casos crece a la par que el número de elementos. Es decir, para N elementos se necesitarán N iteraciones.

Código:
```javascript
const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
   return -1;
};
```
Implementación:
```javascript
const array= ['a', 'b', 'c', 'd'];
findIndex(array, 'a'); // 0  (1 iteración)
findIndex(array, 'd'); // 3  (4 iteraciones)
findIndex(array, 'e'); // -1 (4 iteraciones)
```
## Algoritmo de tiempo cuadrático: O(N²)
En este tipo de algoritmo, el tiempo en el peor de los casos es el cuadrado del número de entradas. Esto quiere decir que el tiempo crece exponencialmente en relación con el número de entradas.

Código:
```javascript
const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++){ 
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};
```
Implementación:
```javascript
buildSquareMatrix(['a', 'b', 'c']); 

/* 9 iteraciones para 3 elementos, retorna:
[
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c']
]
/*
```
## Algoritmo de tiempo logarítmico: O(n log n)
Si se trabaja con algoritmos de búsqueda y ordenación, el enfoque suele buscar ser más eficiente cuando se trata de grandes colecciones. En lugar de buscar los elementos uno por uno, se divide los datos y se descartan muchos datos en cada iteración, por lo general la mitad o log base 2.

Si consideramos que estamos un orden log base 2, se podría idealmente encontrar un elemento específico en una colección de un millón de elementos con menos de 20 iteraciones, si se escala el tamaño de la colección a mil millones, entonces se requerían menos de 30 iteraciones.

Si eres una entusiasta del big data, entonces será fácil que imagines la ventaja que tienen este tipo de algoritmos, ya que cuanto mayor sea la colección, mayor será la eficiencia relativa que proporcionen.

Entre estos algoritmos, el más popular que podemos encontrar es el de Quicksort, el cual puede utilizarse para encontrar un elemento específico y ordenar una lista de forma muy eficiente.

Código:
```javascript
const quickSort = list => {
  if (list.length < 2) 
    return list;
  let pivot = list[0];
  let left  = []; 
  let right = [];
  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }
  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ];
};
```
Implementación:
```javascript
quickSort( ['q','a','z','w','s','x','e','d','c','r']);
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]
```