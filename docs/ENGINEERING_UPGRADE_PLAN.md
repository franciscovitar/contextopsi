# Engineering Upgrade Plan — contextopsi

> **Meta:** llevar el repo a **BUENO+/MUY BUENO** sin rediseño.
> **Principio:** conservar código actual correcto y separar/eliminar residuos legacy de la plantilla.

## Contrato para la IA ejecutora

Antes de modificar:
- baseline desktop/mobile de `/`, `/contacto`, `/ciclo-charlas`, `/contenido`, `/cursos-inicio`, `/supervisiones` y rutas activas;
- registrar FormContacto success/fail + `generate_lead`, Testimonios, FAQ, navbar y carruseles;
- preservar cards/equipo, imágenes, Motion, responsive, copy, CTAs y tracking;
- no reescribir componentes modernos correctos solo por uniformidad.

---

# FASE 1 — desacople de template

## `package.json`
Todavía se llama `mercadoahora`, aunque Contexto.Psi ya es un producto mucho más amplio.

## Pasos
1. Renombrar package.
2. Buscar referencias heredadas a `mercadoahora`/clientes viejos.
3. Documentar rutas/features reales.
4. Eliminar solo residuos confirmados por import graph.
5. No asumir que todo patrón compartido con Kinepolis está mal.

---

# FASE 2 — consolidar la generación correcta de formulario

## `components/home/FormContacto.jsx` — ACTUAL, conservar

Fortalezas:
- `<form onSubmit>`;
- `FormData`;
- await EmailJS;
- loading + disabled;
- success/reset solo tras success;
- error visible;
- `generate_lead` solo tras success.

## Gaps
- validación solo no-vacío;
- required/tipos/autocomplete incompletos;
- teléfono `type=text`;
- EmailJS client-side con anti-abuse limitado;
- IDs del proveedor acoplados;
- errores completos en console;
- tracking depende de `window.gtag`.

## Target
1. Mantener timing/UI/tracking exactos.
2. `required`, `type=tel/email`, autocomplete y labels correctos.
3. Límites/validación consistentes.
4. Proteger acceso a `window.gtag` y testear que dispare solo en success.
5. Decidir EmailJS browser vs endpoint server-side según volumen/riesgo; no migrar por moda.
6. Si se mantiene browser, documentar restricciones de dominio/cuota/abuso.

## Tests
validación, pending, fail, success, reset y `gtag` solo success.

## `components/home/Formulario.jsx` — LEGACY
Patrón viejo con DOM temporal/`innerHTML`, éxito anticipado y sin pending.

1. Confirmar cero importadores.
2. Si está muerto, eliminar componente + SCSS/config exclusiva.
3. No modernizarlo.

---

# FASE 3 — dependencias heredadas

Manifest incluye `@emailjs/browser` + `emailjs`, Slick, react-typed, Motion, Bootstrap/Sass/Tailwind tooling.

- `@emailjs/browser` tiene consumidor actual.
- `emailjs`: probable residuo; confirmar.
- Slick: confirmar consumidores reales antes de tocar.
- Toast: usado por FormContacto.
- Tailwind/react-typed: mapear.

Crear matriz de deps y eliminar solo huérfanas.

---

# FASE 4 — `Testimonios.jsx`: preservar

Este componente ya está razonablemente diseñado:
- data-driven;
- resize listener con cleanup;
- `useMemo`;
- ajuste de active slide;
- botones semánticos;
- swipe/drag;
- Motion/AnimatePresence justificadas.

## Solo mejoras puntuales
- tests de resize/drag/dots/featured card;
- reduced motion;
- evaluar `matchMedia`/CSS solo si simplifica sin cambiar breakpoints 680/1050.

**No migrar a Slick ni reescribir por deporte.**

---

# FASE 5 — rutas y shell compartido

Rutas repiten Navbar/Footer en algunos casos.

