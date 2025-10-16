// ==UserScript==
// @name         Bloqueador de Páginas Lista blanca
// @namespace    http://tampermonkey.net/
// @version      1.1.35
// @description  Bloquea el acceso a páginas específicas usando expresiones regulares
// @author       Tu nombre
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/jose1143/scripts-tampermonkey/refs/heads/main/lista-blanca-trabajo.js
// @updateURL    https://raw.githubusercontent.com/jose1143/scripts-tampermonkey/refs/heads/main/lista-blanca-trabajo.js
// ==/UserScript==

(function() {
    'use strict';

    // Define aquí las expresiones regulares de las páginas que quieres bloquear
    const paginasPermitidas = [
        /local.*\.test/i,
        /regexr\.com/i,
        /google\.com/i,
        /localhost/i,
        /bittacora/i,
        /192\.168\.0\.219/i,
        /gestiondecorreo\.com/i,
        /sentry\.io/i,
        /gitlab\.com/i,
        /github\.com/i,
        /laravel\.com/i,
        /php\.net/i,
        /stackoverflow\.com/i,
        /chatgpt\.com/i,
        /claude\.ai/i,
        /clockodilo\.com/i,
        /trello\.com/i,
        /bing\.com/i,
        /asoftmurmur\.com/i,
        /trello\.services/i,
        /app\.amazingpowerups\.com/i,
        /extremadurarural\.es/i,
        /wordpress\.org/i,
        /screenful\.me/i,
        /cloudflare\.com/i,
        /jetbrains\.com/i,
        /lipsum\.com/i,
        /elementor\.com/i,
        /deepl\.com/i,
        /phpstan\.org/i,
        /ionos/i,
        /dip-badajoz\.es/i,
        /bitwarden\.com/i,
        /stratoserver\.net/i,
        /nativepowerups\.com/i,
        /plesk\.page/i,
        /ddev\.site/i,
        /gespae/i,
        /rhgourmet\.com/i,
        /simexcloud\.com/i,
        /laracasts\.com/i,
        /redaedem\.org/i,
        /misterlures\.com/i,
        /prestashop\.com/i,
        /prestahero\.com/i,
        /strato\.es/i,
        /webempresa\.com/i,
        /camarabadajoz\.es/i,
        /jsonformatter.curiousconcept.com/i,
        /crontab\.guru/i,
        /stackexchange/i,
        /arsys\.es/i,
        /plesk\.com/i,
        /cualesmiip\.com/i,
        /visualstudio\.com/i
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
