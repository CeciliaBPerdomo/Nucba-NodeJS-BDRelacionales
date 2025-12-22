<div align="center">
    <img src="../Cecilia_Perdomo.png" alt="Cecilia Perdomo">
</div> 

# NodeJS - DB Relacionales

# Clase 01: Introducción a Base de datos

## Objetivos
Introducción al mundo de las base de datos.

## ¿ Qué es una base de datos ?
- 👉 Una **base de datos** es una colección organizada de información  estructurada que se almacena y se accede utilizando un sistema de gestión de bases de datos.
- 👉 Permite almacenar grandes volúmenes de datos de manera eficiento y proporcionan un acceso rápido y seguro a la información. 
- 👉 Consta de **datos**, un **sistema de gsetión de base de datos** (DBMS, por sus siglas en inglés) y **usuarios finales**.
- 👉 Los datos se pueden organziar en tablas o documentos y se relacionan entre sí mediante **claves** o **identificadores únicos**.

### Características
- 👉 **Estructura organizada**: Los datos en una base de datos se organizan em **estructuras lógicas**, como tablas, que facilitan la búsqueda y recuperación de información.
- 👉 **Acesso rápido**: Las base de datos permiten realizar consultas y búsquedas eficientes, lo que agiliza el acceso a la información requerida. 
- 👉 **Seguridad**: Las bases de datos proporcionan mecanismos para proteger la integridad y confidencialidad de datos, permitiendo restringir el acceso a usuarios autorizados.
- 👉 **Escabilidad**: Las bases de datos pueden crecer y adaptarse a medida que aumenta la cantidad de datos y usuarios.
- 👉 **Concurrencia**: Los sistemas de gestión de bases de datos pueden manejar múltiples usuarios accediendo a los datos simultáneamente, garantizando la consistencia y evitando conflictos. 

### Tipos de bases de datos
- 👉 **Base de datos relacionales**
    - Son las más comunes y utilizan el módelo relacional para organizar y almacenar los datos. 
    - Utilizan tablas con filas y columnas para representar entidades y relaciones. 
- 👉 **Base de datos no relacionales**
    - Estas mismas no utilizan el modelo relacional y se centran en la escalabilidad y la flexibildad.
    - Algunos tipos populares son: 
        - **Base de datos de documentos**: Almacenan datos en documentos JSON o similares. Por ejemplo Mongo que es BJSON.  
        - **Base de datos de grafos**: Almacenan datos en nodos y relaciones. Son útiles para analizar relaciones complejas. 
        - **Base de datos de clave-valor**: Almacenan datos como pares clave-valor. Son rápidas y eficientes para operaciones de lectura / escritura. 

## Estructura de una base de datos SQL
- 👉 **Tablas**: Las bases de datos SQL está compuestas por tablas que contienen filas y columnas para almacenar y organizar datos. 
- 👉 **Claves primarias**: Las tablas tienen claves primarias, que son identificadores únicos para cada registro en una tabla. 
- 👉 **Relaciones**: Las bases de datos en SQL permiten establecer relaciones entre tablas mediante claves foráneas, lo que facilita la asociación y consulta de datos relacionados. 
- 👉 **Claves foráneas**: Son restricciones utilizadas para establecer y mantener relaciones entre tablas en una base de datos relacional. Una clave foránea es un campo (o conhundo de campos) en una tabla que hace referencia a la clave primaria de otra tabla, estableciendo así una relación entre ellas. 

## Notación y símbolos de diagramas entidad-relación
- 👉 **Cardinalidad**: 
    - La cardinalidad en un diagrama ER indica cuántas instancias de una entidad pueden estar relacionadas con instancias de otra entidad en una relación específica. 
    - Se representa mediante símbolos como **1** (uno) o **N** (muchos).
    - Por ejemplo, una relación "1 a N" indica que una instancia de la entidad A puede estar relacionadas con varias instancias de la entidad B, pero una instancia de la entidad B solo puede estar relacionada con una instancia de la entidad A. 

    ![Cardinalidad](image.png)

    - **Uno**: indica que una instancia de una entidad está relacionada con exactamente una instancia de otra entidad en relación específica. Es una cardinalidad de uno a uno. 
    - **Muchos**: inidca que instancia de una entidad puede estar relacionada con varias instancias de otra entidad en la relación específica. Es una cardinalidad de uno a muchos. 
    - **Uno (y solo uno)**: indica que una instancia de una entidad está relacionada con exactamente una instancia de otra entidad en relación específica, y esta relación es obligatoria. No se permite la ausencia de la relación en ninguno de los lados. 
    - **Cero a uno**: Indica que una instancia de una entidad puede estar opcionalmente relacionada con una instancia de otroa entidad en la relación específica. Puede haber una relación  no haber ninguna relación. 
    - **Uno o muchos**: indica que una instancia de una entidad está relacionada con al menos una instancia, pero puede estar relacionada con varias instancias de otra entidad en la relación específica. Es similar a la cardinalidad de muchos, pero se enfatiza que debe haber al menos una relación. 
    - **Cero a muchos**: indica que una instancia de una entidad puede estar relacionada con ninguna, una o varias instancias de otra entidad en la relación específica. No hay una restricción sobre la cantidad de relaciones permitidas. 

- 👉 **Ordinalidad**:
    - La ordinalidad se refiere a la existencia obligatoria o no de una relación entre entidades. Se representa mediante símbolos como **O** (opcional) o **M** (obligatorio).
    - Por ejemplo, una relación "1 a 0" indica que una instancia de la entidad A puede estar relacionada opcionalmente con una instancia de la entidad B, mientras que una relación "1 a M" indica quue ina instancia de la entidad A debe estar relacionada obligatoriamente con una instancia de la entidad B.
