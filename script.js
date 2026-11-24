(() => {
  'use strict';

  // Pon el número celular de 8 dígitos de Bolivia de la tienda (ej. '59167840739')
  const WHATSAPP_NUMERO = '59162142069';

  const BLACKLIST = ['DROP', 'SELECT', 'DELETE', 'INSERT', 'SCRIPT', '<', '>', 'GRATIS', 'HACK', 'TEST123', 'EX-999'];

  const FOTOS_TIENDA = './local.jpeg';

  // Clasificación revisada de tus 30 imágenes:
  // - oscuros: negras enteras y castañas/café
  // - rubios: rubias, rayitos/iluminaciones, caramelos y cobrizos
  // - fantasia-col: rosas, rojas/borgoña y colores fantasía/poco comunes
  const CATALOGO_PELUCAS = [
    // LARGAS (12)
    { id: 1, codigo: 'EX-01', imagen: './negrosimple.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'oscuros', colorNombre: 'Negro Entero', nombre: 'Lacia Negra Clásica', descripcion: 'Caída larga y recta en negro entero con raya al medio.', precio: 445 },
    { id: 2, codigo: 'EX-02', imagen: './negrodosmil.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'oscuros', colorNombre: 'Negro Entero Y2K', nombre: 'Lacia Negra Flequillo Y2K', descripcion: 'Largo sedoso negro entero con flequillo lateral.', precio: 450 },
    { id: 3, codigo: 'EX-03', imagen: './japonesa.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'oscuros', colorNombre: 'Negro Entero Hime', nombre: 'Lacia Corte Hime Japonesa', descripcion: 'Corte escalonado frontal estilo japonés con flequillo recto.', precio: 360 },
    { id: 4, codigo: 'EX-04', imagen: './zoe.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'oscuros', colorNombre: 'Negro Entero Capas', nombre: 'Larga en Capas Zoe', descripcion: 'Melena larga degrafilada en capas ligeras con flequillo.', precio: 455 },
    { id: 5, codigo: 'EX-05', imagen: './avellanalacio.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'oscuros', colorNombre: 'Café Avellana', nombre: 'Lacia Avellana Seda', descripcion: 'Largo lacio en tono café avellana luminoso y natural.', precio: 355 },
    { id: 6, codigo: 'EX-06', imagen: './rayitoslacio.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'rubios', colorNombre: 'Caramelo & Rayitos', nombre: 'Lacia con Iluminación', descripcion: 'Melena lacia con reflejos caramelo y luz vertical.', precio: 365 },
    { id: 7, codigo: 'EX-07', imagen: './rubialarga.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'rubios', colorNombre: 'Rubio Dorado', nombre: 'Larga Ondas Rubio Miel', descripcion: 'Largo abundante en rubio dorado suave con movimiento.', precio: 470 },
    { id: 8, codigo: 'EX-08', imagen: './violeta.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'rubios', colorNombre: 'Rubio Champán', nombre: 'Larga Champán con Flequillo', descripcion: 'Tono rubio claro champán con flequillo ligero y puntas suaves.', precio: 470 },
    { id: 9, codigo: 'EX-09', imagen: './rubiarayitos.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'rubios', colorNombre: 'Rubio Ceniza', nombre: 'Larga Rubio Ceniza Rayitos', descripcion: 'Mezcla elegante de rubio ceniza y mechas suaves.', precio: 475 },
    { id: 10, codigo: 'EX-10', imagen: './cobrisalarga.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'rubios', colorNombre: 'Cobrizo Caramelo', nombre: 'Larga Cobriza Cálida', descripcion: 'Largo en tono cobrizo caramelo con flequillo suave.', precio: 365 },
    { id: 11, codigo: 'EX-11', imagen: './rojalarga.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'fantasia-col', colorNombre: 'Rojo Vino', nombre: 'Larga Borgoña Vino', descripcion: 'Melena larga en rojo vino profundo con flequillo.', precio: 365 },
    { id: 12, codigo: 'EX-12', imagen: './rosalargo.jpeg', estilo: 'largas', estiloNombre: 'Larga', colorGrupo: 'fantasia-col', colorNombre: 'Rosa Pastel', nombre: 'Larga Rosa Pastel Dulce', descripcion: 'Largo suave en tono rosa pastel con flequillo recto.', precio: 470 },

    // CORTAS (7)
    { id: 13, codigo: 'EX-13', imagen: './cortanegra.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'oscuros', colorNombre: 'Negro Entero', nombre: 'Bob Corto Negro Chic', descripcion: 'Corte bob a la altura del mentón con flequillo recto.', precio: 290 },
    { id: 14, codigo: 'EX-14', imagen: './negrodiseno.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'fantasia-col', colorNombre: 'Bicolor Fantasía', nombre: 'Bob Bicolor Diseño', descripcion: 'Bob corto con contraste frontal de fantasía.', precio: 290 },
    { id: 15, codigo: 'EX-15', imagen: './rubiacorta.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'rubios', colorNombre: 'Rubio Platino', nombre: 'Pixie Corto Rubio', descripcion: 'Corte pixie fresco y ligero en rubio claro.', precio: 310 },
    { id: 16, codigo: 'EX-16', imagen: './rubiamelena.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'rubios', colorNombre: 'Rubio Miel', nombre: 'Media Melena Rubia', descripcion: 'Largo a los hombros en tono rubio miel lacio.', precio: 330 },
    { id: 17, codigo: 'EX-17', imagen: './avellana.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'oscuros', colorNombre: 'Café Avellana', nombre: 'Media Melena Avellana', descripcion: 'Corte medio café avellana con flequillo y puntas suaves.', precio: 430 },
    { id: 18, codigo: 'EX-18', imagen: './sarai.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'fantasia-col', colorNombre: 'Rojo Borgoña', nombre: 'Bob Ondulado Sarai', descripcion: 'Corte corto con ondas suaves en tono rojo vino.', precio: 125 },
    { id: 19, codigo: 'EX-19', imagen: './rosacorta.jpeg', estilo: 'cortas', estiloNombre: 'Corta', colorGrupo: 'fantasia-col', colorNombre: 'Rosa Bebé', nombre: 'Bob Corto Rosa Pastel', descripcion: 'Corte bob juvenil en tono rosa claro con flequillo.', precio: 330 },

    // RIZADAS (6)
    { id: 20, codigo: 'EX-20', imagen: './rizadalarga.jpeg', estilo: 'rizadas', estiloNombre: 'Rizada', colorGrupo: 'oscuros', colorNombre: 'Café Oscuro', nombre: 'Rizos Largos Definidos', descripcion: 'Rizos largos y marcados en tono café oscuro.', precio: 560 },
    { id: 21, codigo: 'EX-21', imagen: './rizadalu.jpeg', estilo: 'rizadas', estiloNombre: 'Rizada', colorGrupo: 'oscuros', colorNombre: 'Negro Entero Rizo', nombre: 'Rizos Voluminosos Lu', descripcion: 'Rulos definidos en negro entero con gran volumen.', precio: 460 },
    { id: 22, codigo: 'EX-22', imagen: './caferisadalarga.jpeg', estilo: 'rizadas', estiloNombre: 'Rizada', colorGrupo: 'oscuros', colorNombre: 'Café Claro', nombre: 'Rizos Largos Café Flequillo', descripcion: 'Rizos largos en tono café cálido con flequillo ligero.', precio: 465 },
    { id: 23, codigo: 'EX-23', imagen: './caferizada.jpeg', estilo: 'rizadas', estiloNombre: 'Rizada', colorGrupo: 'oscuros', colorNombre: 'Café Medio', nombre: 'Rizos Medios Café Suave', descripcion: 'Rulos elásticos a media espalda en tono café.', precio: 455 },
    { id: 24, codigo: 'EX-24', imagen: './caferubio.jpeg', estilo: 'rizadas', estiloNombre: 'Rizada', colorGrupo: 'rubios', colorNombre: 'Caramelo & Reflejos', nombre: 'Ondas Rizadas Iluminadas', descripcion: 'Ondas definidas con reflejos caramelo y rubios.', precio: 465 },
    { id: 25, codigo: 'EX-25', imagen: './roja.jpeg', estilo: 'rizadas', estiloNombre: 'Rizada', colorGrupo: 'fantasia-col', colorNombre: 'Rojo Cereza', nombre: 'Ondas Rojas Vibrantes', descripcion: 'Melena ondulada en rojo intenso con flequillo.', precio: 365 },

    // FANTASÍA (5)
    { id: 26, codigo: 'EX-26', imagen: './negroazul.jpeg', estilo: 'fantasia', estiloNombre: 'Fantasía', colorGrupo: 'fantasia-col', colorNombre: 'Azul Medianoche Fantasía', nombre: 'Fantasía Negro Azulado', descripcion: 'Lacia larga con reflejos azul oscuro poco comunes.', precio: 375 },
    { id: 27, codigo: 'EX-27', imagen: './moradonegro.jpeg', estilo: 'fantasia', estiloNombre: 'Fantasía', colorGrupo: 'fantasia-col', colorNombre: 'Morado Fantasía', nombre: 'Fantasía Ondas Moradas', descripcion: 'Ondas largas en tono morado profundo poco común.', precio: 375 },
    { id: 28, codigo: 'EX-28', imagen: './cobrisofantasia.jpeg', estilo: 'fantasia', estiloNombre: 'Fantasía', colorGrupo: 'rubios', colorNombre: 'Cobrizo Caramelo', nombre: 'Fantasía Cobriza Intensa', descripcion: 'Largo lacio en tono cobrizo caramelo vibrante.', precio: 375 },
    { id: 29, codigo: 'EX-29', imagen: './fantasiaverde.jpeg', estilo: 'fantasia', estiloNombre: 'Fantasía', colorGrupo: 'fantasia-col', colorNombre: 'Verde Fantasía', nombre: 'Fantasía Degradé Verde', descripcion: 'Degradé de verde menta a bosque de estilo fantasía.', precio: 380 },
    { id: 30, codigo: 'EX-30', imagen: './blancofantasia.jpeg', estilo: 'fantasia', estiloNombre: 'Fantasía', colorGrupo: 'fantasia-col', colorNombre: 'Blanco Plata Fantasía', nombre: 'Fantasía Blanco Platino', descripcion: 'Largo sedoso en tono blanco platinado poco común.', precio: 540 }
  ];

  const cacheArte = new Map();

  function crearSvgRespaldo(titulo, colorTxt, precio) {
    const key = `${titulo}|${colorTxt}|${precio}`;
    if (cacheArte.has(key)) return cacheArte.get(key);

    const tituloCorto = String(titulo).slice(0, 22);
    const subColor = colorTxt ? String(colorTxt).slice(0, 20) : 'El Mundo de las Extensiones';
    const precioTxt = precio ? `${Number(precio).toFixed(2)} Bs.` : 'Miraflores · Av. Illimani';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="260" viewBox="0 0 440 260">
      <rect width="440" height="260" rx="14" fill="#DCCBC2"/>
      <rect x="12" y="12" width="416" height="236" rx="10" fill="none" stroke="#746557" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="220" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#382B24">${tituloCorto}</text>
      <text x="220" y="138" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5C4B42">${subColor}</text>
      <rect x="143" y="164" width="154" height="32" rx="16" fill="#C68B89" stroke="#746557" stroke-width="2"/>
      <text x="220" y="185" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#382B24">${precioTxt}</text>
    </svg>`;

    const url = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    cacheArte.set(key, url);
    return url;
  }

  function obtenerFuenteImagen(prod) {
    if (prod && prod.imagen && String(prod.imagen).trim() !== '') {
      return String(prod.imagen).trim();
    }
    return crearSvgRespaldo(prod?.nombre || 'Peluca', prod?.colorNombre || '', prod?.precio || 0);
  }

  function leerStorage(clave, fallback) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function escribirStorage(clave, valor) {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (_) {}
  }

  const state = {
    productos: CATALOGO_PELUCAS,
    carrito: leerStorage('eme_editorial_carrito', []),
    historial: leerStorage('eme_editorial_historial', []),
    tema: localStorage.getItem('eme_editorial_tema') || 'light',
    estiloActivo: 'todos',
    colorActivo: 'todos',
    busqueda: '',
    indiceActual: 0,
    timer8s: null,
    segundos: 8,
    deferredPrompt: null
  };

  function escaparHTML(str) {
    const div = document.createElement('div');
    div.textContent = String(str ?? '');
    return div.innerHTML;
  }

  function formatBs(n) {
    return `${Number(n).toFixed(2)} Bs.`;
  }

  function detectarBlacklist(texto) {
    const upper = String(texto).toUpperCase();
    return BLACKLIST.find((tok) => upper.includes(tok)) || null;
  }

  function setErrorCampo(inputId, errId, mensaje) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    if (err) err.textContent = mensaje || '';
    if (input) input.classList.toggle('input-error', Boolean(mensaje));
  }

  function validarNombreCampo(mostrarSiVacio = false) {
    const nombre = document.getElementById('clienteNombre').value.trim();
    const blNombre = detectarBlacklist(nombre);

    if (blNombre) {
      setErrorCampo('clienteNombre', 'errNombre', `🚫 No se permite "${blNombre}" en el nombre.`);
      return false;
    }
    if (!nombre) {
      setErrorCampo('clienteNombre', 'errNombre', mostrarSiVacio ? '⚠️ Escribe tu nombre.' : '');
      return false;
    }
    if (/[0-9]/.test(nombre)) {
      setErrorCampo('clienteNombre', 'errNombre', '⚠️ Colocaste números en el nombre: solo se permiten letras y espacios.');
      return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      setErrorCampo('clienteNombre', 'errNombre', '⚠️ El nombre no debe llevar símbolos especiales.');
      return false;
    }
    if (nombre.length < 3) {
      setErrorCampo('clienteNombre', 'errNombre', '⚠️ Escribe un nombre de al menos 3 letras.');
      return false;
    }

    setErrorCampo('clienteNombre', 'errNombre', '');
    return true;
  }

  function validarTelefonoCampo(mostrarSiVacio = false) {
    const telefono = document.getElementById('clienteTelefono').value.trim();
    const blTel = detectarBlacklist(telefono);

    if (blTel) {
      setErrorCampo('clienteTelefono', 'errTelefono', `🚫 Valor no permitido ("${blTel}").`);
      return false;
    }
    if (!telefono) {
      setErrorCampo('clienteTelefono', 'errTelefono', mostrarSiVacio ? '⚠️ Escribe tu número de celular.' : '');
      return false;
    }
    if (/[^0-9]/.test(telefono)) {
      setErrorCampo('clienteTelefono', 'errTelefono', '⚠️ Colocaste letras o símbolos en el celular: solo se aceptan números.');
      return false;
    }
    if (!/^[67][0-9]{7}$/.test(telefono)) {
      setErrorCampo('clienteTelefono', 'errTelefono', '⚠️ El celular en Bolivia debe tener 8 números y empezar con 6 o 7.');
      return false;
    }

    setErrorCampo('clienteTelefono', 'errTelefono', '');
    return true;
  }

  function validarNotasCampo() {
    const notas = document.getElementById('notasPedido').value.trim();
    const blNotas = detectarBlacklist(notas);
    if (blNotas) {
      setErrorCampo('notasPedido', 'errNotas', `🚫 Palabra o símbolo bloqueado por lista negra: "${blNotas}".`);
      return false;
    }
    setErrorCampo('notasPedido', 'errNotas', '');
    return true;
  }

  function validarFormulario() {
    const msg = document.getElementById('feedbackForm');

    if (state.carrito.length === 0) {
      msg.textContent = '⚠️ Tu bolsa está vacía: agrega al menos una peluca o extensión.';
      return false;
    }

    const okNombre = validarNombreCampo(true);
    const okTelefono = validarTelefonoCampo(true);
    const okNotas = validarNotasCampo();

    if (!okNombre || !okTelefono || !okNotas) {
      msg.textContent = '⚠️ Revisa los campos marcados arriba antes de enviar por WhatsApp.';
      return false;
    }

    msg.textContent = '';
    return true;
  }

  function construirMensajeWhatsApp(orden) {
    const lineas = (orden.items || [])
      .map((item) => `• ${item.cantidad}x ${item.nombre} (${item.codigo} · ${item.colorNombre}) — ${formatBs(item.precio * item.cantidad)}`)
      .join('\n');

    const partes = [
      `*Pedido · El Mundo de las Extensiones*`,
      `Código: *${orden.codigo}*`,
      `Fecha: ${orden.fecha}`,
      `Cliente: ${orden.cliente}`,
      `Celular: ${orden.telefono}`,
      `Entrega/Retiro: ${orden.retiro}`,
      ``,
      `*Detalle del pedido:*`,
      lineas,
      ``,
      `*Total: ${formatBs(orden.total)}*`
    ];

    if (orden.notas) {
      partes.push(`Notas: ${orden.notas}`);
    }

    return partes.join('\n');
  }

  function enviarPedidoAWhatsApp(orden) {
    const mensaje = construirMensajeWhatsApp(orden);
    const numeroLimpio = WHATSAPP_NUMERO.replace(/[^0-9]/g, '');
    const destino = numeroLimpio.length >= 8 ? numeroLimpio : '';
    const url = `https://wa.me/${destino}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function inicializar() {
    aplicarTema(state.tema);

    const imgTienda = document.getElementById('imgTiendaEditorial');
    if (imgTienda) {
      imgTienda.src = FOTOS_TIENDA;
      imgTienda.onerror = () => {
        imgTienda.onerror = null;
        imgTienda.src = crearSvgRespaldo('El Mundo de las Extensiones', 'Miraflores · Av. Illimani', 0);
      };
    }

    configurarEventos();
    renderizarCarrusel();
    renderizarCarrito();
    renderizarHistorialYBitacora();
    actualizarEstadoOffline();

    if (window.location.protocol.startsWith('http') && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  function actualizarEstadoOffline() {
    const badge = document.getElementById('estadoRed');
    if (!badge) return;
    badge.textContent = navigator.onLine ? '● Offline' : '● Sin red';
  }

  window.addEventListener('online', actualizarEstadoOffline);
  window.addEventListener('offline', actualizarEstadoOffline);

  function aplicarTema(tema) {
    state.tema = tema === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.tema);
    try {
      localStorage.setItem('eme_editorial_tema', state.tema);
    } catch (_) {}
    const btnTema = document.getElementById('btnTema');
    if (btnTema) {
      btnTema.textContent = state.tema === 'dark' ? '☀️' : '🌙';
    }
  }

  function sincronizarChipColorActivo() {
    document.querySelectorAll('.chip-color').forEach((c) => {
      c.classList.toggle('active', c.dataset.color === state.colorActivo);
    });
  }

  function sincronizarChipEstiloActivo() {
    document.querySelectorAll('.chip').forEach((c) => {
      c.classList.toggle('active', c.dataset.estilo === state.estiloActivo);
    });
  }

  function obtenerFiltrados() {
    const q = state.busqueda.trim().toLowerCase();
    return state.productos.filter((p) => {
      const okEstilo = state.estiloActivo === 'todos' || p.estilo === state.estiloActivo;
      const okColor = state.colorActivo === 'todos' || p.colorGrupo === state.colorActivo;
      const okTxt =
        !q ||
        p.nombre.toLowerCase().includes(q) ||
        p.codigo.toLowerCase().includes(q) ||
        p.estiloNombre.toLowerCase().includes(q) ||
        p.colorNombre.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q);
      return okEstilo && okColor && okTxt;
    });
  }

  function renderizarCarrusel() {
    const track = document.getElementById('carruselCatalogo');
    const contador = document.getElementById('indicadorCarrusel');
    if (!track) return;

    let filtrados = obtenerFiltrados();
    if (filtrados.length === 0 && !state.busqueda.trim()) {
      state.colorActivo = 'todos';
      sincronizarChipColorActivo();
      filtrados = obtenerFiltrados();
    }

    if (filtrados.length === 0) {
      if (contador) contador.textContent = '0 / 0';
      track.innerHTML = '<p>No hay pelucas con esa búsqueda. Borra el texto para ver todas.</p>';
      return;
    }

    if (state.indiceActual >= filtrados.length) state.indiceActual = 0;
    if (state.indiceActual < 0) state.indiceActual = filtrados.length - 1;

    const esTresColumnas = window.matchMedia('(min-width: 768px), (orientation: landscape)').matches;
    const cantidadVisible = esTresColumnas ? Math.min(3, filtrados.length) : 1;

    const visibles = [];
    for (let i = 0; i < cantidadVisible; i += 1) {
      visibles.push(filtrados[(state.indiceActual + i) % filtrados.length]);
    }

    if (contador) {
      if (cantidadVisible > 1 && filtrados.length > 1) {
        const inicio = state.indiceActual + 1;
        const fin = ((state.indiceActual + cantidadVisible - 1) % filtrados.length) + 1;
        contador.textContent = `${inicio}–${fin} / ${filtrados.length}`;
      } else {
        contador.textContent = `${state.indiceActual + 1} / ${filtrados.length}`;
      }
    }

    const frag = document.createDocumentFragment();
    visibles.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'vitrina-ficha';
      card.dataset.id = String(p.id);
      card.tabIndex = 0;
      card.setAttribute('aria-label', `${p.nombre}, ${p.colorNombre}, ${formatBs(p.precio)}`);

      card.innerHTML = `
        <div>
          <span class="ficha-ribbon">✦ ${escaparHTML(p.codigo)} · ${escaparHTML(p.estiloNombre)}</span>
          <div class="img-zoom-wrap">
            <img class="producto-img"
                 loading="eager"
                 decoding="async"
                 src="${escaparHTML(obtenerFuenteImagen(p))}"
                 alt="${escaparHTML(p.nombre)} (${escaparHTML(p.colorNombre)})">
            <button type="button"
                    class="btn-zoom-toggle"
                    aria-label="Activar o desactivar zoom en ${escaparHTML(p.nombre)}"
                    aria-pressed="false"
                    title="Zoom">🔍</button>
          </div>
          <div class="producto-meta">
            <span class="etiqueta-estilo">${escaparHTML(p.estiloNombre)}</span>
            <span class="etiqueta-color">${escaparHTML(p.colorNombre)}</span>
          </div>
          <h3>${escaparHTML(p.nombre)}</h3>
          <p class="producto-desc">${escaparHTML(p.descripcion)}</p>
        </div>
        <div class="producto-footer">
          <span class="precio-tag">${formatBs(p.precio)}</span>
          <button type="button" class="btn btn-rose btn-agregar" data-id="${p.id}">+ Pedir</button>
        </div>
      `;

      const img = card.querySelector('.producto-img');
      if (img) {
        img.onerror = () => {
          img.onerror = null;
          img.src = crearSvgRespaldo(p.nombre, p.colorNombre, p.precio);
        };
      }

      frag.appendChild(card);
    });

    track.replaceChildren(frag);
  }

  function agregarAlCarrito(idProd) {
    const prod = state.productos.find((p) => Number(p.id) === Number(idProd));
    if (!prod) return;

    const item = state.carrito.find((x) => Number(x.id) === Number(idProd));
    if (item) {
      item.cantidad += 1;
    } else {
      state.carrito.push({
        id: prod.id,
        codigo: prod.codigo,
        nombre: prod.nombre,
        colorNombre: prod.colorNombre,
        precio: Number(prod.precio),
        cantidad: 1
      });
    }
    escribirStorage('eme_editorial_carrito', state.carrito);
    renderizarCarrito();
  }

  function cambiarCantidad(idProd, delta) {
    const idx = state.carrito.findIndex((x) => Number(x.id) === Number(idProd));
    if (idx === -1) return;

    state.carrito[idx].cantidad += delta;
    if (state.carrito[idx].cantidad <= 0) {
      state.carrito.splice(idx, 1);
    }
    escribirStorage('eme_editorial_carrito', state.carrito);
    renderizarCarrito();
  }

  function renderizarCarrito() {
    const lista = document.getElementById('listaCarrito');
    const navBadge = document.getElementById('navContadorCarrito');
    const subtotalEl = document.getElementById('txtSubtotal');
    const totalEl = document.getElementById('txtTotal');

    const cantidadTotal = state.carrito.reduce((s, x) => s + x.cantidad, 0);
    const montoTotal = state.carrito.reduce((s, x) => s + x.precio * x.cantidad, 0);

    if (navBadge) navBadge.textContent = cantidadTotal;
    if (subtotalEl) subtotalEl.textContent = formatBs(montoTotal);
    if (totalEl) totalEl.textContent = formatBs(montoTotal);
    if (!lista) return;

    if (state.carrito.length === 0) {
      lista.innerHTML = '<p>Tu bolsa está vacía. Agrega una peluca desde la vitrina de 30 modelos.</p>';
      return;
    }

    lista.innerHTML = state.carrito
      .map(
        (x) => `
      <div class="carrito-item">
        <div>
          <strong>${escaparHTML(x.nombre)}</strong>
          <div class="producto-meta">${escaparHTML(x.codigo)} · ${escaparHTML(x.colorNombre)} · ${formatBs(x.precio)} c/u</div>
        </div>
        <div class="carrito-controles">
          <button type="button" class="btn btn-soft btn-qty" data-id="${x.id}" data-delta="-1" aria-label="Restar">−</button>
          <strong>${x.cantidad}</strong>
          <button type="button" class="btn btn-soft btn-qty" data-id="${x.id}" data-delta="1" aria-label="Sumar">+</button>
        </div>
      </div>`
      )
      .join('');
  }

  function iniciarCuentaRegresiva() {
    if (!validarFormulario()) return;

    const btnConfirmar = document.getElementById('btnIniciarConfirmacion');
    const btnCancelar = document.getElementById('btnCancelarConfirmacion');
    const spanSeg = document.getElementById('contadorSegundos');
    const msg = document.getElementById('feedbackForm');

    state.segundos = 8;
    spanSeg.textContent = state.segundos;
    btnConfirmar.classList.add('hidden');
    btnCancelar.classList.remove('hidden');
    msg.textContent = '⏳ Preparando pedido para WhatsApp en 8s...';

    state.timer8s = setInterval(() => {
      state.segundos -= 1;
      spanSeg.textContent = state.segundos;
      if (state.segundos <= 0) {
        detenerCuentaRegresiva();
        registrarPedido();
      }
    }, 1000);
  }

  function detenerCuentaRegresiva() {
    if (state.timer8s) {
      clearInterval(state.timer8s);
      state.timer8s = null;
    }
    document.getElementById('btnIniciarConfirmacion').classList.remove('hidden');
    document.getElementById('btnCancelarConfirmacion').classList.add('hidden');
  }

  function registrarPedido() {
    const total = state.carrito.reduce((s, x) => s + x.precio * x.cantidad, 0);
    const orden = {
      codigo: `EME-${Date.now().toString().slice(-5)}`,
      cliente: document.getElementById('clienteNombre').value.trim(),
      telefono: document.getElementById('clienteTelefono').value.trim(),
      retiro: document.getElementById('tipoRetiro').value,
      notas: document.getElementById('notasPedido').value.trim(),
      items: [...state.carrito],
      total,
      fecha: new Date().toLocaleString('es-BO')
    };

    state.historial.unshift(orden);
    escribirStorage('eme_editorial_historial', state.historial);
    renderizarHistorialYBitacora();

    state.carrito = [];
    escribirStorage('eme_editorial_carrito', []);
    renderizarCarrito();
    document.getElementById('formPedido').reset();
    setErrorCampo('clienteNombre', 'errNombre', '');
    setErrorCampo('clienteTelefono', 'errTelefono', '');
    setErrorCampo('notasPedido', 'errNotas', '');
    document.getElementById('feedbackForm').textContent = `✅ Pedido ${orden.codigo} guardado. Abriendo WhatsApp...`;

    enviarPedidoAWhatsApp(orden);
  }

  function renderizarHistorialYBitacora() {
    const histCont = document.getElementById('listaHistorial');
    const bitCont = document.getElementById('listaBitacora');

    if (state.historial.length === 0) {
      if (histCont) histCont.innerHTML = '<p>Sin pedidos guardados todavía.</p>';
      if (bitCont) bitCont.innerHTML = '<p>La bitácora está vacía. Cuando confirmes un pedido aparecerá aquí.</p>';
      return;
    }

    if (histCont) {
      histCont.innerHTML = state.historial
        .map((o) => {
          const detalle = (o.items || []).map((i) => `${i.cantidad}x ${i.nombre} (${i.colorNombre})`).join(', ');
          return `
          <article class="carrito-item">
            <div>
              <strong>${escaparHTML(o.codigo)} · ${escaparHTML(o.cliente)}</strong>
              <div class="producto-meta">${escaparHTML(o.retiro)} · ${escaparHTML(o.fecha)}</div>
              <div class="producto-meta">${escaparHTML(detalle)}</div>
            </div>
            <strong class="precio-tag">${formatBs(o.total)}</strong>
          </article>`;
        })
        .join('');
    }

    if (bitCont) {
      bitCont.innerHTML = state.historial
        .map((o) => {
          const detalle = (o.items || []).map((i) => `${i.cantidad}x ${i.nombre} [${i.colorNombre}]`).join(', ');
          return `
          <div class="bitacora-entrada">
            <div class="producto-meta">
              <strong>[${escaparHTML(o.codigo)}]</strong>
              <span>${escaparHTML(o.fecha)}</span>
            </div>
            <div><strong>Cliente:</strong> ${escaparHTML(o.cliente)} · <strong>Cel.:</strong> ${escaparHTML(o.telefono)}</div>
            <div><strong>Entrega:</strong> ${escaparHTML(o.retiro)} · <strong>Total:</strong> <span class="precio-tag">${formatBs(o.total)}</span></div>
            <div class="producto-meta"><strong>Detalle:</strong> ${escaparHTML(detalle)}${o.notas ? ` · Notas: ${escaparHTML(o.notas)}` : ''}</div>
          </div>`;
        })
        .join('');
    }
  }

  function abrirModal(idProd) {
    const prod = state.productos.find((p) => Number(p.id) === Number(idProd));
    if (!prod) return;

    const modalCont = document.getElementById('modalContenido');
    modalCont.innerHTML = `
      <div class="modal-img-wrap">
        <img src="${escaparHTML(obtenerFuenteImagen(prod))}"
             alt="${escaparHTML(prod.nombre)} (${escaparHTML(prod.colorNombre)})">
      </div>
      <p class="producto-meta">${escaparHTML(prod.codigo)} · ${escaparHTML(prod.estiloNombre)} · ${escaparHTML(prod.colorNombre)}</p>
      <h3 id="modalTitulo">${escaparHTML(prod.nombre)}</h3>
      <p class="producto-desc">${escaparHTML(prod.descripcion)}</p>
      <div class="producto-footer">
        <span class="precio-tag">${formatBs(prod.precio)}</span>
        <button type="button" class="btn btn-rose" id="btnModalAgregar" data-id="${prod.id}">+ Pedir</button>
      </div>
    `;

    const imgModal = modalCont.querySelector('img');
    if (imgModal) {
      imgModal.onerror = () => {
        imgModal.onerror = null;
        imgModal.src = crearSvgRespaldo(prod.nombre, prod.colorNombre, prod.precio);
      };
    }

    document.getElementById('modalProducto').classList.remove('hidden');
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredPrompt = e;
    document.getElementById('btnInstalarPWA').classList.remove('hidden');
  });

  window.addEventListener('appinstalled', () => {
    state.deferredPrompt = null;
    document.getElementById('btnInstalarPWA').classList.add('hidden');
  });

  function configurarEventos() {
    document.querySelector('.main-nav').addEventListener('click', (e) => {
      const btn = e.target.closest('.nav-btn');
      if (!btn) return;
      document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.vista').forEach((v) => v.classList.add('hidden'));
      document.getElementById(`vista-${btn.dataset.vista}`).classList.remove('hidden');
    });

    const vitrina = document.getElementById('carruselCatalogo');
    document.getElementById('btnPrevCarrusel').addEventListener('click', () => {
      const total = obtenerFiltrados().length;
      if (total > 0) {
        state.indiceActual = (state.indiceActual - 1 + total) % total;
        renderizarCarrusel();
      }
    });

    document.getElementById('btnNextCarrusel').addEventListener('click', () => {
      const total = obtenerFiltrados().length;
      if (total > 0) {
        state.indiceActual = (state.indiceActual + 1) % total;
        renderizarCarrusel();
      }
    });

    vitrina.addEventListener('click', (e) => {
      const btnZoom = e.target.closest('.btn-zoom-toggle');
      if (btnZoom) {
        e.stopPropagation();
        const wrap = btnZoom.closest('.img-zoom-wrap');
        const img = wrap ? wrap.querySelector('.producto-img') : null;
        if (img) {
          const zoomed = img.classList.toggle('zoom-activo');
          btnZoom.classList.toggle('activo', zoomed);
          btnZoom.setAttribute('aria-pressed', String(zoomed));
        }
        return;
      }

      const btnAdd = e.target.closest('.btn-agregar');
      if (btnAdd) {
        e.stopPropagation();
        agregarAlCarrito(btnAdd.dataset.id);
        return;
      }

      const item = e.target.closest('.vitrina-ficha');
      if (item) abrirModal(item.dataset.id);
    });

    const btnZoomTienda = document.getElementById('btnZoomTienda');
    if (btnZoomTienda) {
      btnZoomTienda.addEventListener('click', () => {
        const img = document.getElementById('imgTiendaEditorial');
        if (!img) return;
        const zoomed = img.classList.toggle('zoom-activo');
        btnZoomTienda.classList.toggle('activo', zoomed);
        btnZoomTienda.setAttribute('aria-pressed', String(zoomed));
      });
    }

    document.getElementById('btnTema').addEventListener('click', () => {
      aplicarTema(state.tema === 'light' ? 'dark' : 'light');
    });

    document.getElementById('btnInstalarPWA').addEventListener('click', async () => {
      if (!state.deferredPrompt) return;
      state.deferredPrompt.prompt();
      const { outcome } = await state.deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        document.getElementById('btnInstalarPWA').classList.add('hidden');
      }
      state.deferredPrompt = null;
    });

    document.getElementById('inputBuscador').addEventListener('input', (e) => {
      state.busqueda = e.target.value;
      state.indiceActual = 0;
      renderizarCarrusel();
    });

    document.querySelector('.categorias-chips').addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      state.estiloActivo = chip.dataset.estilo;
      sincronizarChipEstiloActivo();
      if (state.colorActivo !== 'todos' && obtenerFiltrados().length === 0) {
        state.colorActivo = 'todos';
        sincronizarChipColorActivo();
      }
      state.indiceActual = 0;
      renderizarCarrusel();
    });

    document.querySelector('.colores-chips').addEventListener('click', (e) => {
      const chipCol = e.target.closest('.chip-color');
      if (!chipCol) return;
      state.colorActivo = chipCol.dataset.color;
      sincronizarChipColorActivo();
      if (state.estiloActivo !== 'todos' && obtenerFiltrados().length === 0) {
        state.estiloActivo = 'todos';
        sincronizarChipEstiloActivo();
      }
      state.indiceActual = 0;
      renderizarCarrusel();
    });

    document.getElementById('clienteNombre').addEventListener('input', () => validarNombreCampo(false));
    document.getElementById('clienteNombre').addEventListener('blur', () => validarNombreCampo(false));
    document.getElementById('clienteTelefono').addEventListener('input', () => validarTelefonoCampo(false));
    document.getElementById('clienteTelefono').addEventListener('blur', () => validarTelefonoCampo(false));
    document.getElementById('notasPedido').addEventListener('input', () => validarNotasCampo());
    document.getElementById('notasPedido').addEventListener('blur', () => validarNotasCampo());

    document.getElementById('btnCerrarModal').addEventListener('click', () => {
      document.getElementById('modalProducto').classList.add('hidden');
    });

    document.getElementById('modalProducto').addEventListener('click', (e) => {
      if (e.target.id === 'modalProducto') e.target.classList.add('hidden');
      const btnModalAdd = e.target.closest('#btnModalAgregar');
      if (btnModalAdd) {
        e.stopPropagation();
        agregarAlCarrito(btnModalAdd.dataset.id);
        document.getElementById('modalProducto').classList.add('hidden');
      }
    });

    document.getElementById('listaCarrito').addEventListener('click', (e) => {
      const btnQty = e.target.closest('.btn-qty');
      if (!btnQty) return;
      e.stopPropagation();
      cambiarCantidad(btnQty.dataset.id, Number(btnQty.dataset.delta));
    });

    document.getElementById('btnIniciarConfirmacion').addEventListener('click', iniciarCuentaRegresiva);
    document.getElementById('btnCancelarConfirmacion').addEventListener('click', () => {
      detenerCuentaRegresiva();
      document.getElementById('feedbackForm').textContent = '❌ Envío a WhatsApp cancelado.';
    });

    document.getElementById('btnLimpiarBitacora').addEventListener('click', () => {
      state.historial = [];
      escribirStorage('eme_editorial_historial', []);
      renderizarHistorialYBitacora();
    });

    window.addEventListener('resize', () => {
      if (!document.getElementById('vista-catalogo').classList.contains('hidden')) {
        renderizarCarrusel();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', inicializar);
})();