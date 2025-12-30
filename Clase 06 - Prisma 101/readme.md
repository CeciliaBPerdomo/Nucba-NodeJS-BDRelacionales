<div align="center">
    <img src="../Cecilia_Perdomo.png" alt="Cecilia Perdomo">
</div> 

# Clase 06: Prisma 101

## Objetivos
Conocer al ORM Prisma para utilizarlo con SQL.

## Documentación oficial
- Documentación oficial de Prisma: `https://www.prisma.io/docs`
- MongoDB: `https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/mongodb`

## ¿ Qué es un ORM ?
- 👉 **ORM** significa Object Relational Mapping.
- 👉 Es una técnica que permite interactuar con una base de datos utilizando objectos y clases en lugar de consultas SQL directas. 
- 👉 Facilita el desarrollo al abstraer la lógica de la base de datos y permite operaciones más naturales en lenguajes de programación.

### Ventajas de usar un ORM
- 👉 Abstracción de la base de datos, evitando escribir consultas SQL complejas. 
- 👉 Mayor productividad y rápidez en el desarrollo. 
- 👉 Reducción de errores y mejor mantenibilidad del código.
- 👉 Portabilidad y compatibilidad con diferentes base de datos. 

## ¿ Qué es Prisma ? 
- 👉 Prisma es un moderno ORM y herramienta de base de datos para Node.js y TypeScript. 
- 👉 Ofrece una forma intuitiva de interacturar con la base de datos utilizando código en lugar de SQL. 
- 👉 Proporciona módelos de datos, consulta y migraciones en un solo lugar. 

### Prisma sobre otros ORM
- 👉 Comparativa con otros ORM populares como Sequeliza, TypeORM, etc.
- 👉 Prisma se destaca por su rendimiento, tipo seguro y facilidad de uso.
- 👉 Soporte completo para TypeScript y una integración perfecta con bases de datos modernas como PostgresSQL, MySQL, SQLite y SQL Server, MongoDB. 

### Ventajas de Prisma
- 👉 Generación automática de esquemas de base de datos desde el código. 
- 👉 Soporte para consultas complejas y relaciones.
- 👉 Migraciones y control de versiones de la base de datos.
- 👉 Integración nativa con GraphQL y otras tecnologías modernas.

### Proyecto con Prisma
- 👉 Inicializa un nuevo proyecto con Prisma: `npx prisma init`.
- 👉 Genera el archivo `schema.prisma` para definir el esquema de la base de datos. 
- 👉 Configura la conexión a la base de datos en el archivo `schema.prisma`.

### Migración de la base de datos
- 👉 Crea una migración llamada **init** para la base de datos: `npx prisma migrate dev --name init`.
- 👉 Aplica la migración a la base de datos con los cambios en el esquema.
- 👉 Utilizado para gestionar cambios en el esquema de la base de datos de manera controlada. 

## ¿ Qué es una migración ?
- 👉 Una migración en Prisma es un conjunto de cambios en el esquema de la base de datos que se aplican de manera controlada.
- 👉 Permite realizar modificaciones en la estructura de la base de datos sin perder datos existentes.
- 👉 Las migraciones mantienen la integridad de los datos y aseguran que la base de datos esté sincronizada con los módelos de Prisma.

## Schema
- 👉 Es una descripción de la estrucutra de datos de tu aplicación.
- 👉 Define cómo se ven las tablas de la base de datos, que campos tienen, cómo están relacionados entre sí y cómo se pueden acceder y manipular desde tu código.
- 👉 Prisma actúa como un módelo de datos que te permite trabajar con la base de datos de una manera más programática y segura, sin tener que escribir consultas SQL directamente.

```ts
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url = env("DATABASE_URL")
}
```

### Generator Client
- 👉 Especifica que se generará un cliente en Prisma para interactuar con la base de datos. 
- 👉 El cliente de Prisma es una biblioteca que te permite realizar operaciones de lectura y escritura en la base de datos de manera segura y optimizada. 
- 👉 La línea `provider = "prisma-client-js"` indica que se generará un cliente en JavaScript. 

### Datasource db
- 👉 Se define la fuente de datos que Prisma utilizará para acceder a la base de datos. 
- 👉 En este caso, usando PostreSQL como el proveedor de la base de datos. 
- 👉 La línea `url = env("DATABASE_URL")` indica que la URL de la base de datos se tomará de una variable de entorno llamada **DATABASE_URL**. Esto es útil para mantener información sensible, como credenciales de base de datos, fuera del código fuente. 