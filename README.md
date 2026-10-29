# Ejercicios de Iframes en HTML

## 📋 Cómo visualizar tus ejercicios

Para visualizar tus archivos HTML mientras trabajas:

1. **Instalar Live Server** (si no lo tienes):
   - Ve a las extensiones de VS Code (Ctrl+Shift+X)
   - Busca "Live Server" de Ritwick Dey
   - Haz clic en instalar

2. **Usar Live Server**:
   - Abre el archivo `src/index.html`
   - Haz clic derecho en el archivo
   - Selecciona "Open with Live Server"
   - El navegador se abrirá automáticamente
   - Navega a tus ejercicios desde el menú

3. **Actualización automática**:
   - Guarda tus cambios (Ctrl+S)
   - El navegador se actualizará automáticamente

---

Este repositorio contiene una carpeta llamada "ejercicios" donde encontrarás un archivo por cada ejercicio a realizar. Cada ejercicio incluye pruebas automatizadas para autocorrección y calificación automática.

## Estructura del Proyecto

```
./
├── ejercicios/          # Archivos .md con instrucciones de cada ejercicio
├── src/                 # Carpeta donde trabajarás (crear tus archivos HTML aquí)
├── tests/              # Pruebas automatizadas (no tocar ni modificar nada)
├── .github/workflows/  # Configuración de GitHub Actions (no tocar ni modificar nada)
└── package.json        # Dependencias para las pruebas (no tocar ni modificar nada)
```

## Ejercicios

### Ejercicio 1: Estructura Básica y Primer Iframe
**Conceptos**: Sintaxis básica de iframes, atributo src, title, dimensiones  
**Archivo de instrucciones**: [ejercicios/ejercicio-1-estructura-basica-iframe.md](ejercicios/ejercicio-1-estructura-basica-iframe.md)  
**Verificación**: `npm test tests/ejercicio/1-estructura-basica-iframe.test.js`

Aprende la sintaxis fundamental de los iframes, creando tu primera página con un iframe incrustado que muestra contenido web externo.

---

### Ejercicio 2: Iframe de Video (YouTube)
**Conceptos**: Incrustación de videos, URLs de embed, allowfullscreen, múltiples iframes  
**Archivo de instrucciones**: [ejercicios/ejercicio-2-iframe-video.md](ejercicios/ejercicio-2-iframe-video.md)  
**Verificación**: `npm test tests/ejercicio/2-iframe-video.test.js`

Aprende a incrustar videos de plataformas como YouTube usando iframes, configurando atributos especiales para reproductores de video.

---

### Ejercicio 3: Iframe de Mapa y Múltiples Contenidos
**Conceptos**: Google Maps embed, variedad de contenido, organización con encabezados  
**Archivo de instrucciones**: [ejercicios/ejercicio-3-iframe-mapa.md](ejercicios/ejercicio-3-iframe-mapa.md)  
**Verificación**: `npm test tests/ejercicio/3-iframe-mapa.test.js`

Aprende a incrustar mapas de Google Maps y otros tipos de contenido web, creando una galería organizada de iframes.

---

### Ejercicio 4: Optimización y Seguridad en Iframes
**Conceptos**: loading="lazy", sandbox, HTTPS, mejores prácticas  
**Archivo de instrucciones**: [ejercicios/ejercicio-4-optimizacion-seguridad.md](ejercicios/ejercicio-4-optimizacion-seguridad.md)  
**Verificación**: `npm test tests/ejercicio/4-optimizacion-seguridad.test.js`

Aprende a implementar buenas prácticas de optimización y seguridad en iframes, usando carga diferida y restricciones de seguridad.

## Ejecución de Pruebas

Para ejecutar las pruebas localmente y verificar tu trabajo:

### Ejecutar todos los tests
```bash
npm install
npm test
```

### Ejecutar un test específico
```bash
# Ejercicio 1
npm test tests/ejercicio/1-estructura-basica-iframe.test.js

# Ejercicio 2
npm test tests/ejercicio/2-iframe-video.test.js

# Ejercicio 3
npm test tests/ejercicio/3-iframe-mapa.test.js

# Ejercicio 4
npm test tests/ejercicio/4-optimizacion-seguridad.test.js
```

## Cómo Usar Este Repositorio

1. Clona el repositorio en tu máquina local o codespace.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias ejecutando `npm install`.
4. Completa los ejercicios siguiendo las instrucciones en los archivos .md de cada ejercicio ubicados en la carpeta ejercicios.
5. Ejecuta las pruebas utilizando `npm test` para verificar tu trabajo.

¡Buena suerte y diviértete aprendiendo HTML!