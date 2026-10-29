# Ejercicio 3: Iframe de Mapa y Múltiples Contenidos

## 📋 Cómo visualizar tu ejercicio

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
   - Navega a tu ejercicio desde el menú

3. **Actualización automática**:
   - Guarda tus cambios (Ctrl+S)
   - El navegador se actualizará automáticamente

## Objetivo

Aprender a incrustar diferentes tipos de contenido web usando iframes, incluyendo mapas de Google Maps, páginas web externas, y practicar la creación de una página con múltiples iframes bien organizados.

## 🎯 Conceptos a evaluar:

- Incrustación de Google Maps con iframe
- Incrustación de páginas web externas (como Wikipedia)
- Uso de múltiples iframes en una página
- Organización de contenido con secciones y encabezados
- Accesibilidad con atributos title descriptivos

### Documentación
[Material didáctico sobre iframes](https://webtecnodidacticahoy.web.app/html/Multimedia_e_insercion/iframes_en_detalle.html)

## Instrucciones

1. Este ejercicio se creará dentro de la carpeta `src/ejercicio-3`.

2. Crear un archivo `index.html` ubicado en la carpeta `src/ejercicio-3`.

3. Agregar los siguientes elementos a tu documento HTML:
   
   **Estructura básica HTML5:**
   - Declaración `<!DOCTYPE html>`
   - Elemento `<html>` con atributo `lang="es"`
   - Elemento `<head>` con:
     - Meta tag charset UTF-8
     - Meta tag viewport para responsividad
     - Título apropiado en la etiqueta `<title>`
   - Elemento `<body>` con el contenido

4. **Dentro del body, agregar:**
   - Un encabezado principal de nivel 1 (h1) con el texto "Galería de Iframes"
   - Un párrafo introductorio explicando el contenido de la página

5. **Implementar TRES iframes con los siguientes requisitos:**

   **Primer iframe (Mapa de Google Maps):**
   - URL de origen (src): Una URL de Google Maps embed (puedes usar cualquier ubicación)
   - Ejemplo: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976...`
   - Atributo `title`: "Mapa de [nombre del lugar]"
   - Dimensiones apropiadas (width y height)

   **Segundo iframe (Wikipedia):**
   - URL de origen (src): `https://es.wikipedia.org/wiki/HTML`
   - Atributo `title`: "Artículo de Wikipedia sobre HTML"
   - Dimensiones apropiadas (width y height)

   **Tercer iframe (Página web educativa):**
   - URL de origen de otra página web educativa o de referencia (debe usar HTTPS)
   - Atributo `title` con descripción apropiada
   - Dimensiones apropiadas (width y height)

6. **Agregar encabezados h2** antes de cada iframe para identificar cada contenido

7. **Ejemplo de estructura esperada:**

```
src/
└── ejercicio-3/
    └── index.html
```

## Requisitos Técnicos

- **Solo HTML**: No usar CSS ni JavaScript
- **Estructura válida**: Documento HTML5 bien formado
- **Mínimo 3 iframes**: La página debe tener al menos 3 iframes diferentes
- **Accesibilidad**: Todos los iframes deben tener atributo `title` descriptivo y único
- **URLs seguras**: Usar HTTPS en todos los src
- **Variedad de contenido**: Debe incluir al menos un mapa y una página web

## Verificación

Para verificar que tu solución es correcta, ejecuta:

```bash
npm test tests/ejercicio/3-iframe-mapa.test.js
```

Si todos los tests pasan (✓), tu ejercicio está completo y correcto.

## Conceptos Clave

- **Google Maps Embed**: Google Maps proporciona URLs especiales para incrustar mapas en iframes
- **Contenido diverso**: Los iframes pueden mostrar cualquier tipo de página web
- **Organización**: Usar encabezados y secciones ayuda a organizar múltiples iframes
- **Accesibilidad**: Cada iframe necesita un title único y descriptivo para usuarios con lectores de pantalla

## Cómo obtener una URL de Google Maps para embed

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca una ubicación
3. Haz clic en "Compartir"
4. Selecciona la pestaña "Insertar un mapa"
5. Copia la URL que aparece en el atributo `src` del iframe

## Ejemplo de código

![Iframe](iframe.png)

¡Buena suerte y diviértete practicando!
