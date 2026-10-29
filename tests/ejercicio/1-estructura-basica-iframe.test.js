const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 1: Estructura Básica y Primer Iframe', () => {
  const rootPath = path.join(__dirname, '../../');
  const filePath = path.join(rootPath, 'src', 'ejercicio-1', 'index.html');
  
  test('La carpeta src/ejercicio-1 debe existir', () => {
    const exercisePath = path.join(rootPath, 'src', 'ejercicio-1');    
    expect(fs.existsSync(exercisePath)).toBe(true);    
    const stats = fs.statSync(exercisePath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('El archivo src/ejercicio-1/index.html debe existir', () => {    
    expect(fs.existsSync(filePath)).toBe(true);        
    const stats = fs.statSync(filePath);
    expect(stats.isFile()).toBe(true);
  });

  test('El archivo debe tener estructura HTML5 básica correcta', () => {      
    expect(fs.existsSync(filePath)).toBe(true);     
    const content = fs.readFileSync(filePath, 'utf8');
      
    expect(content).toMatch(/<!DOCTYPE\s+html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head[^>]*>/i);
    expect(content).toMatch(/<\/head>/i);
    expect(content).toMatch(/<body[^>]*>/i);
    expect(content).toMatch(/<\/body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('El elemento html debe tener atributo lang="es"', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toMatch(/<html[^>]*lang\s*=\s*["']es["']/i);
  });

  test('El head debe contener meta charset UTF-8', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toMatch(/<meta[^>]*charset\s*=\s*["']?UTF-8["']?/i);
  });

  test('El head debe contener meta viewport', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toMatch(/<meta[^>]*name\s*=\s*["']viewport["'][^>]*>/i);
  });

  test('El archivo debe tener un título en la etiqueta title', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const title = document.querySelector('title');
    
    expect(title).toBeTruthy();
    expect(title.textContent.trim().length).toBeGreaterThan(0);
  });

  test('Debe contener un encabezado h1 con texto "Mi Primer Iframe"', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const h1 = document.querySelector('h1');
    
    expect(h1).toBeTruthy();
    expect(h1.textContent).toMatch(/mi\s+primer\s+iframe/i);
  });

  test('Debe contener al menos un párrafo descriptivo', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const paragraph = document.querySelector('p');
    
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent.length).toBeGreaterThan(30);
  });

  test('Debe contener exactamente 1 iframe', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframes = document.querySelectorAll('iframe');
    
    expect(iframes.length).toBe(1);
  });

  test('El iframe debe tener atributo src con URL válida', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframe = document.querySelector('iframe');
    
    expect(iframe).toBeTruthy();
    const src = iframe.getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).toMatch(/^https:\/\//);
  });

  test('El iframe debe tener atributo title para accesibilidad', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframe = document.querySelector('iframe');
    
    expect(iframe).toBeTruthy();
    expect(iframe.hasAttribute('title')).toBe(true);
    const title = iframe.getAttribute('title');
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(5);
  });

  test('El iframe debe tener atributos width y height', () => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const iframe = document.querySelector('iframe');
    
    expect(iframe).toBeTruthy();
    const hasWidth = iframe.hasAttribute('width') || iframe.style.width;
    const hasHeight = iframe.hasAttribute('height') || iframe.style.height;
    
    expect(hasWidth).toBe(true);
    expect(hasHeight).toBe(true);
  });
});
