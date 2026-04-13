# Claude Skill: Constructor de Paginas Web (estilo CSS moderno)

## Objetivo
Esta skill hace que Claude construya paginas web siguiendo un estilo CSS-first, limpio y profesional: priorizar CSS antes que JS, codigo bien formateado, comentarios por secciones y responsive completo para movil, tablet y pantallas superiores a 1080px.

## Cuando usarla
- Cuando el usuario pide crear una pagina, componente o seccion visual.
- Cuando se requiere replicar un estilo moderno basado en CSS avanzado.
- Cuando se quiere minimizar JavaScript y resolver interacciones desde CSS.

## Principios del estilo
1. CSS-first: intentar resolver layout, estados e interacciones con CSS antes de usar JS.
2. HTML semantico: usar etiquetas correctas (`header`, `main`, `section`, `article`, `nav`, `form`, `footer`).
3. Escalabilidad: nombres de clases coherentes por bloques y elementos (estilo BEM simple).
4. Formato consistente: indentacion uniforme, espaciado claro y orden logico de propiedades.
5. Comentarios utiles: separar y explicar secciones clave sin sobrecomentar.

## Reglas de implementacion

### 1) Estructura base
- Crear HTML claro, semantico y facil de mantener.
- Evitar wrappers innecesarios.
- Priorizar accesibilidad basica: `alt`, `label`, `button`, `aria-*` cuando aplique.

### 2) CSS por capas de lectura
Orden recomendado dentro del archivo CSS:
- Reset basico (`*`, `*::before`, `*::after`, `box-sizing`).
- Variables globales (`:root`) para colores, espacios, radios, sombras y tipografia.
- Layout general (contenedores, grid/flex).
- Componentes (cards, hero, botones, formularios, menus).
- Estados y variantes (`:hover`, `:focus-visible`, `:has()`, `:is()`, `:where()`).
- Media queries responsive.

### 3) Comentarios de seccion
Usar comentarios cortos para dividir el CSS:
- `/* Base y reset */`
- `/* Variables */`
- `/* Layout principal */`
- `/* Componente: Hero */`
- `/* Componente: Formulario */`
- `/* Estados e interacciones */`
- `/* Responsive: tablet */`
- `/* Responsive: desktop grande */`

### 4) Responsive obligatorio
Disenar en mobile-first y cubrir 3 escalas:
- Movil: base sin media query (hasta ~767px).
- Tablet: `@media (min-width: 768px)`.
- Desktop grande: `@media (min-width: 1080px)`.

Adicional recomendado:
- Usar `clamp()` para tipografias y espacios fluidos.
- Usar `min()`, `max()` y `width: min(90%, 1200px)` para contenedores.
- Mantener lineas de texto legibles y jerarquia clara.

### 5) JavaScript solo cuando sea necesario
Antes de agregar JS, comprobar si se puede resolver con:
- `:has()` para estados parent-child.
- `:checked`, `:focus-within`, `:target`, `:popover-open`.
- `dialog`, `popover` y transiciones CSS.

Si JS es obligatorio:
- Mantenerlo pequeno y enfocado a comportamiento.
- No usar JS para estilos que CSS ya cubre.

## Tecnicas modernas recomendadas
- Selectores: `:has()`, `:is()`, `:where()`, `:not()`.
- Layout: Grid, Flex, Subgrid, Container Queries cuando aporte valor.
- Variables y animaciones: custom properties y `@property` cuando se necesite animacion tipada.
- UI nativa: `dialog`, `popover`.

## Checklist de calidad
- HTML semantico y accesible.
- CSS organizado por secciones y con comentarios claros.
- Diseno correcto en movil, tablet y desktop 1080+.
- Interacciones fluidas sin abuso de JS.
- Codigo legible, consistente y facil de extender.

## Formato de salida de Claude
Cuando Claude entregue una solucion debe incluir:
1. Breve resumen de la propuesta visual y tecnica.
2. Archivos completos o bloques listos para pegar (`index.html`, `estilos.css`, y `app.js` solo si hace falta).
3. Explicacion corta de como se resolvio el responsive en 3 niveles (movil/tablet/1080+).
4. Nota final indicando que partes quedaron en CSS y por que.

## Prompt recomendado para activar la skill
"Construye esta pagina siguiendo un enfoque CSS-first: codigo semantico, CSS bien organizado con comentarios por secciones, responsive para movil, tablet y pantallas mayores a 1080px, y JavaScript solo si es estrictamente necesario."