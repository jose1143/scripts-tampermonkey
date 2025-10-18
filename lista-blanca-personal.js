// ==UserScript==
// @name         Bloqueador de Páginas Lista blanca
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Bloquea el acceso a páginas específicas usando expresiones regulares
// @author       Tu nombre
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/jose1143/scripts-tampermonkey/refs/heads/main/lista-blanca-personal.js
// @updateURL    https://raw.githubusercontent.com/jose1143/scripts-tampermonkey/refs/heads/main/lista-blanca-personal.js
// ==/UserScript==

(function() {
    'use strict';

    // Define aquí las expresiones regulares de las páginas que quieres bloquear
    const paginasPermitidas = [
        /google.com/i,
    ];

    // Mensaje personalizado que se mostrará
    const mensajeBloqueo = `
        <!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title>404</title>
    <style>
      body {
        background: #f5f5f5;
        color: #aaa;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        margin: 0;
        font-family: sans-serif;
        text-align: center;
      }
      .code {
          font-size: 6rem;
          padding-bottom: 1rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1><div class="code">404</div>Page not found</h1>
    </main>
  </body>
</html>
    `;

    // Comprobar si la URL actual coincide con alguna expresión regular
    const urlActual = window.location.href;

    let block = true;
    for (let patron of paginasPermitidas) {
        if (patron.test(urlActual)) {
            block = false;
            break;
        }
    }

    if (block) {
        console.error(urlActual + ' bloqueada');
        // Bloquear la página
        document.open();
        document.write(mensajeBloqueo);
        document.close();

        // Detener la carga de scripts adicionales
        window.stop();
    }
})();
