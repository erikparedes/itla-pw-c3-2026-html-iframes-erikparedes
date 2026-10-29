const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 3: Iframe de Mapa y Múltiples Contenidos', () => {
  const rootPath = path.join(__dirname, '../../');
  const filePath = path.join(rootPath, 'src', 'ejercicio-3', 'index.html');
  
  test('La carpeta src/ejercicio-3 debe existir', () => {
    const exercisePath = path.join(rootPath, 'src', 'ejercicio-3');    
    expect(fs.existsSync(exercisePath)).toBe(true);    
    const stats = fs.statSync(exercisePath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('El archivo src/ejercicio-3/index.html debe existir', () => {    
    expect(fs.existsSync(filePath)).toBe(true);        
    const stats = fs.statSync(filePath);
    expect(stats.isFile()).toBe(true);
  });

  test('El archivo debe tener estructura HTML5 básica correcta', () => {      
    expect(fs.existsSync(filePath)).toBe(true);     
    const content = fs.readFileSync(filePath, 'utf8');
      
    expect(content).toMatch(/<!DOCTYPE\s+html>/i);
    expect(content).toMatch(/<html[^>]*lang\s*=\s*["']es["']/i);
    expect(content).toMatch(/<head[^>]*>/i);
    expect(content).toMatch(/<\/head>/i);
    expect(content).toMatch(/<body[^>]*>/i);
    expect(content).toMatch(/<\/body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('El head debe contener meta charset UTF-8 y viewport', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toMatch(/<meta[^>]*charset\s*=\s*["']?UTF-8["']?/i);
    expect(content).toMatch(/<meta[^>]*name\s*=\s*["']viewport["'][^>]*>/i);
  });

  test('Debe contener un encabezado h1 con texto "Galería de Iframes"', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h1 = document.querySelector('h1');
    
    expect(h1).toBeTruthy();
    expect(h1.textContent).toMatch(/galer[ií]a\s+(de\s+)?iframe/i);
  });

  test('Debe contener al menos un párrafo introductorio', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const paragraph = document.querySelector('p');
    
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent.length).toBeGreaterThan(20);
  });

  test('Debe contener al menos 3 iframes', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    expect(iframes.length).toBeGreaterThanOrEqual(3);
  });

  test('Todos los iframes deben tener atributo src con URL HTTPS válida', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    expect(iframes.length).toBeGreaterThan(0);
    
    iframes.forEach(iframe => {
      const src = iframe.getAttribute('src');
      expect(src).toBeTruthy();
      expect(src).toMatch(/^https:\/\//);
    });
  });

  test('Todos los iframes deben tener atributo title para accesibilidad', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
      expect(iframe.hasAttribute('title')).toBe(true);
      const title = iframe.getAttribute('title');
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(5);
    });
  });

  test('Todos los iframes deben tener atributos de dimensión (width y/o height)', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
      const hasWidth = iframe.hasAttribute('width') || iframe.style.width;
      const hasHeight = iframe.hasAttribute('height') || iframe.style.height;
      
      expect(hasWidth || hasHeight).toBe(true);
    });
  });

  test('Debe incluir al menos un iframe de Google Maps', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    const hasMapIframe = Array.from(iframes).some(iframe => {
      const src = iframe.getAttribute('src');
      return src && (
        src.includes('google.com/maps') || 
        src.includes('maps.google.com')
      );
    });
    
    expect(hasMapIframe).toBe(true);
  });

  test('Debe incluir al menos un iframe de página web (Wikipedia u otra)', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    const hasWebIframe = Array.from(iframes).some(iframe => {
      const src = iframe.getAttribute('src');
      return src && (
        src.includes('wikipedia.org') ||
        src.includes('.edu') ||
        src.includes('.org') ||
        (src.startsWith('https://') && !src.includes('youtube') && !src.includes('maps'))
      );
    });
    
    expect(hasWebIframe).toBe(true);
  });

  test('Debe contener al menos 2 encabezados h2 para organizar el contenido', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h2Elements = document.querySelectorAll('h2');
    
    expect(h2Elements.length).toBeGreaterThanOrEqual(2);
  });
});
