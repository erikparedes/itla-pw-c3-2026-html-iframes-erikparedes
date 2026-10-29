# Ejercicio 1: Estructura Básica y Primer Iframe

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

Aprender la sintaxis básica de iframes en HTML, creando tu primera página con un iframe incrustado y entendiendo la estructura fundamental del documento.

## 🎯 Conceptos a evaluar:

- Estructura HTML básica correcta
- Sintaxis del elemento iframe
- Atributo `src` para especificar la URL del contenido
- Atributo `title` para accesibilidad
- Atributos `width` y `height` para dimensiones

### Documentación
[Material didáctico sobre iframes](https://webtecnodidacticahoy.web.app/html/Multimedia_e_insercion/iframes_en_detalle.html)

## Instrucciones

1. Este ejercicio se creará dentro de la carpeta `src/ejercicio-1`.

2. Crear un archivo `index.html` ubicado en la carpeta `src/ejercicio-1`.

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
   - Un encabezado principal de nivel 1 (h1) con el texto "Mi Primer Iframe"
   - Un párrafo descriptivo explicando qué es un iframe (mínimo 30 caracteres)

5. **Implementar un iframe con los siguientes requisitos:**
   - URL de origen (src): `https://es.wikipedia.org/wiki/HTML`
   - Atributo `title` con descripción: "Artículo de Wikipedia sobre HTML"
   - Ancho (width): 600
   - Alto (height): 400

6. **Ejemplo de estructura esperada:**

```
src/
└── ejercicio-1/
    └── index.html
```
## Requisitos Técnicos

- **Solo HTML**: No usar CSS ni JavaScript
- **Estructura válida**: Documento HTML5 bien formado
- **Accesibilidad**: El iframe debe tener atributo `title` descriptivo
- **URLs seguras**: Usar HTTPS en el src del iframe

## Verificación

Para verificar que tu solución es correcta, ejecuta:

```bash
npm test tests/ejercicio/1-estructura-basica-iframe.test.js
```

Si todos los tests pasan (✓), tu ejercicio está completo y correcto.

## Conceptos Clave

- **Iframe**: Elemento HTML que permite incrustar otra página web dentro de la página actual
- **Atributo src**: Especifica la URL del contenido a mostrar en el iframe
- **Atributo title**: Proporciona una descripción accesible del contenido del iframe para lectores de pantalla
- **Dimensiones**: Los atributos width y height controlan el tamaño del iframe en píxeles

## Ejemplo de código

![Iframe](iframe.png)

¡Buena suerte y diviértete practicando!
