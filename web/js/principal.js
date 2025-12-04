// Necesitamos una referencia al módulo JS actual,
// lo cual hacemos mediante una variable global
let cm = null; // Current Module

async function cargarModuloPersonajes(){
    let url = "modulos/personajes.html";
    
    let resp = await fetch (url);
    
    let contenido = await resp.text();
    
    document.getElementById("divPrincipal").innerHTML = contenido;
    
    cm = await import('./personajes.js');
    cm.inicializar();
}