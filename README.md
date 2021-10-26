Proyecto Carrito React.js Coderhouse
Hecho por Alan Gimenez

Todo el proyecto esta hecho en components, estructurando las diferentes secciones y sus componentes
en carpetas separadas, y dejando separados los componentes comunes a todos las secciones y los 
componentes que no se renderizan por contener funciones que son solo para el funcionamiento de la aplicación.

El proyecto aún no está finalizado, dado que por motivos personales no pude dedicarle todo el tiempo 
que hubiera deseado postcurso. Sin embargo, el funcionamiento de la aplicación creo que es bastante aceptable.

Faltaría agregarle contenido a las secciones en blanco, así como quizas agregar algún filtro por precio o similar en la sección libros. Adicionalmente, en la vista individual de cada libro podría agregarse al final algun carrousel de productos relacionados por ejemplo. En el carrito se podrían agregar mas datos para hacerlo mas real (agregar unidades o sacar unidades directamente desde el carrito con una botonera similar a la que tiene la vista detallada de cada producto, por ejemplo). Adicionalmente, en el modal final podría incorporarse un detalle con el número de pedido (dado por firebase), y un breve resumen de los datos cargados.

Por otro lado, quizas los nombres de ciertas variables no son los mejores, quedaron instaladas algunas cositas que no se utilizan y falto fusionar el ItemListContainer con ItemListContainerFilter (uno muestra todos los libros, el otro los filtra dependiendo el idioma). 

De todas maneras, como mencionaba, creo que el funcionamiento para el tiempo que pude dedicarle al final es bastante aceptable: los productos se puede visualizar, los stock se actualizan con los pedidos, siendo también los mismos registrados en firebase, las botoneras tienen controles para no bajar de cero unidades ni exceder el stock, el carrito puede limpiarse con solo un boton y se le agrego algún efecto porque quería probar como era agregar otras librerias a React.js (para estilo se uso casi todo BS y para los efectos WoW.js). Me hubiera gustado hacer mas cosas (hacer el login de usuario, alguna parte para visualizar pedidos usando algun user especifico, completar la sección de cursos con mas "productos" que obviamente serían cursos que se podrían adquirir, y obviamente terminar los estilos entre otros).

El funcionamiento en sí de la pagina es bastante sencillo: la información en las secciones Libros y Categorias se carga desde Firebase, redireccionando al dar en Ver Detalle a la vista individual de cada producto, donde traera la información de ese producto especificamente desde Firebase. Al seleccionar cuantas unidades se desean, se puede ir directamente al carrito o volver para seguir comprando. En el carrito, el mismo puede limpiarse por articulo o por completo. La información mostrada en el carrito proviene del Context, que almacenará toda la información hasta confirmada la compra. Solo una vez rellenado el formulario con los datos personales se podrá dar click en Comprar, lo cual registrará el pedido en Firebase y dejará un mensaje de compra exitosa. 

Se adjunta video con un ejemplo del funcionamiento de la pagina, y el proyecto subido a GitHub (en funcionamiento).

Video: https://screenrec.com/share/aYDRkHnxCj
Proyecto andando en GitHub: https://alangimenez.github.io/libros

Agradezco cualquier feedback adicional a los temas a mejorar que comentaba lineas arriba, y muchas gracias por todo! Alan.