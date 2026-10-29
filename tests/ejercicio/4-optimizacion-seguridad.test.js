const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 4: Optimización y Seguridad en Iframes', () => {
  const rootPath = path.join(__dirname, '../../');
  const filePath = path.join(rootPath, 'src', 'ejercicio-4', 'index.html');
  
  test('La carpeta src/ejercicio-4 debe existir', () => {
    const exercisePath = path.join(rootPath, 'src', 'ejercicio-4');    
    expect(fs.existsSync(exercisePath)).toBe(true);    
    const stats = fs.statSync(exercisePath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('El archivo src/ejercicio-4/index.html debe existir', () => {    
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

  test('Debe contener un encabezado h1 con texto relacionado a optimización y seguridad', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h1 = document.querySelector('h1');
    
    expect(h1).toBeTruthy();
    expect(h1.textContent).toMatch(/(optimizaci[oó]n|seguridad|iframe)/i);
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

  test('Todos los iframes deben tener dimensiones (width y/o height)', () => {
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

  test('Al menos 2 iframes deben usar loading="lazy" para optimización', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    const lazyIframes = Array.from(iframes).filter(iframe => {
      return iframe.getAttribute('loading') === 'lazy';
    });
    
    expect(lazyIframes.length).toBeGreaterThanOrEqual(2);
  });

  test('Al menos 1 iframe debe tener el atributo sandbox para seguridad', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    const sandboxIframes = Array.from(iframes).filter(iframe => {
      return iframe.hasAttribute('sandbox');
    });
    
    expect(sandboxIframes.length).toBeGreaterThanOrEqual(1);
  });

  test('Debe contener al menos 2 encabezados h2 para organizar el contenido', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h2Elements = document.querySelectorAll('h2');
    
    expect(h2Elements.length).toBeGreaterThanOrEqual(2);
  });

  test('Debe incluir contenido variado (al menos un video o página web externa)', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    const hasVariedContent = Array.from(iframes).some(iframe => {
      const src = iframe.getAttribute('src');
      return src && (
        src.includes('youtube') || 
        src.includes('wikipedia') || 
        src.includes('maps') ||
        src.includes('vimeo')
      );
    });
    
    expect(hasVariedContent).toBe(true);
  });
});
