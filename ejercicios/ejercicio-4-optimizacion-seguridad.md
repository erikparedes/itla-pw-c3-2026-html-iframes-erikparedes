# Ejercicio 4: Optimización y Seguridad en Iframes

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

Aprender a implementar buenas prácticas de optimización y seguridad en iframes, incluyendo el uso de `loading="lazy"` para carga diferida y el atributo `sandbox` para restricciones de seguridad.

## 🎯 Conceptos a evaluar:

- Atributo `loading="lazy"` para optimización de rendimiento
- Atributo `sandbox` para seguridad
- Uso correcto de URLs HTTPS
- Implementación completa de mejores prácticas
- Combinación de todos los conceptos aprendidos

### Documentación
[Material didáctico sobre iframes](https://webtecnodidacticahoy.web.app/html/Multimedia_e_insercion/iframes_en_detalle.html)

## Instrucciones

1. Este ejercicio se creará dentro de la carpeta `src/ejercicio-4`.

2. Crear un archivo `index.html` ubicado en la carpeta `src/ejercicio-4`.

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
   - Un encabezado principal de nivel 1 (h1) con el texto "Iframes: Optimización y Seguridad"
   - Un párrafo introductorio explicando las buenas prácticas

5. **Implementar TRES iframes con las siguientes características:**

   **Primer iframe (Con loading lazy):**
   - URL de origen: Un video de YouTube (URL embed)
   - Atributo `title` descriptivo
   - Atributo `loading="lazy"` para carga diferida
   - Atributo `allowfullscreen`
   - Dimensiones apropiadas (width y height)

   **Segundo iframe (Con sandbox):**
   - URL de origen: Una página web externa segura (Wikipedia, MDN, etc.)
   - Atributo `title` descriptivo
   - Atributo `sandbox` (puede estar vacío o con valores específicos)
   - Atributo `loading="lazy"`
   - Dimensiones apropiadas

   **Tercer iframe (Combinación completa):**
   - URL de origen: Google Maps u otro contenido
   - Atributo `title` descriptivo
   - Atributo `loading="lazy"`
   - Dimensiones apropiadas
   - URL debe ser HTTPS

6. **Agregar encabezados h2** antes de cada iframe explicando la característica de seguridad/optimización

7. **Ejemplo de estructura esperada:**

```
src/
└── ejercicio-4/
    └── index.html
```

## Requisitos Técnicos

- **Solo HTML**: No usar CSS ni JavaScript
- **Estructura válida**: Documento HTML5 bien formado
- **Mínimo 3 iframes**: Todos con diferentes características de optimización/seguridad
- **Loading lazy**: Al menos 2 iframes deben tener `loading="lazy"`
- **Sandbox**: Al menos 1 iframe debe tener el atributo `sandbox`
- **Accesibilidad**: Todos los iframes deben tener atributo `title` descriptivo
- **URLs seguras**: Todas las URLs deben usar HTTPS

## Verificación

Para verificar que tu solución es correcta, ejecuta:

```bash
npm test tests/ejercicio/4-optimizacion-seguridad.test.js
```

Si todos los tests pasan (✓), tu ejercicio está completo y correcto.

## Conceptos Clave

### Loading Lazy
- **Propósito**: Mejora el rendimiento al cargar iframes solo cuando estén cerca de ser visibles
- **Sintaxis**: `<iframe loading="lazy" ...>`
- **Beneficio**: Reduce el tiempo de carga inicial de la página

### Sandbox
- **Propósito**: Restringe las acciones que puede realizar el contenido del iframe
- **Sintaxis**: `<iframe sandbox ...>` o `<iframe sandbox="allow-scripts allow-forms" ...>`
- **Beneficio**: Aumenta la seguridad al limitar el contenido incrustado

### URLs HTTPS
- **Propósito**: Garantiza que el contenido se transmita de forma segura
- **Sintaxis**: `src="https://..."`
- **Beneficio**: Protege contra ataques man-in-the-middle

## Valores comunes del atributo sandbox

- `allow-scripts`: Permite la ejecución de scripts
- `allow-forms`: Permite el envío de formularios
- `allow-same-origin`: Trata el contenido como del mismo origen
- Vacío: Aplica todas las restricciones

## Ejemplo de código

![Iframe](iframe.png)

## Consideraciones de Seguridad

- Siempre usa URLs de fuentes confiables
- Considera usar `sandbox` para contenido de terceros
- Usa HTTPS para todas las URLs
- Ten cuidado con el clickjacking
- No incrustes contenido sensible sin las protecciones adecuadas

¡Buena suerte y diviértete programando!
