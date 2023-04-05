# [TP2: Visualización de Datos - Astronautas que participaron en misiones espaciales 🚀](https://github.com/florianreyes/Visualizacion_Cantarovici_Reyes)

## Integrantes
- [Nicolás Cantarovici 🧑🏼‍🚀](https://github.com/nicocanta20) 
- [Florian Reyes 🧑🏼‍🚀](https://github.com/florianreyes)

## Introducción
En el trabajo, se busca explorar y analizar el conjunto de datos de astronautas que participaron en misiones espaciales a través del diseño de distintas visualizaciones. El objetivo es familiarizarse con la librería de visualización Plot.js.

## [Dataset 💾](https://github.com/visualizacion-de-datos-utdt/vd_astronautas)
El conjunto de datos astronautas.csv contiene información sobre astronautas que participaron en misiones espaciales desde 2010 hasta 2020. Contiene 158 registros, en donde cada fila representa un astronauta participante de una misión espacial. Los campos incluyen nombre, género, año de nacimiento, nacionalidad, estatus militar o civil, título profesional, año de la misión, edad del astronauta cuando realizó la misión, duración de la misión en horas y duración de las actividades extravehiculares (EVA) en horas.

## Decisiones de Diseño 🎨

### Visualización 1: Gráfico de Linea y Puntos
Esta visualización crea un gráfico de línea y puntos que muestra la relación entre el año de la misión y la duración total de la misión en horas para un conjunto de datos de astronautas que participaron en misiones espaciales. Elegimos este tipo de visualizacion dado que solo poner puntos no mostraría unidad y haría la lectura del gráfico menos fluída.

Este tipo de visualización permite identificar tendencias en la duración de las misiones a lo largo del tiempo, lo que puede ser útil para analizar el progreso y evolución de la exploración espacial. Además, la inclusión de puntos de colores en ciertos años o valores agregados puede ayudar a resaltar datos importantes, en este caso el pico de horas.

### Visualización 2: Gráfico de Barras
El gráfico de barras es ideal para representar los datos categóricos de nacionalidad y género de astronautas en misiones espaciales, ya que permite fácil y claramente la comparación entre diferentes grupos. Los gráficos de barras facilitan la identificación de patrones en los datos con barras organizadas por nacionalidad y diferenciadas por género, lo que mejora la interpretación de los datos presentados.

Además, este grafico es altamente customizable, permitiendo cambiar el esquemas de colores, leyendas y títulos. En este caso particular, utilizamos un esquema de colores para distinguir los géneros y una leyenda que describe el significado de cada color. Esta combinación de características hace que el gráfico de barras sea una opción efectiva para visualizar los datos de astronautas por género y nacionalidad.

### Visualización 3: Gráfico de puntos y rayas
Este gráfico utiliza un puntos y líneas para representar la relación entre la duración en horas de las misiones espaciales y la nacionalidad de los astronautas involucrados. La razón detrás de esta selección es que muestra claramente la dispersión de los datos individuales utilizando puntos, mientras que las líneas representan la duración promedio de la misión de cada nacionalidad, permitiendo una fácil comparación entre los países.

El uso de colores para representar las diferentes nacionalidades es útil para mejorar la legibilidad y la diferenciación de los datos, mientras que la faceta del gráfico permite observar la distribución de cada nacionalidad de manera independiente.

### Visualización 4: Gráfico de barras 
En esta visualización podemos observar un gráfico de barras que representa la cantidad total de horas de misión por nacionalidad para los astronautas en un conjunto de datos, diferenciando entre aquellos con ocupación de ingeniero aeroespacial y otros. Este gráfico es especialmente útil para comparar las horas de misión acumuladas por nacionalidad y para destacar la contribución de los ingenieros aeroespaciales en cada país.

El gráfico de barras ordena los datos según la nacionalidad en el eje X y muestra la cantidad total de horas de la misión en el eje Y. Las barras se colorean en función de la ocupación del astronauta, siendo rojo para los ingenieros aeroespaciales y gris para otras ocupaciones. De esta manera, permite visualizar fácilmente las diferencias en la cantidad total de horas de misión acumuladas entre las nacionalidades y la contribución de los ingenieros aeroespaciales en cada país. Este tipo de gráfico es beneficioso tanto para el análisis de las tendencias de las misiones por nacionalidad como para el estudio de la participación de los ingenieros aeroespaciales en las misiones espaciales.

## Transformación de Datos 🔧
- Se eliminaron paises en ambos graficos de barras que no eran representativos
- En graficos de barras se agruparon datos por paises, generos y ocupaciones
- Se computaron sumas y promedios de datos en el grafico titulado: "10.000 horas en el espacio"

## Marcas y Canales Utilizados 📊
Se utilizaron diferentes marcas y canales de codificación para representar visualmente los atributos del conjunto de datos. Entre las marcas utilizadas se encuentran barras, puntos y líneas. Entre los canales utilizados se encuentran color, tamaño forma y opacidad.

## Tecnologías y Librerías Utilizadas 💻
Para la visualización de datos, se utilizó la librería Plot.js en conjunto con HTML y CSS para crear las visuales web.

## Conclusiones 📖
A partir del análisis y visualización del conjunto de datos de astronautas que participaron en misiones espaciales, se pudo observar diferentes patrones y relaciones entre los atributos. Se utilizó Plot.js para representar visualmente estos patrones y se ajustó el diseño de cada visualización para resaltar los datos más relevantes. En conclusion podemos ver que el campo de la astronautica esta fuertemente dominado por una poblacion masculina de ingenieros aeronauticos, hay grandes influencias de potencias mundiales como Estados Unidos y Rusia, y ha habido un fuerte pico de misiones entre 2016 y 2018. 