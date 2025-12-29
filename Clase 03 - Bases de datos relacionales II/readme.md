<div align="center">
    <img src="../Cecilia_Perdomo.png" alt="Cecilia Perdomo">
</div> 

# Clase 03: Bases de datos relacionales II

## Objetivos
Realizar consultas posbiles en un CRUD y selects avanzados

## Consultas

### Tabla camadas
👉 Seleccionar todo desde camadas
```sql
    SELECT * FROM camadas
```

👉 Agregar valores en camadas
```sql
    INSERT INTO camadas (nombre, dias) 
    VALUES (3017, 'Lunes y miércoles')
```

👉 Seleccionar dónde el id sea igual a 3 
```sql
    SELECT * FRom camadas WHERE id = 3
```

👉 Seleccionar dónde los días sean martes y jueves
```sql
    SELECT * FROM camadas 
    WHERE dias = 'Martes y jueves'
```

👉 Seleccionar dónde los días sean martes y jueves y el id sea mayor a 3
```sql
     SELECT * FROM camadas 
     WHERE dias = 'Martes y jueves' AND id > 3
```

👉 Actualizar la información
```sql
    UPDATE camadas 
    SET dias = 'Sábados' 
    WHERE nombre = '3017'
```

👉 Borrar toda la tabla
```sql
    DELETE FROM camadas
```

👉 Borrar datos dónde los días sean martes y jueves
```sql
    DELETE FROM camadas 
    WHERE dias 'Martes y jueves'
```

👉 Borrar datos dónde el id sea 7
```sql
    DELETE FROM camadas 
    WHERE id = 7
```

👉 Elimina la tabla completa
```sql
    DROP TABLE camadas;
```

### Tabla alumno

👉 Crear tabla alumno
```sql
    CREATE TABLE alumno (
        id      serial          not null    primary key, 
        nombre  varchar(255)    not null,
        email   varchar(150)    not null,
        edad    int             not null
    )
```

👉 Mostrar los primeros 15 registros 
```sql
    SELECT * FROM alumno limit 15
```

👉 Mostrar los mayores a 29
```sql
    SELECT * FROM alumno 
    WHERE edad > 29
```

👉 Mostrar los mayores o igual a 29
```sql
    SELECT * FROM alumno 
    WHERE edad >= 29
```

👉 Mostrar los mayores a 29 y se llamen José
```sql
    SELECT * FROM alumno 
    WHERE edad > 29 AND nombre = 'José'
```

👉 Mostrar los mayores a 29 o se llamen José
```sql
    SELECT * FROM alumno 
    WHERE edad > 29 or nombre = 'José'
```

👉 Mostrar los que no se llamen José
```sql
    SELECT * FROM alumno 
    WHERE nombre != 'José'
```

👉 Mostrar los alumnos que tienen entre 38 y 32
```sql
    SELECT * FROM alumno 
    WHERE edad BETWEEN 28 AND 32
```

👉 Coincidencia parcial
```sql
    SELECT * FROM alumno 
    WHERE mail LIKE '%hotmail%'
```

```sql
    SELECT * FROM alumno 
    WHERE mail LIKE '%gmail.com'
```

```sql
    SELECT * FROM alumno 
    WHERE mail LIKE 'juan@%'
```

👉 Mostrar los alumnos ordenados ascendentes por edad 
```sql
    SELECT * FROM alumno 
    ORDER BY edad asc
```

👉 Mostrar los alumnos ordenados descendentes por edad 
```sql
    SELECT * FROM alumno 
    ORDER BY edad desc
```

👉 Mostrar solo la columnas del id y nombre
```sql
    SELECT id, nombre FROM alumno 
```

👉 Mostrar solo la columnas del id y nombre pero le doy un apodo a la columna como name
```sql
    SELECT id, nombre AS name FROM alumno 
```