const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 2: Iframe de Video (YouTube)', () => {
  const rootPath = path.join(__dirname, '../../');
  const filePath = path.join(rootPath, 'src', 'ejercicio-2', 'index.html');
  
  test('La carpeta src/ejercicio-2 debe existir', () => {
    const exercisePath = path.join(rootPath, 'src', 'ejercicio-2');    
    expect(fs.existsSync(exercisePath)).toBe(true);    
    const stats = fs.statSync(exercisePath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('El archivo src/ejercicio-2/index.html debe existir', () => {    
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

  test('Debe contener un encabezado h1 con texto "Iframes de Video"', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h1 = document.querySelector('h1');
    
    expect(h1).toBeTruthy();
    expect(h1.textContent).toMatch(/iframes?\s+(de\s+)?video/i);
  });

  test('Debe contener al menos un párrafo introductorio', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const paragraph = document.querySelector('p');
    
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent.length).toBeGreaterThan(20);
  });

  test('Debe contener al menos 2 iframes', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    expect(iframes.length).toBeGreaterThanOrEqual(2);
  });

  test('Todos los iframes deben tener atributo src con URL válida de video', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    expect(iframes.length).toBeGreaterThan(0);
    
    iframes.forEach(iframe => {
      const src = iframe.getAttribute('src');
      expect(src).toBeTruthy();
      expect(src).toMatch(/^https:\/\//);
      // Verificar que es URL de video (YouTube, Vimeo, etc.)
      expect(src).toMatch(/(youtube\.com\/embed|youtu\.be|vimeo\.com)/i);
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

  test('Todos los iframes deben tener atributos width y height', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
      const hasWidth = iframe.hasAttribute('width') || iframe.style.width;
      const hasHeight = iframe.hasAttribute('height') || iframe.style.height;
      
      expect(hasWidth).toBe(true);
      expect(hasHeight).toBe(true);
    });
  });

  test('Al menos un iframe debe tener atributo allowfullscreen', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    const hasAllowFullscreen = Array.from(iframes).some(iframe => {
      return iframe.hasAttribute('allowfullscreen');
    });
    
    expect(hasAllowFullscreen).toBe(true);
  });

  test('Debe contener al menos un encabezado h2 para organizar el contenido', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h2 = document.querySelector('h2');
    
    expect(h2).toBeTruthy();
  });
});