## Proceso
1. Comparar shell real de cada ruta.
2. Crear route-group/layout compartido solo si orden/background/scroll son idénticos.
3. Mantener rutas distintas cuando la composición difiere.
4. `/contacto/page.js` puede seguir como Server Component compositor.

---

# FASE 6 — contenido/equipo data-driven selectivo

Auditar `Coor.jsx`, `CursoInicios.jsx`, `Capacitaciones.jsx`, Testimonios y profesionales.

1. Identificar datos realmente repetidos.
2. Extraer profesionales/cursos/cards a arrays tipados cuando el markup se repita.
3. IDs estables, no índices.
4. Mantener componentes específicos si layouts difieren.
5. No introducir CMS como parte de esta modernización.

---

# FASE 7 — assets duplicados y pesados

Duplicados SHA confirmados:
- `charla.png` == `charla2.png` (~3.75 MB);
- `curso.png` == `curso-transformed.png` (~2.49 MB).

Otros assets pesados: `fotoinicio.png`, `terapia.png`, fotos profesionales ~1 MB+.

## Pasos
1. Import graph de assets.
2. Reapuntar duplicados SHA a una sola fuente.
3. Borrar copia solo después de reemplazar referencias.
4. Verificar archivos con nombres casi duplicados (Tatiana) por uso real.
5. Optimizar a dimensiones reales preservando crop/calidad.
6. Screenshots por ruta/card.

---

# FASE 8 — Navbar/FAQ/interacciones

- Navbar: listener/cleanup, state/ref/classList, fuente única de links, mobile button semántico.
- FAQ: mantener como client island; keyboard/open-close/aria/animation tests.
- No subir páginas enteras a client por un FAQ/slider.

---

# FASE 9 — server/client boundaries

- pages server por default;
- FormContacto/Testimonios/FAQ/Motion islands cliente;
- Footer estático → server;
- data estática fuera del client bundle cuando no necesita interacción.

No medir calidad por cantidad de `use client` eliminados.

---

# FASE 10 — TypeScript + quality gate

Prioridad TS:
1. contact payload/tracking contract;
2. `Professional`, `Course`, `Testimonial`, `FAQ`;
3. navigation/routes;
4. data components.

Gate:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run check
```

Tests: FormContacto/gtag, Testimonios, FAQ, navegación de rutas y snapshots selectivos.

---

# FASE 11 — framework/SEO/performance

Después de gates:
- versión soportada Next/React/tooling;
- metadata/canonical por rutas;
- idioma del documento;
- keyboard/focus;
- assets pesados;
- medir client JS/CWV;
- preservar analytics/event names.

---

# Orden de PRs

1. baseline + import graph components/deps/assets;
2. eliminar Formulario legacy + deps/config muertas + package name;
3. hardening de FormContacto;
4. data repetida/shell si aporta + assets duplicados;
5. TS/check/tests/E2E/CI;
6. framework/performance/a11y/SEO.

---

# Definition of Done — MUY BUENO

- solo existe una estrategia vigente de contacto;
- tracking `generate_lead` se mantiene y solo dispara tras success;
- código legacy muerto eliminado;
- package no se identifica como `mercadoahora`;
- duplicados binarios confirmados resueltos;
- componentes buenos como Testimonios preservados;
- lint + typecheck + tests + E2E + build PASS;
- rutas y visuales preservados.

---

# Prompt para la IA ejecutora

```text
Implementá docs/ENGINEERING_UPGRADE_PLAN.md completo. No rediseñes contextopsi.

Este repo ya tiene código moderno correcto: conservá FormContacto como base y Testimonios como ejemplo; eliminá Formulario legacy en vez de modernizarlo si el import graph confirma que está muerto. No borres deps/assets sin consumidores comprobados.

Mantené generate_lead exactamente ligado al éxito real del formulario. Resolvé duplicados/data/boundaries después. TypeScript/gates antes del framework upgrade. Corré tests/screenshots por fase y no declares terminado hasta cumplir la Definition of Done.
```
