/* Renders the whole site from content.js. You should not need to edit this file. */
(function () {
  'use strict';

  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function find(kind, id) { return (S[kind] || []).filter(function (x) { return x.id === id; })[0]; }

  /* ------------------------------ ICONS ------------------------------ */
  var ICONS = {
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM15 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
    bars: '<path d="M4 20V10M10 20V4M16 20v-8M2 20h20"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 12l3-3 3 2 4-4"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14.5c2.5 0 4.5 2 4.5 4.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.8 0-.6-.3-1-.6-1.4-.3-.4-.4-.7-.4-1.1 0-.9.7-1.7 1.7-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10" cy="7.5" r="1" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1" fill="currentColor"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13"/>',
    flask: '<path d="M9 3h6M10 3v6L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9V3M7.5 14.5h9"/>',
    hospital: '<path d="M4 21V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14M2 21h20M12 10v6M9 13h6"/>',
    bag: '<path d="M5 8h14l-1 12H6L5 8zM9 8V6a3 3 0 0 1 6 0v2"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    sparkle: '<path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8L11 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/>',
    pointer: '<path d="M4 3l7.1 17 2.5-7.4L21 10.1 4 3z"/><path d="M14 14l5.5 5.5"/>',
    bot: '<rect x="4.5" y="8" width="15" height="11" rx="3.5"/><path d="M12 8V4.8M9.5 16.2h5M2.5 12.5v2.5M21.5 12.5v2.5"/><circle cx="12" cy="3.9" r="1.1"/><circle cx="9.2" cy="13" r=".9" fill="currentColor"/><circle cx="14.8" cy="13" r=".9" fill="currentColor"/>',
    sheet: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>',    grid: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 4v16M3 14.5h6"/>',
    grid2: '<path d="M12 3v18M3 12h18M7.5 6v3M16.5 6v3M7.5 15v3M16.5 15v3M6 7.5h3M15 7.5h3M6 16.5h3M15 16.5h3"/>',
    pie: '<path d="M12 3v9h9a9 9 0 1 1-9-9zM15 3.5A9 9 0 0 1 20.5 9H15V3.5z"/>',
    award: '<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5"/>',
    ball: '<circle cx="12" cy="12" r="9"/><path d="M3.5 9.5c5 0 9 2 11 6M12 3c-1 5 1 10 6 12M20.5 14c-5-1-9-4.5-10-10"/>',
    drum: '<ellipse cx="12" cy="8" rx="8" ry="3"/><path d="M4 8v6c0 1.7 3.6 3 8 3s8-1.3 8-3V8M7 10.5l2 5.5M12 11v6M17 10.5l-2 5.5"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    linkedin: '<path fill="currentColor" stroke="none" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM10 9.5h3.8v1.6h.1c.5-1 1.9-2 3.9-2 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/>',
    youtube: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/>',
    download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M5 12l4.5 4.5L19 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
  };
  /* Tool marks for the Tools row: simple drawings of each brand mark, in the brand colours (viewBox 48). */
  var LOGO_HEAD = '<svg class="logo" viewBox="0 0 48 48" aria-hidden="true" focusable="false">';
  var LOGOS = {
    excel: LOGO_HEAD + '<rect x="15" y="6" width="28" height="36" rx="3.5" fill="#21A366"/><path d="M26 6h13.5A3.5 3.5 0 0 1 43 9.5V16H26z" fill="#33C481"/><path d="M26 24h17v9H26z" fill="#107C41"/><path d="M26 33h17v5.5a3.5 3.5 0 0 1-3.5 3.5H26z" fill="#185C37"/><rect x="4" y="12" width="26" height="24" rx="3.5" fill="#107C41"/><path d="M11.5 19.5l11 9M22.5 19.5l-11 9" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></svg>',
    powerpoint: LOGO_HEAD + '<rect x="15" y="6" width="28" height="36" rx="3.5" fill="#D35230"/><path d="M26 6h13.5A3.5 3.5 0 0 1 43 9.5V16H26z" fill="#E8714F"/><circle cx="32" cy="26" r="9" fill="#FF8F6B"/><path d="M32 26V17a9 9 0 0 1 9 9z" fill="#FFD2C2"/><rect x="4" y="12" width="26" height="24" rx="3.5" fill="#B7472A"/><path d="M13.5 30.5V17.5h5.2a4.2 4.2 0 0 1 0 8.4h-5.2" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    orange: '<svg class="logo" viewBox="0 0 600 582" aria-hidden="true" focusable="false"><defs><linearGradient id="lg-orange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFA23E"/><stop offset=".55" stop-color="#FF8A14"/><stop offset="1" stop-color="#EE6A00"/></linearGradient><clipPath id="lg-lens-clip"><circle cx="137" cy="253" r="108"/></clipPath><g id="lg-lens" clip-path="url(#lg-lens-clip)"><circle cx="137" cy="253" r="108" fill="#FFF1DC"/><ellipse cx="190" cy="248" rx="46" ry="46" fill="#2A1A15"/><ellipse cx="205" cy="214" rx="12" ry="17" fill="#fff"/><path d="M0 296C90 284 190 284 270 296V400H0z" fill="#F97A27"/></g></defs><path d="M285 80C235 74 230 38 240 8c36-3 52 24 45 72z" fill="#19B56A"/><path d="M285 80c48 4 86-14 78-52-34-6-70 12-78 52z" fill="#2FC77C"/><circle cx="298" cy="329" r="250" fill="url(#lg-orange)"/><path d="M112 372C150 382 450 382 488 372 500 470 420 548 300 548 180 548 100 470 112 372z" fill="#7B2B28"/><path d="M150 380C230 414 370 414 450 380 440 428 380 452 300 452 220 452 160 428 150 380z" fill="#FFF6EE"/><ellipse cx="298" cy="497" rx="92" ry="30" fill="#E2607C"/><use href="#lg-lens"/><use href="#lg-lens" transform="translate(600 0) scale(-1 1)"/><path d="M232 190Q300 105 368 190" fill="none" stroke="#3B2A25" stroke-width="22" stroke-linecap="round"/><circle cx="137" cy="253" r="118" fill="none" stroke="#3B2A25" stroke-width="22"/><circle cx="463" cy="253" r="118" fill="none" stroke="#3B2A25" stroke-width="22"/></svg>',
    powerbi: LOGO_HEAD + '<rect x="8" y="25" width="9" height="16" rx="2.5" fill="#C77700"/><rect x="19.5" y="15" width="9" height="26" rx="2.5" fill="#E5A100"/><rect x="31" y="6" width="9" height="35" rx="2.5" fill="#F2C811"/></svg>',
    tableau: LOGO_HEAD + '<g fill="none"><path d="M24 16v16M16 24h16" stroke="#1E2D5A" stroke-width="3.4"/><path d="M24 3.5v9M19.5 8h9M24 35.5v9M19.5 40h9" stroke="#5B879B" stroke-width="2.6"/><path d="M8 19.5v9M3.5 24h9M40 19.5v9M35.5 24h9" stroke="#E97627" stroke-width="2.6"/><path d="M12 9.4v5.2M9.4 12h5.2M36 33.4v5.2M33.4 36h5.2" stroke="#C72037" stroke-width="2"/><path d="M36 9.4v5.2M33.4 12h5.2M12 33.4v5.2M9.4 36h5.2" stroke="#1E2D5A" stroke-width="2"/></g></svg>',
    canva: LOGO_HEAD + '<defs><linearGradient id="lg-canva" x1=".1" y1=".9" x2=".9" y2=".1"><stop offset="0" stop-color="#00C4CC"/><stop offset="1" stop-color="#7D2AE8"/></linearGradient></defs><circle cx="24" cy="24" r="20" fill="url(#lg-canva)"/><text x="24" y="29.5" text-anchor="middle" font-family="Caveat, cursive" font-size="16" font-weight="700" fill="#fff">Canva</text></svg>',
    ai: LOGO_HEAD + '<defs><linearGradient id="lg-ai" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#A855F7"/></linearGradient></defs><path d="M20 5l4.2 12.8L37 22l-12.8 4.2L20 39l-4.2-12.8L3 22l12.8-4.2z" fill="url(#lg-ai)"/><path d="M38 28l2.2 5.8L46 36l-5.8 2.2L38 44l-2.2-5.8L30 36l5.8-2.2z" fill="url(#lg-ai)"/></svg>'
  };
  function icon(n, cls) {
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[n] || '') + '</svg>';
  }

  /* ------------------------ BOTANICAL SPRIG ART ------------------------ */
  function sprig(o) {
    var p = o.p, leaves = '', i, n = o.n;
    function pt(t) {
      var m = 1 - t;
      return {
        x: m * m * m * p[0] + 3 * m * m * t * p[2] + 3 * m * t * t * p[4] + t * t * t * p[6],
        y: m * m * m * p[1] + 3 * m * m * t * p[3] + 3 * m * t * t * p[5] + t * t * t * p[7],
        dx: 3 * m * m * (p[2] - p[0]) + 6 * m * t * (p[4] - p[2]) + 3 * t * t * (p[6] - p[4]),
        dy: 3 * m * m * (p[3] - p[1]) + 6 * m * t * (p[5] - p[3]) + 3 * t * t * (p[7] - p[5])
      };
    }
    function leaf(x, y, ang, s, fill) {
      return '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + ang.toFixed(1) + ') scale(' + s.toFixed(2) + ')">' +
        '<path d="M0 0C6-15 32-18 50 0C32 18 6 15 0 0Z" fill="' + fill + '"/>' +
        '<path d="M3 0H44" stroke="' + o.vein + '" stroke-width="1.2" fill="none"/></g>';
    }
    for (i = 1; i <= n; i++) {
      var t = 0.06 + (i / (n + 1)) * 0.9, q = pt(t), a = Math.atan2(q.dy, q.dx) * 180 / Math.PI, side = i % 2 ? 1 : -1;
      leaves += leaf(q.x, q.y, a + side * 54, o.size * (1.15 - 0.6 * t), i % 3 ? o.c1 : o.c2);
    }
    var e = pt(1), ea = Math.atan2(e.dy, e.dx) * 180 / Math.PI;
    leaves += leaf(e.x, e.y, ea, o.size * 0.62, o.c1);
    return '<svg class="sprig ' + (o.cls || '') + '" viewBox="0 0 ' + o.w + ' ' + o.h + '" aria-hidden="true" focusable="false">' +
      '<path d="M' + p[0] + ' ' + p[1] + ' C' + p[2] + ' ' + p[3] + ' ' + p[4] + ' ' + p[5] + ' ' + p[6] + ' ' + p[7] + '" fill="none" stroke="' + o.stem + '" stroke-width="2.6" stroke-linecap="round"/>' +
      leaves + '</svg>';
  }
  var GREEN = { vein: 'rgba(255,255,255,.45)', stem: '#3F6F5A', c1: '#2F6B55', c2: '#4E8A6E' };
  var PALE = { vein: 'rgba(255,255,255,.18)', stem: 'rgba(255,255,255,.3)', c1: 'rgba(255,255,255,.16)', c2: 'rgba(255,255,255,.26)' };
  var FOREST_SOFT = { vein: 'rgba(255,255,255,.28)', stem: 'rgba(23,56,46,.5)', c1: 'rgba(23,56,46,.24)', c2: 'rgba(23,56,46,.36)' };
  var GOLD = { vein: 'rgba(255,236,190,.38)', stem: 'rgba(222,194,134,.7)', c1: 'rgba(222,194,134,.34)', c2: 'rgba(222,194,134,.5)' };
  function sp(cls, w, h, p, n, size, c) {
    return sprig({ cls: cls, w: w, h: h, p: p, n: n, size: size, c1: c.c1, c2: c.c2, stem: c.stem, vein: c.vein });
  }

  /* ----------------------- PROJECT ARTWORK (decorative) ----------------------- */
  function art(kind) {
    var s = '<svg class="art" viewBox="0 12 320 158" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">', i, j;
    for (i = 1; i < 5; i++) s += '<path d="M0 ' + (i * 38) + 'H320" stroke="rgba(21,64,52,.07)"/>';
    if (kind === 'forecast') {
      var h = [30, 44, 38, 58, 52, 66], xs = [34, 76, 118, 160, 202, 244], ys = [124, 116, 120, 98, 90, 72];
      for (i = 0; i < 6; i++) s += '<rect x="' + (xs[i] - 10) + '" y="' + (168 - h[i]) + '" width="20" height="' + h[i] + '" rx="4" fill="#B3C8A9" opacity=".75"/>';
      s += '<path d="M34 124L76 116L118 120L160 98L202 90L244 72L244 168L34 168Z" fill="#154034" opacity=".07"/>';
      s += '<polyline points="34,124 76,116 118,120 160,98 202,90 244,72" fill="none" stroke="#154034" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"/>';
      s += '<polyline points="244,72 280,56 308,44" fill="none" stroke="#B08D57" stroke-width="3.2" stroke-dasharray="2 7" stroke-linecap="round"/>';
      for (i = 0; i < 6; i++) s += '<circle cx="' + xs[i] + '" cy="' + ys[i] + '" r="5" fill="#fff" stroke="#154034" stroke-width="2.6"/>';
      s += '<path d="M16 168H304" stroke="rgba(21,64,52,.3)"/>';
    } else if (kind === 'bubbles') {
      var b = [[76, 112, 42, '#B3C8A9', .85], [138, 66, 28, '#7FA27A', .85], [188, 118, 38, '#154034', .88], [246, 74, 24, '#C2A877', .95], [268, 138, 18, '#7FA27A', .8], [116, 152, 16, '#154034', .7], [40, 56, 14, '#C2A877', .8]];
      for (i = 0; i < b.length; i++) {
        s += '<circle cx="' + b[i][0] + '" cy="' + b[i][1] + '" r="' + (b[i][2] + 7) + '" fill="none" stroke="' + b[i][3] + '" stroke-width="1.2" opacity=".5"/>';
        s += '<circle cx="' + b[i][0] + '" cy="' + b[i][1] + '" r="' + b[i][2] + '" fill="' + b[i][3] + '" opacity="' + b[i][4] + '"/>';
      }
      s += '<circle cx="288" cy="34" r="13" fill="none" stroke="#154034" stroke-width="2.6"/><path d="M288 34V25M288 34l6 4M284 18h8" stroke="#154034" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
    } else {
      var mask = ['..XXXX..', '.XXXXXX.', 'XXXXXXXX', '.XXXXXX.', '..XXXX..', '...XX...'], pal = ['#DCE8D5', '#B3C8A9', '#7FA27A', '#3F7A63', '#154034'];
      for (i = 0; i < mask.length; i++) for (j = 0; j < 8; j++) {
        if (mask[i].charAt(j) !== 'X') continue;
        var v = (i * 7 + j * 13 + i * j) % 5;
        s += '<rect x="' + (46 + j * 29) + '" y="' + (14 + i * 29) + '" width="24" height="24" rx="6" fill="' + pal[v] + '"/>';
      }
      s += '<rect x="292" y="26" width="9" height="134" rx="4.5" fill="url(#lg)"/><defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#154034"/><stop offset="1" stop-color="#DCE8D5"/></linearGradient></defs>';
    }
    return s + '</svg>';
  }
  /* Certificate thumbnails: the issuer's own mark when there is one (image), else a small drawing of the topic (viewBox 220 x 98). */
  var CART_HEAD = '<svg class="cart" viewBox="0 0 220 98" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7">';
  var CART = {
    psych: CART_HEAD + '<path d="M52 12C32 12 23 28 25 44c1 9 6 14 8 22v16h26V72c9 0 15-4 14-10l6-3-7-6c5-8 3-17-1-24C67 18 60 12 52 12z" stroke="#E8F1E2" fill="rgba(255,255,255,.08)"/><path d="M38 42C35 31 45 25 52 29c7-6 17 1 13 11 6 6-2 15-10 10-6 6-17 2-17-8z" stroke="#E2C27A"/><path d="M52 29c-2 8 2 12 0 21M44 36c4 0 4 6 0 8M60 35c-4 2-2 8 2 8" stroke="#E2C27A"/><path d="M66 38C80 30 90 28 102 28M60 24C90 2 140 2 162 22M66 48C110 64 150 80 190 72" stroke="#E2C27A" stroke-dasharray="2 4" opacity=".65"/><path d="M118 14c-9 0-13 8-13 16v9l-5 6h36l-5-6v-9c0-8-4-16-13-16zM113 49a5 5 0 0 0 10 0" stroke="#E8F1E2"/><path d="M139 24c4 3 6 8 6 13M143 18c6 5 9 12 9 19" stroke="#E2C27A" opacity=".85"/><circle cx="170" cy="38" r="8" stroke="#E8F1E2"/><ellipse cx="170" cy="26" rx="12" ry="3.6" stroke="#E2C27A"/><path d="M155 62c0-11 7-15 15-15s15 4 15 15" stroke="#E8F1E2"/><path d="M192 52h16M192 86h16M194 52c0 13 12 14 12 17s-12 4-12 17M206 52c0 13-12 14-12 17s12 4 12 17" stroke="#E8F1E2"/><path d="M197 84h6l-3-6z" fill="#E2C27A" stroke="none"/></g></svg>',
    brand: CART_HEAD + '<path d="M30 12h28l22 22v48a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z" fill="rgba(255,255,255,.62)" stroke="#154034"/><circle cx="38" cy="23" r="3.2" stroke="#154034"/><path d="M53 43L56.2 51.6 65.4 52 58.1 57.7 60.6 66.5 53 61.4 45.4 66.5 47.9 57.7 40.6 52 49.8 51.6Z" fill="#B8892B" stroke="none"/><path d="M100 18v64h104" stroke="#154034" opacity=".4" stroke-width="1.2"/><path d="M104 26h20v14h20v14h20v14h22" stroke="#154034" stroke-width="2.2"/><path d="M181 63l6 5-6 5" stroke="#154034" stroke-width="2.2"/><g fill="#B8892B" stroke="none"><circle cx="114" cy="26" r="3.4"/><circle cx="134" cy="40" r="3.4"/><circle cx="154" cy="54" r="3.4"/><circle cx="174" cy="68" r="3.4"/></g></g></svg>',
    digital: CART_HEAD + '<rect x="38" y="10" width="144" height="78" rx="7" stroke="#E8F1E2" fill="rgba(255,255,255,.06)"/><path d="M38 24h144" stroke="#E8F1E2" opacity=".6"/><g fill="#E2C27A" stroke="none"><circle cx="48" cy="17" r="2"/><circle cx="56" cy="17" r="2" opacity=".7"/><circle cx="64" cy="17" r="2" opacity=".45"/></g><rect x="50" y="32" width="64" height="46" rx="5" stroke="#E8F1E2" fill="rgba(255,255,255,.08)"/><path d="M50 58l16-13 13 10 10-7 25 14" stroke="#E8F1E2" opacity=".8"/><circle cx="99" cy="42" r="4" stroke="#E2C27A"/><rect x="58" y="63" width="34" height="9" rx="4.5" fill="#E2C27A" stroke="none"/><path d="M86 66l0 12 3.2-3 2.6 5.4 2.4-1.1-2.6-5.3 4.2-.2z" fill="#fff" stroke="#1C2723" stroke-width="1"/><g fill="#E2C27A" stroke="none"><rect x="128" y="62" width="10" height="16" rx="2" opacity=".6"/><rect x="143" y="52" width="10" height="26" rx="2" opacity=".8"/><rect x="158" y="40" width="10" height="38" rx="2"/></g><path d="M126 52l16-9 14 4 18-16M166 31h7v7" stroke="#E8F1E2"/></g></svg>'
  };
  function certArt(c) {
    if (c.image) return '<img class="c-img" src="' + esc(c.image) + '" alt="' + esc(c.org) + ' logo" loading="lazy">';
    if (CART[c.art]) return CART[c.art];
    return '<i class="ring r1"></i><i class="ring r2"></i><span class="c-ico">' + icon(c.icon) + '</span>';
  }
  function thumb(p) {
    return p.image ? '<img class="art-img" src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">' : art(p.art || 'tiles');
  }

  /* ----------------------------- HELPERS ----------------------------- */
  function linkBtn(url, label, cls) {
    cls = cls || 'btn solid';
    if (url) return '<a class="' + cls + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) + ' ' + icon('external') + '</a>';
    return '<a class="' + cls + ' is-soon" href="#" data-soon="Link coming soon">' + esc(label) + ' <em>soon</em></a>';
  }
  function tagList(tags) {
    if (!tags || !tags.length) return '';
    return '<ul class="tags">' + tags.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
  }
  function head(k) {
    var c = S.copy[k];
    return '<div class="sh-row"><h2 id="' + k + '-title">' + esc(c.title) + '</h2><i class="rule"></i></div>' +
      (c.lede ? '<p class="lede">' + esc(c.lede) + '</p>' : '');
  }
  var toastTimer;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('on'); }, 2400);
  }

  /* ------------------------------ RENDER ------------------------------ */
  function renderNav() {
    $('#brand-name').textContent = S.name;
    $('#brand-sub').textContent = S.brandSub;
    $('#drop').innerHTML = S.projects.map(function (p) {
      return '<li><a href="#/projects/' + esc(p.id) + '">' + icon(p.icon) + '<span>' + esc(p.short) + '</span></a></li>';
    }).join('');
  }

  function renderHero() {
    var h = S.hero;
    $('#hero').innerHTML =
      '<div class="hero-copy">' +
        '<p class="hello rise" style="--d:0">' + esc(h.hello) + '</p>' +
        '<h1 class="name rise" style="--d:1">' + esc(S.name) + '</h1>' +
        '<p class="role rise" style="--d:2">' + esc(h.title) + '</p>' +
        '<p class="intro rise" style="--d:3">' + esc(h.intro) + '</p>' +
        '<ul class="features rise" style="--d:4">' + h.features.map(function (f) { return '<li class="tn-' + esc(f.tone || 'green') + '"><i class="f-ico">' + icon(f.icon) + '</i><span>' + esc(f.label) + '</span></li>'; }).join('') + '</ul>' +
        '<div class="cta rise" style="--d:5"><a class="btn solid" href="#projects">View My Projects ' + icon('arrow') + '</a><a class="btn" href="mailto:' + esc(S.contact.email) + '">Let\'s Connect</a></div>' +
      '</div>' +
      '<div class="stage rise" style="--d:2">' +
        '<div class="pf">' +
          '<i class="sh sh-l" aria-hidden="true"></i><i class="sh sh-r1" aria-hidden="true"></i><i class="sh sh-r2" aria-hidden="true"></i><i class="ol" aria-hidden="true"></i>' +
          '<figure class="photo"><img src="' + esc(h.photo) + '" alt="' + esc(h.photoAlt) + '" width="333" height="400" fetchpriority="high"></figure>' +
        '</div>' +
        '<div class="script" aria-hidden="true">' + h.script.map(function (l) { return '<span>' + esc(l) + '</span>'; }).join('') +
          '<svg viewBox="0 0 120 40" class="underline"><path d="M4 33C40 14 82 8 116 12" fill="none" stroke="#154034" stroke-width="2" stroke-linecap="round"/><path d="M30 37C58 28 84 24 106 25" fill="none" stroke="#154034" stroke-width="1.8" stroke-linecap="round"/></svg></div>' +
        sp('sprig-hero', 200, 220, [190, 230, 150, 150, 120, 80, 60, 10], 5, 1.5, GREEN) +
      '</div>';
  }

  function renderAbout() {
    var a = S.about, j = a.journey, q = a.quote;
    $('#about-grid').innerHTML =
      '<div class="about-copy">' + head('about') +
        '<p>' + esc(a.text) + '</p>' +
        '<ul class="meta">' +
          '<li>' + icon('pin') + '<span>' + esc(a.location) + '</span></li>' +
          '<li><a href="mailto:' + esc(S.contact.email) + '">' + icon('mail') + '<span>' + esc(S.contact.email) + '</span></a></li>' +
          '<li><a href="' + esc(S.contact.linkedin.url) + '" target="_blank" rel="noopener" title="Supriya Jana on LinkedIn">' + icon('linkedin') + '<span>LinkedIn</span></a></li>' +
        '</ul></div>' +
      '<article class="gcard journey reveal" style="--i:1"><h3>' + esc(j.title) + '</h3><ol class="tl">' +
        j.items.map(function (x) { return '<li><span class="dot"></span><span class="node">' + icon(x.icon) + '</span><div><b>' + esc(x.title) + '</b><span>' + esc(x.line) + '</span><small>' + esc(x.when) + '</small></div></li>'; }).join('') +
      '</ol></article>' +
      '<article class="gcard quote reveal" style="--i:2"><span class="qmark" aria-hidden="true">&ldquo;</span><blockquote><p>' + esc(q.text) + '</p></blockquote><b class="by">&mdash; ' + esc(q.by) + '</b></article>' +
      '<figure class="desk reveal" style="--i:3" aria-label="A notebook with a five-step approach"><i class="laptop" aria-hidden="true"></i><i class="pen" aria-hidden="true"></i>' +
        '<ul class="nb">' + a.notebook.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></figure>';
  }

  function renderSkills() {
    var k = S.skills;
    $('#skills-band').innerHTML =
      '<div class="band-copy">' + head('skills') +
        '<p class="lede">' + esc(k.intro) + '</p><a class="btn solid band-btn" href="#/skills">View All Skills ' + icon('arrow') + '</a></div>' +
      '<ul class="tiles">' + k.tiles.map(function (t, i) {
        return '<li class="tile tn-' + esc(t.tone || 'green') + ' reveal" style="--i:' + (i + 1) + '"><div class="tin"><span class="t-ico">' + icon(t.icon) + '</span><b>' + esc(t.title) + '</b><small>' + esc(t.sub) + '</small></div></li>';
      }).join('') + '</ul>';
  }

  /* "Under maintenance" box: shown on a project's card and on its banner when the project has a `maintenance` field in content.js. */
  function maintHTML(m) {
    return '<div class="maint" role="status"><span class="m-ico">' + icon('wrench') + '</span><div><b>' + esc(m.title || 'Under maintenance') + '</b><span>' + esc(m.text) + '</span></div></div>';
  }
  function projectCard(p, i) {
    /* a featured project is a full-width card: cover on the left, text and button on the right */
    if (p.featured) {
      return '<a class="pcard feature" href="#/projects/' + esc(p.id) + '" style="--i:' + i + '">' +
        '<div class="pthumb"' + (p.thumbRatio ? ' style="aspect-ratio:' + esc(p.thumbRatio) + '"' : '') + '>' + thumb(p) + '</div>' +
        '<div class="pside"><span class="p-cat">' + esc(p.category) + '</span><h3>' + esc(p.cardTitle || p.title) + '</h3>' + tagList(p.tags) + '<p>' + esc(p.summary) + '</p>' + (p.maintenance ? maintHTML(p.maintenance) : '') +
        '<span class="plink">' + esc(p.cta || 'View Project') + ' ' + icon('arrow') + '</span></div></a>';
    }
    var ext = !!p.cardLink;
    return '<a class="pcard" href="' + (ext ? esc(p.cardLink) + '" target="_blank" rel="noopener' : '#/projects/' + esc(p.id)) + '" style="--i:' + i + '">' +
      '<div class="pthumb">' + thumb(p) + '</div>' +
      '<div class="pbody"><h3>' + esc(p.cardTitle || p.title) + '</h3>' + tagList(p.tags) + '<p>' + esc(p.summary) + '</p></div>' +
      '<span class="plink">View Project ' + icon(ext ? 'external' : 'arrow') + '</span></a>';
  }
  function soonCard(s, i, wide) {
    return '<div class="pcard soon' + (wide ? ' wide' : '') + '" style="--i:' + i + '"><span class="soon-ico">' + icon('plus') + '</span><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div></div>';
  }
  function renderProjects() {
    var tabs = S.projectTabs;
    $('#projects-wrap').innerHTML =
      '<div class="proj-head"><div>' + head('projects') + '</div><a class="link-all" href="#/projects/' + esc(S.projectTabs[0].projects[0] || S.projects[0].id) + '">View All Projects ' + icon('arrow') + '</a></div>' +
      '<div class="tabs" role="tablist" aria-label="Project groups">' + tabs.map(function (t, i) {
        return '<button class="tab' + (i ? '' : ' on') + '" role="tab" aria-selected="' + (i ? 'false' : 'true') + '" data-tab="' + i + '">' + icon(t.icon) + '<span>' + esc(t.label) + '</span></button>';
      }).join('') + '</div>' +
      '<div class="pgrid" id="pgrid" role="tabpanel"></div>';
    setTab(0);
  }
  function setTab(i) {
    var t = S.projectTabs[i], html = '';
    t.projects.forEach(function (id, n) { var p = find('projects', id); if (p) html += projectCard(p, n); });
    if (t.soon) html += soonCard(t.soon, t.projects.length, !t.projects.length);
    $('#pgrid').innerHTML = html;
    $('#pgrid').classList.toggle('empty', !t.projects.length);
    $$('.tab').forEach(function (b, n) { b.classList.toggle('on', n === i); b.setAttribute('aria-selected', n === i ? 'true' : 'false'); });
  }

  var CT = ['t0', 't1', 't2', 't3'];
  function renderCerts() {
    $('#certs').innerHTML = head('certifications') +
      '<div class="cgrid">' + S.certifications.map(function (c, i) {
        return '<article class="ccard reveal' + (c.learning ? ' learning' : '') + '" style="--i:' + i + '">' +
          '<div class="cthumb ' + CT[i % 4] + (c.image ? ' t-logo' : '') + '">' + certArt(c) + '</div>' +
          '<div class="cbody"><h3>' + esc(c.title) + '</h3>' + tagList(c.tags) + '<p>' + esc(c.summary) + '</p></div>' +
          '<span class="cfoot">' + esc(c.org) + ' &middot; ' + esc(c.period) + '</span></article>';
      }).join('') + '</div>';
  }

  function renderExperience() {
    $('#experience').innerHTML = '<div class="gcard xwrap reveal">' + head('experience') +
      '<ul class="xlist">' + S.experience.map(function (e, i) {
        return '<li><a class="xitem tint-' + esc(e.tint || ['sky', 'blush', 'butter'][i % 3]) + '" href="#/experience/' + esc(e.id) + '"><span class="x-ico">' + icon(e.icon) + '</span><span class="x-txt"><b>' + esc(e.orgShort) + '</b><small>' + esc(e.title) + ' &middot; ' + esc(e.year) + '</small></span>' + icon('arrow') + '</a></li>';
      }).join('') + '</ul></div>';
  }

  function renderTools() {
    $('#tools-wrap').innerHTML = head('tools') + '<ul class="tool-row">' + S.tools.map(function (t, i) {
      return '<li class="tool tt-' + esc(t.tint || 'blue') + ' reveal" style="--i:' + i + '"><a href="#/tools/' + esc(t.id) + '"><span class="tool-ico">' + (LOGOS[t.logo] || icon(t.icon)) + '</span><b>' + esc(t.label) + '</b>' + moreCue() + '</a></li>';
    }).join('') + '</ul>';
  }

  function renderAchievements() {
    $('#ach-wrap').innerHTML = head('achievements') + '<ul class="ach-row">' + S.achievements.map(function (a, i) {
      return '<li class="ach a-' + esc(a.tint || 'sky') + ' reveal" style="--i:' + i + '"><span class="ach-ico">' + icon(a.icon) + '</span><p>' + esc(a.text) + '</p></li>';
    }).join('') + '</ul>';
  }

  function renderInterests() {
    $('#int-wrap').innerHTML = '<div class="int-bar reveal">' + head('interests') +
      '<ul class="chips">' + S.interests.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<ul class="chips langs"><li class="lab">Languages</li>' + S.languages.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>';
  }

  function youtubeLink() {
    var url = S.contact.youtube && S.contact.youtube.url;
    return url
      ? '<a href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="YouTube channel" title="YouTube channel">' + icon('youtube') + '</a>'
      : '<a href="#" data-soon="YouTube link coming soon" aria-label="YouTube channel, link coming soon" title="YouTube channel">' + icon('youtube') + '</a>';
  }
  function renderFoot() {
    var L = S.limited, line = (L && L.line) || S.footerLine;
    $('#contact').innerHTML =
      sp('sprig-foot r', 200, 160, [192, 150, 140, 120, 70, 80, 10, 14], 5, .6, FOREST_SOFT) +
      '<div class="wrap foot-in">' +
        '<div class="f-brand"><span class="monogram" aria-hidden="true">S<i>J</i></span><div><b>' + esc(S.name) + '</b><small>' + esc(S.brandSub) + '</small></div></div>' +
        '<div class="f-mid">' +
          '<p class="f-line">&ldquo;' + esc(line) + '&rdquo;</p></div>' +
        '<div class="le" id="le">' +
          (L ? '<div class="le-main"><p class="le-cap">' + esc(L.caption) + '</p><div class="le-timer" id="le-timer" role="timer" aria-label="Countdown"></div></div>' : '') +
          '<div class="le-social"><a href="' + esc(S.contact.linkedin.url) + '" target="_blank" rel="noopener" aria-label="Supriya Jana on LinkedIn" title="Supriya Jana on LinkedIn">' + icon('linkedin') + '</a>' + youtubeLink() + '<a href="mailto:' + esc(S.contact.email) + '" aria-label="Email ' + esc(S.contact.email) + '" title="' + esc(S.contact.email) + '">' + icon('mail') + '</a></div>' +
        '</div>' +
      '</div>';
  }

  /* A one-off countdown (S.limited.seconds, default 60). It starts when the footer scrolls into view. */
  function setupCountdown() {
    var L = S.limited, box = $('#le-timer'), plate = $('#le');
    if (!L || !box) return;
    var total = Math.max(5, parseInt(L.seconds, 10) || 60), cells = {}, timer = 0, end = 0, lastSec = -1;
    box.innerHTML = [['m', 'Min'], ['s', 'Sec']].map(function (u, i) {
      return (i ? '<i aria-hidden="true">:</i>' : '') + '<span class="u"><b data-u="' + u[0] + '">00</b><small>' + u[1] + '</small></span>';
    }).join('');
    $$('[data-u]', box).forEach(function (b) { cells[b.getAttribute('data-u')] = b; });
    function two(n) { return n < 10 ? '0' + n : String(n); }
    function render(ms) {
      var s = Math.max(0, Math.ceil(ms / 1000));
      cells.m.textContent = two(Math.floor(s / 60));
      cells.s.textContent = two(s % 60);
      plate.classList.toggle('urgent', s <= 10);
      if (s !== lastSec && !reduce) { cells.s.classList.remove('tick'); void cells.s.offsetWidth; cells.s.classList.add('tick'); }
      lastSec = s;
    }
    function finish() {
      clearInterval(timer);
      plate.classList.add('closed'); plate.classList.remove('urgent');
      $('.le-main', plate).innerHTML = '<p class="le-closed">' + esc(L.closed) + '</p>';
    }
    function tick() { var d = end - Date.now(); if (d <= 0) finish(); else render(d); }
    function start() { end = Date.now() + total * 1000; render(total * 1000); timer = setInterval(tick, 250); }
    render(total * 1000);
    var foot = $('#contact');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); start(); } }, { threshold: 0.35 });
      io.observe(foot);
    } else start();
  }

  /* --------------------------- GLASS SLIDE LAYER --------------------------- */
  var layer = $('#layer'), sheet = $('#layer-sheet'), lastFocus = null, layerOpen = false, pushed = false, firstSync = true, hideTimer;

  function projectHTML(kind, item, idx, list) {
    var prev = list[idx - 1], next = list[idx + 1], isP = kind === 'projects';
    function step(x, dir) {
      if (!x) return '<span></span>';
      return '<a class="l-step ' + dir + '" href="#/' + kind + '/' + esc(x.id) + '" data-replace="' + kind + '/' + esc(x.id) + '"><small>' + (dir === 'prev' ? 'Previous' : 'Next') + '</small><b>' + esc(x.short) + '</b></a>';
    }
    return (isP && !item.gallery && !item.pdf ? '<div class="l-art">' + thumb(item) + '</div>' : '') +
      '<p class="l-cat">' + esc(isP ? item.category : item.title) + '</p>' +
      '<h2 id="layer-title">' + esc(isP ? item.title : item.org) + '</h2>' +
      '<div class="l-meta"><span>' + esc(item.year) + '</span>' + (item.location && !isP ? '<span>' + esc(item.location) + '</span>' : '') + '</div>' +
      (item.banner ? bannerHTML(item) : '') +
      (item.pdf ? reportHTML(item) : '') +
      (item.gallery && !item.showcase ? galleryHTML(item) : '') +
      (item.description || []).map(function (d) { return '<p class="l-desc">' + esc(d) + '</p>'; }).join('') +
      (item.showcase ? showcaseHTML(item) : '') +
      (item.showcase && item.gallery ? '<h3 class="l-h">' + esc(item.galleryTitle || 'All pages') + '</h3>' + galleryHTML(item) : '') +
      '<h3 class="l-h">' + esc(item.pointsTitle || 'What I did') + '</h3><ul class="l-points">' + item.points.map(function (p) { return '<li>' + icon('check') + '<span>' + esc(p) + '</span></li>'; }).join('') + '</ul>' +
      (item.findings && item.findings.length ? '<h3 class="l-h">' + esc(item.findingsTitle || 'Key findings') + '</h3><ul class="l-points find">' + item.findings.map(function (p) { return '<li>' + icon('sparkle') + '<span>' + esc(p) + '</span></li>'; }).join('') + '</ul>' : '') +
      (item.recommendations && item.recommendations.length ? '<h3 class="l-h">' + esc(item.recsTitle || 'Recommendations') + '</h3><ul class="l-points find">' + item.recommendations.map(function (p) { return '<li>' + icon('target') + '<span>' + esc(p) + '</span></li>'; }).join('') + '</ul>' : '') +
      tagList(item.allTags || item.tags) +
      (isP && !item.banner && !item.pdf && !item.deck && (item.link || !item.gallery) ? '<div class="l-actions">' + linkBtn(item.link, item.linkLabel || 'View project', 'btn solid') + '</div>' : '') +
      '<div class="l-nav">' + step(prev, 'prev') + step(next, 'next') + '</div>';
  }
  /* Small "Projects" cue shown under every skill and tool tile (the tile is a link to its projects slide). */
  function moreCue() { return '<em class="t-more">Projects ' + icon('arrow') + '</em>'; }

  /* The slide a skill or tool tile opens: the projects listed in that tile's `projects` (content.js), or "coming soon". */
  function focusHTML(kind, item, idx, list) {
    var isTool = kind === 'tools', name = isTool ? item.label : item.title;
    function step(x, dir) {
      if (!x) return '<span></span>';
      return '<a class="l-step ' + dir + '" href="#/' + kind + '/' + esc(x.id) + '" data-replace="' + kind + '/' + esc(x.id) + '"><small>' + (dir === 'prev' ? 'Previous' : 'Next') + '</small><b>' + esc(x.label || x.title) + '</b></a>';
    }
    var ps = (item.projects || []).map(function (id) { return find('projects', id); }).filter(Boolean);
    return '<p class="l-cat">' + (isTool ? 'Tool' : 'Skill') + '</p>' +
      '<h2 id="layer-title">' + esc(name) + '</h2>' +
      '<p class="l-desc">' + esc(isTool ? 'Projects where I used ' + name + '.' : 'Projects that show ' + name.toLowerCase() + ' in action.') + '</p>' +
      (ps.length
        ? '<div class="l-plist">' + ps.map(function (p) {
            return '<a class="l-proj" href="#/projects/' + esc(p.id) + '"><span class="l-pthumb">' + thumb(p) + '</span><span class="l-ptxt"><b>' + esc(p.cardTitle || p.title) + '</b><small>' + esc(p.category) + '</small></span>' + icon('arrow') + '</a>';
          }).join('') + '</div>'
        : soonCard({ title: 'Projects coming soon', text: 'Projects ' + (isTool ? 'made with ' : 'showing ') + name + ' will be added here.' }, 0, true)) +
      '<div class="l-nav">' + step(list[idx - 1], 'prev') + step(list[idx + 1], 'next') + '</div>';
  }
  /* Dashboard pages inside a project slide: one large page, a caption and a strip of small pages to switch between. */
  function galleryHTML(item) {
    var g = item.gallery, f = g[0];
    return '<div class="l-gallery">' +
      '<a class="l-shot" href="' + esc(f.img) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(f.img) + '" alt="' + esc(item.title + ': ' + f.title) + '"></a>' +
      (g.length > 1 ? '<p class="l-shotcap"><b>' + esc(f.title) + '</b><span>' + esc(f.caption) + '</span></p>' : '') +
      (g.length < 2 ? '' : '<div class="l-thumbs' + (g.length > 8 ? ' many' : (g.length > 2 ? ' row' : '')) + '" style="--n:' + g.length + '">') + (g.length < 2 ? [] : g).map(function (s, i) {
        return '<button type="button" class="l-th' + (i ? '' : ' on') + '" data-shot="' + i + '" aria-label="Show the ' + esc(s.title) + ' page"><img src="' + esc(s.thumb || s.img) + '" alt="" loading="lazy"><span>' + esc(s.title) + '</span></button>';
      }).join('') + (g.length < 2 ? '' : '</div>') +
      (item.deck && item.link ? '<div class="l-deck"><a class="btn solid" href="' + esc(item.link) + '" download>' + icon('download') + ' ' + esc(item.linkLabel || 'Open the PPT') + '</a><small>' + esc(item.fileNote || 'File download.') + '</small></div>' : '') +
      (item.galleryNote ? '<p class="l-note">' + esc(item.galleryNote) + '</p>' : '') +
    '</div>';
  }
  /* Chart and report side by side: the project chart (click for full size) and the PDF in an inline viewer.
     The viewer is hidden on small phones, where the button opens the PDF instead. */
  function reportHTML(item) {
    var src = item.pdf + '#view=FitH&navpanes=0';
    return '<div class="l-duo">' +
      '<a class="l-chart" href="' + esc(item.chart) + '" target="_blank" rel="noopener" title="Open the chart full size"><img src="' + esc(item.chart) + '" alt="' + esc(item.title) + ': project chart"><small>Project chart</small></a>' +
      '<div class="l-pdf"><iframe src="' + esc(src) + '" title="Full report (PDF)"></iframe>' +
        '<a class="btn solid" href="' + esc(item.pdf) + '" target="_blank" rel="noopener">' + esc(item.linkLabel || 'Open the report') + ' ' + icon('external') + '</a></div>' +
      '</div>';
  }
  /* Banner at the top of a showcase project: artwork, feature chips and the app button. */
  function bannerHTML(item) {
    return '<div class="l-banner"><img src="' + esc(item.banner) + '" alt="">' +
      '<div class="l-banner-in">' +
        '<ul class="lb-chips">' + (item.bannerChips || []).map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
        (item.maintenance ? '<div class="lb-act">' + maintHTML(item.maintenance) + '</div>' : '<div class="lb-act">' + linkBtn(item.link, item.linkLabel || 'Open the project', 'btn solid') + (item.bannerNote ? '<small>' + esc(item.bannerNote) + '</small>' : '') + '</div>') +
      '</div></div>';
  }
  /* Highlights: big, captioned pictures as alternating rows, like a product page. */
  function showcaseHTML(item) {
    return '<h3 class="l-h">' + esc(item.showcaseTitle || 'Highlights') + '</h3><div class="l-show">' + item.showcase.map(function (s, i) {
      return '<figure class="l-sc"><a class="l-scimg" href="' + esc(s.img) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(s.img) + '" alt="' + esc(s.title) + '" loading="lazy"></a>' +
        '<figcaption><span class="l-scn">' + pad(i + 1) + '</span><small>' + esc(s.label) + '</small><b>' + esc(s.title) + '</b><p>' + esc(s.text) + '</p></figcaption></figure>';
    }).join('') + '</div>';
  }
  function skillsHTML() {
    return '<p class="l-cat">As listed on my CV</p><h2 id="layer-title">' + esc(S.copy.skills.title) + '</h2>' +
      '<p class="l-desc">' + esc(S.skills.intro) + '</p>' +
      S.skills.groups.map(function (g) {
        return '<div class="l-group"><h3 class="l-h"><span class="l-gico">' + icon(g.icon) + '</span>' + esc(g.title) + '</h3><ul class="chips">' +
          g.items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>';
      }).join('');
  }

  function openLayer(kind, id) {
    var html, tag, gal = false;
    if (kind === 'skills') { html = skillsHTML(); tag = 'Skills & Expertise'; }
    else if (kind === 'tools' || kind === 'skill') {
      var fl = kind === 'tools' ? S.tools : S.skills.tiles, fi = fl.filter(function (x) { return x.id === id; })[0];
      if (!fi) { hideLayer(); return; }
      var fx = fl.indexOf(fi);
      html = focusHTML(kind, fi, fx, fl);
      tag = (kind === 'tools' ? 'Tool · ' : 'Skill · ') + pad(fx + 1);
    }
    else {
      var list = S[kind], item = find(kind, id);
      if (!item) { hideLayer(); return; }
      if (kind === 'projects') {
        var shown = []; S.projectTabs.forEach(function (t) { t.projects.forEach(function (pid) { var po = find('projects', pid); if (po && shown.indexOf(po) < 0) shown.push(po); }); });
        list = shown.indexOf(item) > -1 ? shown : [item];
      }
      var idx = list.indexOf(item);
      html = projectHTML(kind, item, idx, list);
      gal = kind === 'projects' && !!(item.gallery || item.pdf);
      tag = (kind === 'projects' ? 'Project' : 'Internship') + (list.length > 1 ? ' · ' + pad(idx + 1) : '');
    }
    $('#stack').classList.toggle('wide', gal);
    $('#layer-tag').textContent = tag;
    $('#layer-body').innerHTML = html;
    sheet.scrollTop = 0;
    if (!layerOpen) {
      lastFocus = document.activeElement;
      clearTimeout(hideTimer);
      layer.hidden = false;
      document.documentElement.classList.add('lock', 'layer-open');
      void layer.offsetWidth; /* force a reflow so the transition runs */
      layer.classList.add('show');
      layerOpen = true;
      setTimeout(function () { $('#layer-close').focus(); }, 80);
    }
  }
  function hideLayer() {
    if (!layerOpen) return;
    layerOpen = false;
    layer.classList.remove('show');
    document.documentElement.classList.remove('lock', 'layer-open');
    hideTimer = setTimeout(function () { layer.hidden = true; }, reduce ? 0 : 420);
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} }
  }
  function closeUI() {
    if (!layerOpen) return;
    if (pushed) { pushed = false; history.back(); }
    else { history.replaceState(null, '', location.pathname + location.search); hideLayer(); }
  }
  function parseHash() {
    var h = location.hash, m = h.match(/^#\/(projects|experience|tools|skill)\/([\w-]+)$/);
    if (m) return { kind: m[1], id: m[2] };
    if (h === '#/skills') return { kind: 'skills', id: '' };
    return null;
  }
  function sync() {
    var r = parseHash();
    if (r) { if (!layerOpen) pushed = !firstSync; openLayer(r.kind, r.id); }
    else hideLayer();
    firstSync = false;
  }

  /* ---------------------------- BEHAVIOUR ---------------------------- */
  function setupClicks() {
    document.addEventListener('click', function (e) {
      var soon = e.target.closest('[data-soon]');
      if (soon) { e.preventDefault(); toast(soon.getAttribute('data-soon')); return; }
      var shot = e.target.closest('[data-shot]');
      if (shot) {
        var rr = parseHash(), it = rr && rr.kind === 'projects' ? find('projects', rr.id) : null;
        var s = it && it.gallery && it.gallery[parseInt(shot.getAttribute('data-shot'), 10)];
        if (s) {
          var box = shot.closest('.l-gallery'), link = $('.l-shot', box), img = $('img', link);
          link.href = s.img; img.src = s.img; img.alt = it.title + ': ' + s.title;
          $('.l-shotcap', box).innerHTML = '<b>' + esc(s.title) + '</b><span>' + esc(s.caption) + '</span>';
          $$('.l-th', box).forEach(function (b) { b.classList.toggle('on', b === shot); });
        }
        return;
      }
      var tab = e.target.closest('[data-tab]');
      if (tab) { setTab(parseInt(tab.getAttribute('data-tab'), 10)); return; }
      var rep = e.target.closest('[data-replace]');
      if (rep) {
        e.preventDefault();
        history.replaceState(null, '', '#/' + rep.getAttribute('data-replace'));
        var r = parseHash(); if (r) openLayer(r.kind, r.id);
        return;
      }
      if (e.target.closest('#nav-links a')) { $('#nav').classList.remove('open'); $('#burger').setAttribute('aria-expanded', 'false'); }
    });
    $('#layer-close').addEventListener('click', closeUI);
    $('#layer-scrim').addEventListener('click', closeUI);
    $('#stack').addEventListener('click', function (e) { if (e.target === this) closeUI(); });
    document.addEventListener('keydown', function (e) {
      if (!layerOpen) return;
      if (e.key === 'Escape') { e.preventDefault(); closeUI(); return; }
      if (e.key === 'Tab') {
        var f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', sheet).filter(function (x) { return x.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    window.addEventListener('hashchange', sync);

    var burger = $('#burger');
    burger.innerHTML = icon('menu');
    burger.addEventListener('click', function () {
      var open = $('#nav').classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    $('#layer-close').innerHTML = icon('close');
  }

  function setupCv() {
    $$('[data-cv]').forEach(function (a) {
      a.innerHTML = icon('download') + ' Download Resume';
      if (S.resume && S.resume.url) { a.href = S.resume.url; a.target = '_blank'; a.rel = 'noopener'; }
      else { a.classList.add('is-soon'); a.setAttribute('data-soon', 'Resume link coming soon'); }
    });
  }

  /* Soft light that follows the pointer across the glass slides and cards (hover only). */
  function setupGlow() {
    if (reduce) return;
    var sel = '.band-grid, .pbase, .gbase, .int-bar';
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest(sel);
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  function setupReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -3% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  function setupScroll() {
    var bar = $('#progress'), links = $$('#nav-links a'), ticking = false;
    var targets = links.map(function (a) { return $('#' + a.dataset.sec); });
    function frame() {
      ticking = false;
      var y = window.scrollY, vh = window.innerHeight, doc = document.documentElement.scrollHeight - vh;
      bar.style.transform = 'scaleX(' + (doc > 0 ? Math.min(1, y / doc) : 0) + ')';
      var cur = 0, best = -1e9;
      targets.forEach(function (s, i) {
        if (!s) return;
        var top = s.getBoundingClientRect().top;
        if (top < vh * 0.4 && top > best) { best = top; cur = i; }
      });
      if (doc > 0 && y >= doc - 4) cur = links.length - 1;
      links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
      $('#nav').classList.toggle('stuck', y > 8);
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    frame();
  }

  /* ------------------------------ START ------------------------------ */
  renderNav(); renderHero(); renderAbout(); renderSkills(); renderProjects(); renderCerts();
  renderExperience(); renderTools(); renderAchievements(); renderInterests(); renderFoot();
  setupCv(); setupClicks(); setupReveal(); setupScroll(); setupCountdown(); setupGlow();
  sync();
})();
